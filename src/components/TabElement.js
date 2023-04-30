import React from 'react'

const TabElement = ({title, text}) => {
  return (
    <div className='tab-element'>
      <h4>{title}</h4>
      <div className='tab-body'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TabElement
