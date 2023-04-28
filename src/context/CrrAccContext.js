import { createContext, useContext, useReducer } from "react";

const CrrAccContext = createContext(undefined);

const reducer = function(currentAcc, action) {
    switch(action.type) {
        case 'setAcc':
            localStorage.setItem('CrrAcc', JSON.stringify(action.account));
            return currentAcc = action.account;
    }
};

export const CrrAccProvider = ({ children }) => {
    const crrAcc = JSON.parse(localStorage.getItem('CrrAcc'));

    const [currentAcc, dispatch] = useReducer(reducer, crrAcc);

    return <CrrAccContext.Provider value={{
        currentAcc,
        dispatch,
    }}>{children}</CrrAccContext.Provider>
};

export const useCrrAccContext = () => useContext(CrrAccContext);