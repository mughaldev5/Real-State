import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddList from './components/LandingPages/AddList';
import Nest from './components/LandingPages/Nest';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Property from './pages/Property/Property';
import Pages from './pages/Page/Pages';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import HomeStyle01 from './pages/Home/HomeStyle01';
import HomeStyle02 from './pages/Home/HomeStyle02';
import HomeStyle03 from './pages/Home/HomeStyle03';
import HomeStyle04 from './pages/Home/HomeStyle04';
import HomeStyle05 from './pages/Home/HomeStyle05';
import HomeStyle06 from './pages/Home/HomeStyle06';
import HomeStyle07 from './pages/Home/HomeStyle07';
import HomeStyle08 from './pages/Home/HomeStyle08';
import HomeStyle09 from './pages/Home/HomeStyle09';
import PropertyDetails from './components/LandingPages/PropertyDetails';
import NewDetail from './components/LandingPages/NewDetail';
import Login from './components/Auth/Login'
import RegisterForm from './components/Auth/RegisterForm'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/nest' element={<Nest />} />
        <Route path='/addlist' element={<AddList />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/property' element={<Property />} />
        <Route path='/news' element={<News />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/homestyle01' element={<HomeStyle01 />} />
        <Route path='/homestyle02' element={<HomeStyle02 />} />
        <Route path='/homestyle03' element={<HomeStyle03 />} />
        <Route path='/homestyle04' element={<HomeStyle04 />} />
        <Route path='/homestyle05' element={<HomeStyle05 />} />
        <Route path='/homestyle06' element={<HomeStyle06 />} />
        <Route path='/homestyle07' element={<HomeStyle07 />} />
        <Route path='/homestyle08' element={<HomeStyle08 />} />
        <Route path='/homestyle09' element={<HomeStyle09 />} />
        <Route path='/propertydetails' element={<PropertyDetails />} />
        <Route path='/newdetail' element={<NewDetail />} />
        <Route path='/login' element ={<Login/>}/>
        <Route path='/registerform' element = {<RegisterForm/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
