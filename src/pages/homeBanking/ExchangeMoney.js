import '../../assets/exchange.css'
import Navbar from '../../components/Navbar'
import { useTheme } from '../../context/ThemeContext'
import { API_CURRENCY_KEY } from '../../apiKey';
import { useEffect, useState } from 'react';

const ExchangeMoney = () => {
  const {theme} = useTheme();
  const [currency, setCurrency] = useState('USD');
  const [newCurrency, setNewCurrency] = useState('EUR');
  const [inputAmount, setInputAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState(0);
  const [exchange, setExchange] = useState(0);

  useEffect(() => {document.title = 'Home Banking: Currency Convertor'}, []);

  useEffect(() => async () => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_CURRENCY_KEY}/latest/${currency}`)
    const data = await response.json();
    setExchange(data.conversion_rates[newCurrency])}, [currency, newCurrency])

  useEffect(() => {
    setOutputAmount(inputAmount * exchange);
    if (currency === newCurrency) {
      setOutputAmount(inputAmount);
      setExchange(1)
    };
  }, [inputAmount, currency, newCurrency, exchange])

  return (
    <main className={`exchange-page-${theme}`}>
      <div className='exchange-container'>
        <p className='title'>Exchange Currency</p>
        <div className='input-field'>
          <select value={currency} onChange={e => setCurrency(e.target.value)}>
            <option value='USD'>USD</option>
          </select>
          <input value={inputAmount} type='number' onChange={e => setInputAmount(e.target.value)}/>
        </div>
        <div className='input-field'>
        <select value={newCurrency} onChange={e => setNewCurrency(e.target.value)}>
            <option value='EUR'>EUR</option>
          </select>
          <input value={outputAmount.toFixed(2)} type='number' onChange={e => setOutputAmount(e.target.value)} readOnly/>
        </div>
        {inputAmount !== 0 ? <p className='rate'>1 <span className='currency-code'>{currency}</span> = {exchange} <span className='currency-code'>{newCurrency}</span></p> : ''}
      FIX!!! BECAUSE IT DOESNT WORK
      </div>
      <Navbar />
    </main>
  )
}

export default ExchangeMoney
