import React from "react";
import NewDetail from "../components/LandingPages/NewDetail";
import PropertyDetails from "../components/LandingPages/PropertyDetails";

const PageRoute = [
    { path:"/newdetail", element:<NewDetail/>},
    { path:"/property-details", element:<PropertyDetails/>}
];


export default PageRoute;