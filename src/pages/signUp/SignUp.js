import React, { useState } from 'react'
import '../../assets/signupStyles.css';
import { useAccountsContext } from '../../context/AccountsContext';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMsg from '../../components/ErrorMsg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm() {
  const {accounts, addAccount} = useAccountsContext();
  const [alreadyRegister, setAlreadyRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({value:'', wasTouched:false});
  const [confPassword, setConfPassword] = useState({value:'', wasTouched:false});

  //Validate format of password
  const validatePasswordFormat = () => {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])");
    return strongRegex.test(password.value);
  };
  //Check that confirmed password is the same as password
  const checkConfirmedPassword = () => confPassword.value === password.value;

  const disabledBtn = () => name && email && validatePasswordFormat() && checkConfirmedPassword();

  const clearInputs = () => {
    setName('');
    setEmail('');
    setPassword({value:'', wasTouched:false});
    setConfPassword({value:'', wasTouched:false});
  }

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const today = new Intl.DateTimeFormat('en-En').format(new Date())
    if(!accounts) {
      const newAcc = {
        name: name,
        email: email,
        password: password.value,
        accNum: Math.floor(Math.random() * 9000000000) + 1000000000,
        movements:[{amount:100000, date: today, description:'Welcome Bonus.'}, {amount:-100, date: today, description:'Welcome Bonus.'}],
      };

    addAccount(newAcc);
    navigate('/login')
    clearInputs();
    return;
    }

    const repitedEmail = accounts.find(acc => acc.email === email);
    if (repitedEmail) {
      setAlreadyRegister(true);
      return;
    };

    const newAcc = {
        name: name,
        email: email,
        password: password.value,
        accNum: Math.floor(Math.random() * 9000000000) + 1000000000,
        movements:[{amount:100000, date: today, description:'Welcome Bonus.'}, {amount:-100, date: today, description:'Welcome Bonus.'}],
        budgets:[],
      };

    addAccount(newAcc);
    navigate('/login')
    clearInputs();
  };

  //See how to make it more efficient
  const borderError = (password.wasTouched && !validatePasswordFormat()) ? 'login-input error-border' : 'login-input';
  const borderError2 = (password.wasTouched && confPassword.wasTouched && !checkConfirmedPassword()) ? 'login-input error-border' : 'login-input';

  let strenght = 0;
  const strenghtBarValidation = () => {
      const strongRegex1 = new RegExp("^(?=.*[a-z])");
      if(strongRegex1.test(password.value)) strenght++
      const strongRegex2 = new RegExp("^(?=.*[A-Z])");
      if(strongRegex2.test(password.value)) strenght++
      const strongRegex3 = new RegExp("^(?=.*[0-9])");
      if(strongRegex3.test(password.value)) strenght++
      const strongRegex4 = new RegExp("^(?=.{12,})");
      if(strongRegex4.test(password.value)) strenght++
      const strongRegex5 = new RegExp("^(?=.*[!@#$%^&*])");
      if(strongRegex5.test(password.value)) strenght++
  }
  strenghtBarValidation();

  return (
    <section className='background-signup'>
      <div className='login-container'>
        <p className='signup-title'>Sign Up</p>
          <form onSubmit={handleSubmit}>
              <input value={name} type='text' placeholder='Full Name' className='login-input' onChange={e => setName(e.target.value)}/>
              <input value={email} type='email' placeholder='Email Adress' className='login-input' onChange={e => {
                setAlreadyRegister(false);
                setEmail(e.target.value)}}/>
              <input className={borderError} value={password.value} type='password' placeholder='Password' onChange={e => setPassword({...password, value:e.target.value})} onBlur={() => setPassword({...password, wasTouched:true})}/>
              <div className='progress-container'>
                <progress className={strenght <= 3 ? 'prog streght-poor' : strenght > 3 &&  strenght <= 4 ? 'prog strenght-okey' : 'prog strenght-strong'} value={strenght} max={5}/>
                <h6 className='strenght-text'>{strenght < 1 ? '' : strenght <= 3 ? 'Poor' : strenght > 3 &&  strenght <= 4 ? 'Acceptable' : 'Strong'}</h6>
              </div>
              {(password.wasTouched && !validatePasswordFormat()) && <p className='error-msg'>Must contain at least: 1 UpperCase, 1 LowerCase, 1 Number, 8 characters and 1 special character</p>}
              <input value={confPassword.value} type='password' placeholder='Confirm Password' className={borderError2} onChange={e => setConfPassword({...confPassword, value:e.target.value})} onBlur={() => setConfPassword({...confPassword, wasTouched:true})}/>
              {(password.wasTouched && confPassword.wasTouched && !checkConfirmedPassword()) && <p className='error-msg'>Passwords MUST match! Check your spealing.</p>}
              <div className='btn-container'>
                <button disabled={!disabledBtn()} className='login-btn'>Create Account</button>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
              </div>
              {alreadyRegister && <ErrorMsg msg='An account with this email is already register. Use another email or log in.'/>}
          </form>
      </div>
          <button onClick={() => navigate('/')} className='back-btn'><FontAwesomeIcon icon={faArrowLeft}/> Back Home</button>
    </section>
  )
}
