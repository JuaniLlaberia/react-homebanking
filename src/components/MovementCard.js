import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { currencyFormater } from '../utils/currencyFormater'
import MovementInfo from './MovementInfo'

const MovementCard = ({ date, amount, description}) => {
  const [showModal, setShowModal] = useState(false);
  const type = amount > 0 ? 'Deposit' : 'Withdraw';

  return (
    <>
      <li className='movement-card'>
          <div className='card-left'>
              <p>{(date)}</p>
              <p className={type === 'Deposit' ? 'deposit' : 'withdraw'}>{type}</p>
          </div>
          <div className='card-right'>
              <p>{currencyFormater(amount)}</p>
              <button style={{background:'transparent', border:'none', cursor:'pointer'}} onClick={() => console.log('Show modal')}><FontAwesomeIcon className='info-icon' size='1x' icon={faCircleInfo} onClick={() => setShowModal(true)}/></button>
          </div>
      </li>
      {showModal && <MovementInfo date={date} amount={amount} description={description} type={type} onClick={() => setShowModal(false)}/>}
      {showModal && <div className='overlay' onClick={() => setShowModal(false)}></div>}
    </>
  )
}

export default MovementCard
