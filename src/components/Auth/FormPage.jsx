import React from 'react'

const FormPage = ({user, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-col gap-10'>
       <input className="h-18 xl:w-130 lg:w-95 md:w-140 sm:w-95 w-95 pl-7 text-base font-mono border-2 border-gray-200 focus:border-gray-200 focus:outline-none focus:ring-0 bg-white focus:bg-white invalid:border-gray-200 appearance-none"
     type="email"
     name="email"
     placeholder="Email*"
     required
     value={user.email}
     onChange={onChange}
/>

        <input className="h-18 xl:w-130 lg:w-95 md:w-140 sm:w-95 w-95 pl-7 text-base font-mono border-2 border-gray-200 focus:border-gray-200 focus:outline-none focus:ring-0 bg-white focus:bg-white invalid:border-gray-200 appearance-none "
         type="password"
        name='password'
        placeholder='Password*'
        required
        value={user.password} 
        onChange={onChange}
        />
      </div>
      <div className='flex flex-col gap-8'>
        <button className='h-16 w-33 bg-orange-500 text-white font-sans mt-7' type='submit'>SIGN IN</button>
        <h1 className='text-base text-gray-500 hover:text-orange-500 font-mono'>FORGOTTEN YOUR PASSWORD?</h1>
      </div>
    </form>
  )
}

export default FormPage
