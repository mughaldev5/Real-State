import React from 'react'
import LoginViewTop from './LoginViewTop'
import LoginIntero from './LoginIntero'
import Layout from '../../wrapper'
import LoginFormPage from './LoginFormPage'
import RegisterPrompt from './RegisterPrompt'

const Login = () => {
  return (
   <Layout>
     <div className='relative h-auto overflow-hidden '>
      <div className='relative mt-28 bg-gray-50 h-80 w-full'>
      <LoginViewTop/>
    </div>
    <div className='relative flex flex-col gap-20 bg-white '>
      <LoginIntero 
        title="Sign In"
        subtitle='To Your Account'
        titleSize ='text-5xl font-bold font-mamo'
        subTitleSize ='text-5xl font-bold font-mamo'
      />
      <div className='flex lg:flex-row flex-col md:flex-col sm:flex-col lg:justify-center lg:items-start md:items-center sm:items-center items-center xl:gap-35 lg:gap-20 md:gap-10 sm:gap-10 gap-8 mb-25'>
      <LoginFormPage/>
      <RegisterPrompt/>
      </div>
    </div>
    </div>
   </Layout>
  )
}

export default Login
