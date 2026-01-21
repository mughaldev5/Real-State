import React from 'react'
import UpperFooter from '../components/Footer/UpperFooter';
import LowerFooter from '../components/Footer/LowerFooter'
import DreamHomeCTA from '../components/LandingPages/DreamHomeCTA';

const Footer = () => {
  return (
    <div className='flex flex-col'>
    <DreamHomeCTA/>
    <UpperFooter/>
    <LowerFooter/>
    </div>
  )
}

export default Footer
