import React from 'react';
import "./css/styles.css";
import Header from './component/header';
import Home from './pages/home';
import Services from './pages/services';
import Pricing from './pages/pricing';
import Footer from './component/footer';
import Sign_n from './component/Sign_in';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <body className='bgimg'>
      <div>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      <Footer />
      </div>
    </body>
  )
}

export default App;