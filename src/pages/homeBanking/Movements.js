import { useMemo, useState, useEffect } from 'react'
import { useCrrAccContext } from '../../context/CrrAccContext'
import '../../assets/movements.css';
import Navbar from '../../components/Navbar';
import MovementCard from '../../components/MovementCard';
import { currencyFormater } from '../../utils/currencyFormater';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import { useAccountsContext } from '../../context/AccountsContext';

export default function Movements() {
    const {accounts} = useAccountsContext();
    const {currentAcc} = useCrrAccContext();
    const [balanceVisible, setBalanceVisible] = useState(true);
    const {theme} = useTheme();

    useEffect(() => {document.title = 'Home Banking: Movements'}, []);

    const accToDisplay = useMemo(() => accounts.find(acc => acc.email === currentAcc.email), [accounts, currentAcc.email]);
    const fullName = accToDisplay.name.split(' ').map(q => q.slice(0,1).toUpperCase() + q.slice(1).toLowerCase()).join(' ')
    const totalBalance = accToDisplay.movements.reduce((acc, crr) => acc + crr.amount, 0);

    const movements = accToDisplay.movements.map(mov => {
      return <MovementCard key={uuidv4()} date={mov.date} amount={mov.amount} description={mov.description}/>
    })

  return (
    <main className={`movements-page-${theme}`}>
      <section className='top-section'>
        <div className='info'><p className='main-text'>{fullName}</p><p className='sec-text'>{accToDisplay.accNum}</p></div>
        <div className='balance'><p className='sec-text'>Balance  <FontAwesomeIcon className='eye-icon' onClick={() => setBalanceVisible(!balanceVisible)} icon={balanceVisible ? faEye : faEyeSlash} style={{cursor:'pointer', marginLeft:'5px', width:'20px'}}/></p><p className='main-text'>{balanceVisible ? currencyFormater(totalBalance) : '*****'}</p></div>
      </section>
      <ul className='movements-container'>
        {movements}
      </ul>
      <Navbar />
    </main>
  )
}
