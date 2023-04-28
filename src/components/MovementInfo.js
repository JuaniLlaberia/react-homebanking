import { currencyFormater } from "../utils/currencyFormater"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

const MovementInfo = ({onClick, date, amount, type, description}) => {
  return (
    <div className='modal'>
        <div className='top-info-mov'><button onClick={onClick}><FontAwesomeIcon icon={faX} className="x-icon"/></button></div>
        <div className='description'>
            <h5>Transaction Information - {type}</h5>
            <p>Date: {date}</p>
            <p>Amount: {currencyFormater(amount)}</p>
            <p className='mov-descp'>{description}</p>
        </div>
    </div>
  )
}

export default MovementInfo
