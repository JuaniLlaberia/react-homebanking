import TrendingCrypto from '../../components/TrendingCrypto'
import Navbar from '../../components/Navbar'
import '../../assets/cryptoStyle.css'
import {useTheme} from '../../context/ThemeContext'

const ExchangeMoney = () => {
  const { theme } = useTheme();
  return (
    <div className={`exchange-page-${theme}`} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <TrendingCrypto page={1}/>
      <Navbar />
    </div>
  )
}

export default ExchangeMoney
