import React from 'react';
import "./css/styles.css";
import Header from './component/header';
import Home from './pages/home';
import Services from './pages/services';
import Pricing from './pages/pricing';
import Footer from './component/footer';
import Gallery from './pages/gallery';
import About from './component/About';
import SignUp from './component/SignUp';
import UserInfo from './component/UserInfo';
import UsersOption from './component/UsersOption';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes,} from "react-router-dom"

 
function App() {
  return (
    <body className='bgimg'>
      <div>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/UsersOption" element={<UsersOption />} />
        </Routes>
      <Footer />
      </div>
    </body>
  )
}

export default App;