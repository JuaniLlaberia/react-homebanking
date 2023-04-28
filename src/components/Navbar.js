import '../assets/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightArrowLeft, faChartSimple, faMoneyBillTransfer, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const {pathname} = useLocation();
  return (

    <nav>
      <Link to='/movements' className={`nav-item ${(pathname === '/movements') ? 'active' : ''}`}><FontAwesomeIcon size='2x' icon={faHouse}/><p className='icon-text'>Home</p></Link>
      <Link to='/transfer' className={`nav-item ${(pathname === '/transfer') ? 'active' : ''}`}><FontAwesomeIcon size='2x' icon={faMoneyBillTransfer}/><p className='icon-text'>Transfer</p></Link>
      <Link to='/exchange' className={`nav-item ${(pathname === '/exchange') ? 'active' : ''}`}><FontAwesomeIcon size='2x' icon={faArrowRightArrowLeft}/><p className='icon-text'>Exchange</p></Link>
      <Link to='/budget' className={`nav-item ${(pathname === '/budget') ? 'active' : ''}`}><FontAwesomeIcon size='2x' icon={faChartSimple}/><p className='icon-text'>Budget</p></Link>
      <Link to='/settings' className={`nav-item ${(pathname === '/settings') ? 'active' : ''}`}><FontAwesomeIcon size='2x' icon={faUser}/><p className='icon-text'>Settings</p></Link>
    </nav>
  )
}

export default Navbar
