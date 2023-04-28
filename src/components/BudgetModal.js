import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react'

const BudgetModal = ({onClickHandler, onCloseHanlder}) => {
    const nameRef = useRef();
    const amountRef = useRef();

  return (
    <div className='add-budget-modal'>
      <p>Create new Budget</p>
      <input ref={nameRef} type='text' className='add-budget-input' placeholder='e.g. Monthly groceries'/>
      <input ref={amountRef} type='number' className='add-budget-input' placeholder='e.g. 250'/>
      <div className='buttons-modal'>
        <button className='create-budget-btn' onClick={() => {
            if(nameRef.current.value !== '' && amountRef.current.value !== '') {
                onClickHandler(nameRef.current.value, Number(amountRef.current.value));
                onCloseHanlder()
            }
            }}>Add Budget</button>
        <button className='close-modal-budget' onClick={onCloseHanlder}><FontAwesomeIcon icon={faX}/></button>
      </div>
    </div>
  )
}

export default BudgetModal
