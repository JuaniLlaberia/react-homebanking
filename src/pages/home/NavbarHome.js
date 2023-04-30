import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const NavbarHome = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleScroll = (section) => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }};

  const handleClose = () => setClicked(false);

  return (
    <div className='navbar-homne' style={{backgroundColor:`${clicked ? 'white': ''}`}}>
        <h6 style={{color:'black', fontSize:'1.5rem'}}>Arkides & Co.</h6>
        <div className="mobile-ham" onClick={() => setClicked(!clicked)}>{clicked ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars}/>}</div>
        <ul className={clicked ? 'links-navbar active-mobile' : 'links-navbar'}>
            <li onClick={() => {
              handleScroll('home-section')
              handleClose()}}>Home</li>
            <li onClick={() => {
              handleScroll('section-info')
              handleClose()}}>Products</li>
            <li onClick={() => {
              handleScroll('section-tabs')
              handleClose()}}>Services</li>
            <div className='buttons-navbar'>
                <button onClick={() => navigate('/login')} className='login-btn-home'>Log in</button>
                <button onClick={() => navigate('/signup')} className='signup-btn-home'>New Account</button>
            </div>
        </ul>
    </div>
  )
}

export default NavbarHome
