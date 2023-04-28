import '../../assets/settings.css'
import Navbar from '../../components/Navbar'
import Switch from '../../components/Switcher'
import SettingItem from '../../components/SettingItem'
import { useTheme } from '../../context/ThemeContext'
import { useCrrAccContext } from '../../context/CrrAccContext'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faGear, faShieldHalved, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Settings = () => {
  const {currentAcc} = useCrrAccContext();
  const {theme} = useTheme();
  const navigate = useNavigate();
  useEffect(() => {document.title = 'Home Banking: Settings'}, []);

  return (
    <main className={theme}>
      <section className='acc-information'>
        <p className='user-name'>{currentAcc.name}</p>
        <p className='user-email'>{currentAcc.email}</p>
        <p className='user-acc'>{currentAcc.accNum}</p>
      </section>
      <div className='option-pc'>
        <section className='acc-options'>
          <SettingItem icon={faUser} title={'Personal Information'}/>
          <SettingItem icon={faGear} title={'Advanced Settings'}/>
          <SettingItem icon={faShieldHalved} title={'Privacy & Security'}/>
          <SettingItem icon={faHeadset} title={'Support & Help'}/>
        </section>
      </div>
      <div className='theme-toggler'>Theme<Switch/></div>
      <section className='buttons'>
        <button className='logout-btn' onClick={() => navigate('/login')}>Log Out</button>
      </section>
      <Navbar />
    </main>
  )
}

export default Settings
