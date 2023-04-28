import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SettingItem = ({icon, title}) => {
  return (
    <div className='info-item'>
          <FontAwesomeIcon icon={icon} size='2x' className='icon'/>
          <p>{title}</p>
        </div>
  )
}

export default SettingItem
