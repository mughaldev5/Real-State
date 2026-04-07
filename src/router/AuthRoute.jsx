import React from "react";
import Login from "../components/Auth/Login";
import RegisterForm from "../components/Auth/RegisterForm";

const AuthRoute = [
    { path:"/login", element:<Login/> },
    { path:"/register-form", element:<RegisterForm/> },
]


export default AuthRoute;

