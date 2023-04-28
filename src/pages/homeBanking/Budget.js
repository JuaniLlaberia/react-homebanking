import { useEffect, useMemo, useState } from 'react'
import '../../assets/budget.css'
import Navbar from '../../components/Navbar'
import BudgetCard from '../../components/BudgetCard';
import { useAccountsContext } from '../../context/AccountsContext';
import { useCrrAccContext } from '../../context/CrrAccContext';
import BudgetModal from '../../components/BudgetModal';
import { useTheme } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Budget = () => {
  const {theme} = useTheme();
  const [showModalBudget, setShowModalBudget] = useState(false);
  const {accounts, addBudget} = useAccountsContext();
  const {currentAcc} = useCrrAccContext();
  const accToDisplay = useMemo(() => accounts.find(acc => acc.email === currentAcc.email), [accounts, currentAcc.email]);

  useEffect(() => {document.title = 'Home Banking: Budget'}, []);

  const createBudget = (name, total) => {
    addBudget(name, total);
  };

  const displayBudgets = accToDisplay.budgets.map(budget => {
      const currentExpense = budget.expenses.reduce((acc, crr) => acc + crr.amount, 0);
      return <BudgetCard key={budget.id} name={budget.name} crrAmount={currentExpense} total={budget.total} id={budget.id} crrAcc={accToDisplay}/>
    })

  const handleClose = () => setShowModalBudget(false)

  return (
    <main className={`budget-page-${theme}`}>
      <button onClick={() => setShowModalBudget(true)} className='add-budget-btn'><FontAwesomeIcon icon={faPlus}/> Add budget </button>
      <ul className='budgets-container'>
        {displayBudgets}
      </ul>
      <Navbar />
      {showModalBudget && <BudgetModal onClickHandler={createBudget} onCloseHanlder={handleClose}/>}
      {showModalBudget && <div onClick={() => setShowModalBudget(false)} className='modal-overlay'></div>}
    </main>
  )
}

export default Budget
