import React from 'react'
import StateFooter from './UperFooter/StateFooter'
import CompanyFooter from './UperFooter/CompanyFooter'
import ServicesFooter from './UperFooter/ServicesFooter'
import CustomercareFooter from './UperFooter/CustomercareFooter'
import NewsletterFooter from './UperFooter/NewsletterFooter'
const UpperFooter = () => {
  return (
    <div className='flex md:flex-wrap  justify-around h-auto xl:gap-0 lg:gap-16 md:gap-16 sm:gap-10 gap-10 pt-40 pb-23 bg-gray-950'>
   <StateFooter/>
   <CompanyFooter/>
   <ServicesFooter/>
   <CustomercareFooter/>
   <NewsletterFooter/>
    </div>
  )
}

export default UpperFooter
