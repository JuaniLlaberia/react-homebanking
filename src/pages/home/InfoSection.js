import React from 'react'
import card from './card.png'
import card2 from './card2.png'

const InfoSection = () => {
  return (
    <section className='section-info' id='section-info'>
      <h6 className='cards-title'>Our Products</h6>
      <p className='cards-text first'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <h6 className='cards-number first-num'>01</h6>
      <p className='cards-text second'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <h6 className='cards-number second-num'>02</h6>
      <p className='cards-text third'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <h6 className='cards-number third-num'>03</h6>
      <img src={card} className='card1' alt='debit card'/>
      <img src={card2} className='card2' alt='debit card'/>
    </section>
  )
}

export default InfoSection
