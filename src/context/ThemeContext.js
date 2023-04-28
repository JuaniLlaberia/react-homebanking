import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = JSON.parse(localStorage.getItem('THEME'));
        return storedTheme !== null ? storedTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem('THEME', JSON.stringify(theme))
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
        }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);