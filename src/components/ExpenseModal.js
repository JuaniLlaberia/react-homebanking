import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react'
import { useAccountsContext } from '../context/AccountsContext';

const ExpenseModal = ({handleClose, id, name}) => {
    const {addExpense} = useAccountsContext();
    const expAmountRef = useRef();
    const descriptionRef = useRef();

    const createExpense = (id, amount, description) => {
        addExpense(id, amount, description);
      };

  return (
    <div className='add-expense-modal'>
      <p>{name} Expense</p>
      <input ref={expAmountRef} type='number' className='add-budget-input' placeholder='e.g. 50'/>
      <input ref={descriptionRef} type='text' className='add-budget-input' placeholder='e.g. Bought two pizzas'/>
      <div className='buttons-modal'>
        <button className='create-budget-btn' onClick={() => {
                if(expAmountRef.current.value !== '' && descriptionRef.current.value !== '') {
                  createExpense(id, Number(expAmountRef.current.value), descriptionRef.current.value);
                  handleClose()
                }
            }}>Add Expense</button>
        <button className='close-modal-budget' onClick={handleClose}><FontAwesomeIcon icon={faX}/></button>
      </div>
    </div>
  )
}

export default ExpenseModal
