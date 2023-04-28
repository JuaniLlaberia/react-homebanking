import { currencyFormater } from "../utils/currencyFormater"

const ExpenseSummaryItem = ({amount, description}) => {
  return (
    <li className='summary-item'>
        <p className='summary-item-text'><span className='summary-item-amount'>{currencyFormater(amount)}</span> - {description}</p>
    </li>
  )
}

export default ExpenseSummaryItem
