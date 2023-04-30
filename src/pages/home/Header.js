import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

  return (
    <header className='home-header' id='home-section'>
        <div className={`header-title-loaded`}>
            <h6><span className='no-special1'>THE</span> <span className='no-special2'>FUTURE</span> </h6>
            <h6><span className='no-special2'>OF</span> <span className='no-special2'>BANKING</span></h6>
            <h6><span className='no-special1'>IS</span> <span className='no-special1'>HERE</span> </h6>
        </div>
        <button className={`header-btn-loaded`} onClick={() => navigate('/signup')}>Get Started</button>
    </header>
  )
}

export default Header
