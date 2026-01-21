import React from 'react'

const RegisterFormPage = ({user, onChange, onSubmit}) => {
  return (
    <>
      <form onSubmit={onSubmit} >
    <div className='relative flex flex-col justify-center items-center w-full mt-20 pl-5'>
      
      <div className=' flex flex-col gap-8'>
        
        <input className='outline-none border-2 border-gray-200 focus:border-gray-200 focus:right-0 invalid:border-gray-200 focus:outline-none h-18 w-120 pl-9 appearance-none' 
        type="text"
        name='firstname'
         placeholder='First Name' 
         onChange={onChange}
         required
         value={user.firstname}
          />
        
        <input className='outline-none  border-2 border-gray-200 focus:border-gray-200 focus:right-0 invalid:border-gray-200 focus:outline-none h-18 w-120 pl-9 appearance-none' 
        type="text" 
        name='lastname' 
        placeholder='Last Name' 
        onChange={onChange}
        required 
          value={user.lastname}
        />
        
        <input className='outline-none bg border-2 border-gray-200 focus:border-gray-200 focus:right-0 invalid:border-gray-200 focus:outline-none h-18 w-120 pl-9 appearance-none' 
        type="email" 
        name='email' 
        placeholder='Email*' 
        required
          onChange={onChange}
          value={user.email}
        />
       
      <input className='outline-none bg border-2 border-gray-200 focus:border-gray-200 focus:right-0 invalid:border-gray-200 focus:outline-none h-18 w-120 pl-9 appearance-none' 
      type="password" 
      name='password' 
      placeholder='Password*' 
      required 
        onChange={onChange}
        value={user.password}
      />
      
        <input className='outline-none bg border-2 border-gray-200 focus:border-gray-200 focus:right-0 invalid:border-gray-200 focus:outline-none h-18 w-120 pl-9 appearance-none' 
        type="confirmpassword" 
        name='confirmpassword' 
        placeholder='Confirm Password*' 
        required 
          onChange={onChange}
          value={user.confirmpassword}
        />
          <div className='flex flex-col'>
            <div className='flex items-start text-sm mb-2 gap-2' >
                <input className='bg-blue-600 mt-1.5' type="checkbox"/>
                <label className=' font-sans text-gray-500 w-120 leading-5.5'>
                 I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy
                    </label>
            </div>
            <div className='flex gap-2' htmlFor="">
                <input className='bg-blue-600' type="checkbox" />
                <label className='text-sm text-gray-500 font-sans'>
                By clicking "create account", I consent to the privacy policy.
               </label>
            </div>
        </div>
        <div className='flex mt-5'>
       <button type='submit' className="flex justify-center items-center h-16 w-60 bg-orange-500 hover:bg-black text-white font-sans" >CREATE ACCOUNT</button>
     </div>
      </div>
      
    </div>
    </form>
    <div className='flex flex-col font-sans text-gray-600 gap-8 mt-15 mb-35'>
      <p className='flex justify-center'>By creating an account, you agree to our:</p>
      <h1 className='flex items-center gap-7'>TERMS OF CONDITOINS 
      <div className='w-0.5 h-3 bg-gray-400'></div>
      PRIVACY POLICY
      </h1>
      <h1 className='flex justify-center mt-5'>ALREADY HAVE AN ACCOUNT?</h1>
    </div>
    </>
  )
}

export default RegisterFormPage
