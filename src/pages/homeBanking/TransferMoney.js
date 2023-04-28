import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useCrrAccContext } from '../../context/CrrAccContext';
import { useAccountsContext } from '../../context/AccountsContext';
import '../../assets/transfer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import { currencyFormater } from '../../utils/currencyFormater'
import {useTheme} from '../../context/ThemeContext'

const TransferMoney = () => {
  const {currentAcc} = useCrrAccContext();
  const {accounts, addMovement} = useAccountsContext();
  const [status, setStatus] = useState(undefined);
  const { theme } = useTheme();

  const amountRef = useRef();
  const receiverRef = useRef();
  const descriptionRef = useRef();

  const accToDisplay = useMemo(() => accounts.find(acc => acc.email === currentAcc.email));

  useEffect(() => {document.title = 'Home Banking: Transfer Money'}, []);

  //Reset the error message
  useEffect(() => {
    setTimeout(() => setStatus(undefined), 6000)
  }, [status]);

  //Validate and make transaction (transfer money)
  const validTransaction = (e) => {
    e.preventDefault();
    const accountToTransfer = accounts.find(acc => acc.email === receiverRef.current.value);

    if(!accountToTransfer || accountToTransfer.email === accToDisplay.email) {
      setStatus({status:'statusWrong', msg:'There is somthing wrong with the receivers email'});
      return;
    };

    const amountToTransfer = Number(amountRef.current.value);

    if(amountToTransfer > accToDisplay.movements.reduce((acc, crr) => acc + crr.amount, 0) || amountToTransfer < 0){
      setStatus({status:'statusWrong', msg:'There is somthing wrong with the amount of money being transfer'});
      return;
    }

  addMovement(accountToTransfer, amountToTransfer, descriptionRef.current.value);
  setStatus({status:'statusOk'});

  amountRef.current.value = null;
  receiverRef.current.value = null;
  descriptionRef.current.value = null;
};

  const crrBalance = accToDisplay.movements.reduce((acc, crr) => acc + crr.amount, 0);

  return (
    <main className={`transfer-page-${theme}`}>
      <section className='left-container'>

        <form className='transfer-money' onSubmit={validTransaction}>
          <p className='transfer-title'>Transfer Money</p>
          <div className='amount-sect'>
            <input className='transfer-input' ref={receiverRef} type='text' placeholder='Receivers Email'/>
            <FontAwesomeIcon icon={faEnvelope} className='icon-email'/>
          </div>
          <div className='amount-sect'>
            <input className='transfer-input' ref={amountRef} type='number' placeholder='Amount to transfer'/>
            <FontAwesomeIcon icon={faDollarSign} className='icon-money'/>
          </div>
          <div className='amount-sect'>
            <textarea placeholder='Description' className='transfer-input-area' ref={descriptionRef} />
            <FontAwesomeIcon icon={faComment} className='icon-comment'/>
          </div>
          <button>Send</button>
        </form>
      </section>
      <section className='right-container'>
        <section className='curr-balance'>Account Balance<span>{currencyFormater(crrBalance)}</span></section>
        <section className='transfer-fee'>Transfer Fee<span>0%</span></section>
        <section className={`extra ${status?.status}`}>Status<span>{status === undefined ? 'Waiting...' : (status.status === 'statusOk' ? 'Transaction was successful' : 'Transaction failed')}</span><p style={{fontSize:'0.8rem'}}>{status?.msg}</p></section>
      </section>
      <Navbar />
    </main>
  )
}

export default TransferMoney
