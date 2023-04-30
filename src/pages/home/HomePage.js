import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import InfoSection from './InfoSection'
import NavbarHome from './NavbarHome'
import TabsSection from './TabsSection'
import './homepage.css'

const HomePage = () => {

  return (
    <div>
      <Header/>
      <InfoSection/>
      <TabsSection/>
      <Footer />
      <NavbarHome />
    </div>
  )
}

export default HomePage
