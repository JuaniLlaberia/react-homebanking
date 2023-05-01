import { useState } from 'react'
import ModalCrypto from './ModalCrypto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';

const CoinTrending = ({name, code, img, change, crrPrice, cryptoId}) => {
    const [modal, setModal] = useState(false);

    const handleClose = () => setModal(false);
  return (
    <>
    <li className='trending-coin-container' onClick={() => setModal(true)}>
        <div className='img-text'>
            <img className='trending-coin-img' src={img} alt={`${cryptoId} logo`}/>
            <h6 className='trending-coin-name'>{name}</h6>
        </div>
        <h6 className='up-down' style={{color: `${change > 0 ? 'green' : 'red'}`}}><FontAwesomeIcon icon={change > 0 ? faArrowTrendUp : faArrowTrendDown}/> {change.toFixed(3)}</h6>
        <h6 className='crypto-price'>{crrPrice} <span className='crypto-price-text'>USD/{code.toUpperCase()}</span> </h6>
    </li>
    {modal && <ModalCrypto onCLoseHandle={handleClose} id={cryptoId}/>}
    {modal && <div className='overlay' onClick={handleClose}></div>}
  </>
  )
}

export default CoinTrending
