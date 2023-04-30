import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TabSwitcher = ({title, icon, color, active, onClick, border}) => {
  return (
    <li onClick={onClick}  style={{backgroundColor:`${color}`, border:`1px solid ${border}`}} className={`tab-switch ${active}`}>
        <FontAwesomeIcon style={{color:`${border}`}} size='1x' icon={icon} className='icon-tab'/>
        <h6 className='tab-switch-title'>{title}</h6>
        </li>
  )
}
export default TabSwitcher
