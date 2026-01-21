import React, { useState } from 'react'
import FormPage from './FormPage';

const LoginFormPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
     const handleInputChange = (e) =>{
        const {name, value} = e.target

        setUser((prev) => ({ ...prev, [name] : value }));
    };

     const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(user);
     };
  return (
    <div>
      <FormPage 
        user={user}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
    </div>
  )
}

export default LoginFormPage ;
