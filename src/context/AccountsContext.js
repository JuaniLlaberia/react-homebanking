import { createContext, useContext, useState } from "react";
import { useCrrAccContext } from "./CrrAccContext";
import {v4 as uuidv4} from 'uuid';

const AccountsContext = createContext(undefined);

export const AccountsProvider = ({children}) => {
    //Getting elements from local storage and setting the state
    const accountsStored = JSON.parse(localStorage.getItem('ACCOUNTS'));
    const [accounts, setAccounts] = useState(accountsStored);
    const {currentAcc} = useCrrAccContext()

    const accIndex = accounts.findIndex(
        (acc) => acc.email === currentAcc?.email
      );

    const addAccount = (account) => setAccounts(prev => {
        if (!prev) {
            const newAccArr = [account];
            localStorage.setItem('ACCOUNTS', JSON.stringify(newAccArr))
            return newAccArr;
        }
        const newAccArr = [...prev, account];
        localStorage.setItem('ACCOUNTS', JSON.stringify(newAccArr))
        return newAccArr;
    })

    const addMovement = (receiver, amount, description) => setAccounts(() => {
        const accCopy = [...accounts];
        const today = new Intl.DateTimeFormat('en-En').format(new Date())

        if (accIndex !== -1) {
            accCopy[accIndex].movements.unshift({
                amount: -amount,
                date: today,
                description: description
              })
        }

        const indexReceiber = accounts.findIndex(
            (acc) => acc.email === receiver.email
          );

        if (indexReceiber !== -1) {
            accCopy[indexReceiber].movements.unshift({
                amount: amount,
                date: today,
                description: description
              })
        }

        localStorage.setItem('ACCOUNTS', JSON.stringify(accCopy));
        return accCopy;
    })

    const addBudget = (name, total) => setAccounts(() => {
        const accCopy = [...accounts];

        accCopy[accIndex].budgets.unshift({
            name:name,
            id: uuidv4(),
            total:total,
            expenses:[],
        });

        localStorage.setItem('ACCOUNTS', JSON.stringify(accCopy));
        return accCopy;
    });

    const addExpense = (budgetID, amount, description) => setAccounts(() => {
        const accCopy = [...accounts];

        accCopy[accIndex].budgets.find(budget => budget.id === budgetID).expenses.push({
            amount: amount,
            description: description
        });

        localStorage.setItem('ACCOUNTS', JSON.stringify(accCopy));
        return accCopy
    })

    const removeBudget = (crrBudget) => setAccounts(() => {
        const accCopy = [...accounts];
        const budgetIndex = accCopy[accIndex].budgets.findIndex(budget => budget === crrBudget)

        accCopy[accIndex].budgets.splice(budgetIndex, 1);

        localStorage.setItem('ACCOUNTS', JSON.stringify(accCopy));
        return accCopy;
    })


    return <AccountsContext.Provider value={{accounts, addAccount, addMovement, addBudget, addExpense, removeBudget}}>
        {children}
    </AccountsContext.Provider>
};

export const useAccountsContext = () => useContext(AccountsContext);