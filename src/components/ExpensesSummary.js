import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import ExpenseSummaryItem from "./ExpenseSummaryItem";
import { useAccountsContext } from "../context/AccountsContext";

const ExpensesSummary = ({handleClose, id, crrAcc}) => {
    const {removeBudget} = useAccountsContext();
    const crrBudget = crrAcc.budgets.find(budget => budget.id === id);
    const crrExpenses = crrBudget.expenses.map(expense => {
        return <ExpenseSummaryItem key={expense.description + 'key'} amount={expense.amount} description={expense.description} />
    })

  return (
    <div className='summary-modal'>
        <div className='budget-summary-name'>{crrBudget.name}
        <div className='summary-btns'>
            <button className='delete-budget-btn' onClick={() => removeBudget(crrBudget)}>Remove</button> <button className='close-modal-summary' onClick={handleClose}><FontAwesomeIcon icon={faX}/></button>
        </div>
        </div>
        <ul className='expenses-list'>
            {crrExpenses}
        </ul>
    </div>
  )
}

export default ExpensesSummary
