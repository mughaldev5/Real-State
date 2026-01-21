import React, { useState } from 'react'
import RegisterFormPage from './RegisterFormPage';
import LoginIntero from './LoginIntero';
import Layout from '../../wrapper';
import LoginViewTop from './LoginViewTop';

const RegisterForm = () => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        comfirm : ""
    
    }); 

    const handleInputChange = (e) =>{
        const {name, value} = e.target;

        setUser((prev) => ({ ...prev, [name] : value}));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(user);
    }
  return (
   <Layout>
   <LoginViewTop/>
     <div className='flex flex-col justify-center items-center'>
      <LoginIntero
     title= "Register"
     subtitle= "your Account"
     titleSize ='text-5xl font-bold font-mamo'
     subTitleSize ='text-5xl font-bold font-mamo'
      />
      <RegisterFormPage 
        user = {user}
        onChange = {handleInputChange}
        onSubmit = {handleFormSubmit}
      />
    </div>
   </Layout>
  )
}

export default RegisterForm
