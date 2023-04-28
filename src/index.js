import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CrrAccProvider } from './context/CrrAccContext';
import { AccountsProvider } from './context/AccountsContext';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <CrrAccProvider>
        <AccountsProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </AccountsProvider>
      </CrrAccProvider>
    </ThemeProvider>
  </BrowserRouter>
);
