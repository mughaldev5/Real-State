import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHeader from "./router/UserHeader";
import HomeHeader from "./router/HomeHeader";
import AuthRoute from "./router/Authroute";
import PageRoute from "./router/PageRoute";

function App() {
  const AllRoute = [
    ...UserHeader,
    ...HomeHeader,
    ...AuthRoute,
    ...PageRoute
  ];
  return (
    <BrowserRouter>
      <Routes>

      {
        AllRoute.map((items, index) =>(
          <Route key={index} {...items}/>
        ))
      }
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
