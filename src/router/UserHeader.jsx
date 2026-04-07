import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Property from "../pages/Property/Property";
import News from "../pages/News/News";
import Pages from "../pages/Page/Pages";
import Contact from "../pages/Contact/Contact";
import Nest from "../components/LandingPages/Nest";

const UserHeader =[
    { path:"/", element:<Home/>},
    { path:"/about", element:<About/>},
    { path:"/about", element:<Property/>},
    { path:"/news", element:<News/>},
    { path:"/pages", element:<Pages/>},
    { path:"/contact", element:<Contact/>},
    { path:"/nest", element:<Nest/>},
];

export default UserHeader; 