import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { currencyFormater } from '../utils/currencyFormater';
import ExpenseModal from '../components/ExpenseModal'
import { useState } from 'react';
import ExpensesSummary from './ExpensesSummary';

const BudgetCard = ({name, crrAmount ,total, id, crrAcc}) => {
  const [showModalExpense, setShowModalExpense] = useState(false);
  const [showModalExpenseSummary, setShowModalExpenseSummary] = useState(false);

  const getProgressBarVariant = function(amount, max) {
    const ratio = amount / max;
    if (ratio < .65) return 'primary-color';
    if (ratio > .65 && ratio < .99) return 'danger-color';
    if (ratio > 1) return 'danger-color-over';
};

  const openExpenseModalHandler = () => {
    setShowModalExpense(true);
  }

  const handleClose = () => setShowModalExpense(false);

  const handleCloseSummary = () => setShowModalExpenseSummary(false);

  return (
    <li className={`budget-card`}>
        <p className='budget-card-name'>{name}</p>
        <progress className={`budget-card-progess ${getProgressBarVariant(crrAmount, total)}`} value={crrAmount} max={total}></progress>
        <p className='amount-card'><span className={`crramount-budget-card ${getProgressBarVariant(crrAmount, total)}-text`}>{currencyFormater(crrAmount)}</span><span className='totalamount-budget-card'>/{currencyFormater(total)}</span></p>
        <div className='btns-card' style={{display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'15px'}}>
          <button className='add-expense-btn' onClick={openExpenseModalHandler}>Add Expense</button>
          <button className='info-btn-budget'><FontAwesomeIcon icon={faRectangleList} size='2x' onClick={() => setShowModalExpenseSummary(true)}/></button>
        </div>

        {showModalExpense && <ExpenseModal handleClose={handleClose} id={id} name={name}/>}
        {showModalExpense && <div onClick={() => setShowModalExpense(false)} className='modal-overlay-expense'></div>}

        {showModalExpenseSummary && <ExpensesSummary handleClose={handleCloseSummary} id={id} crrAcc={crrAcc}/>}
        {showModalExpenseSummary && <div onClick={() => setShowModalExpenseSummary(false)} className='modal-overlay-expense'></div>}
    </li>
  )
}

export default BudgetCard
