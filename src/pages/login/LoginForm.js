import React, { useState, useRef, useEffect } from 'react'
import '../../assets/signupStyles.css';
import ErrorMsg from '../../components/ErrorMsg';
import { useCrrAccContext } from '../../context/CrrAccContext';
import { useAccountsContext } from '../../context/AccountsContext';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm() {
  const {accounts} = useAccountsContext();
  const [errorMessege, setErrorMessege] = useState(false);
  const {dispatch} = useCrrAccContext();

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  useEffect(() => dispatch({type:'setAcc', account: null}), [])

  const handleSubmit = e => {
    setErrorMessege(false);
    e.preventDefault();
    //We check that the account exist
    const accTest = accounts.find(acc => acc.email === emailRef.current.value && acc.password === passwordRef.current.value);
    //Set current account
    if (accTest) dispatch({type:'setAcc', account: accTest});

    //Display msg in case of invalid account
    if (accTest === undefined) setErrorMessege(true);
    //Reset login fields
    emailRef.current.value = null;
    passwordRef.current.value = null;

    navigate('/movements')
  }

  return (
    <section className='background-signup'>
      <div className='login-container'>
        <p className='signup-title'>Log in</p>
          <form onSubmit={handleSubmit}>
              <input ref={emailRef} type='email' placeholder='Email Adress' className='login-input'/>
              <input ref={passwordRef} type='password' placeholder='Password' className='login-input'/>
              <div className='btn-container'>
                <button className='login-btn'>Log in</button>
                <p>Are you new? <Link to='/signup'>Create Account</Link></p>
              </div>
          </form>
          {errorMessege && <ErrorMsg msg='The email or password is not valid. Try Again!'/>}
      </div>
      <button onClick={() => navigate('/')} className='back-btn'><FontAwesomeIcon icon={faArrowLeft}/> Back Home</button>
    </section>
  )
}
