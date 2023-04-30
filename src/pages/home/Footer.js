import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();

  return (
    <footer className='footer'>
      <div className='top'>
        <h5>News Letter</h5>
        <input type='text' className='suscribe-input' placeholder='Write your email'/>
        <button className='suscribe-btn'>Suscribe</button>
      </div>
      <div className='join'>
        <h6>What are you waiting?</h6>
        <h3>Join today and get an special bonus</h3>
        <button onClick={() => navigate('/signup')}>Get Started Now</button>
      </div>
      <div className='middle'>
        <ul className='link-list-footer'>
            <li className='link-list-item'>Home</li>
            <li className='link-list-item'>Info</li>
            <li className='link-list-item'>Services</li>
        </ul>
        <ul className='link-list-footer'>
            <li className='link-list-item'>Locations</li>
            <li className='link-list-item'>About us</li>
            <li className='link-list-item'>Plans</li>
        </ul>
        <ul className='link-list-footer'>
            <li className='link-list-item'>About us</li>
            <li className='link-list-item'>Services</li>
            <li className='link-list-item'>Need help?</li>
        </ul>
      </div>
      <div className='bottom'>
        <p>Proyect designed & coded by Juan Ignacio Llaberia</p>
        <ul className='social-media-icons'>
            <li className='social-icon'><a href='https://www.linkedin.com/in/juan-ignacio-llaberia-241b351b3/'><FontAwesomeIcon icon={faLinkedin} size='3x' /></a></li>
            <li className='social-icon'><a href='https://github.com/JuaniLlaberia'><FontAwesomeIcon icon={faGithub} size='3x' /></a></li>
            <li className='social-icon'><a href='https://www.instagram.com/juani_llabe/'><FontAwesomeIcon icon={faInstagram} size='3x'/></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
