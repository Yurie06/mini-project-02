import React from 'react';
import "./css/styles.css";
import Header from './component/header';
import Home from './pages/home';
import Services from './pages/services';
import Pricing from './pages/pricing';
import Footer from './component/footer';
import Gallery from './pages/gallery';
// import SignUp from './component/SignUp';
// import UsersOption from './component/UsersOption';
// import Customers_Option from './component/footer';
// import SignIn from './component/SignIn';
// import About from './component/About';
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
          <Route path="/Gallery" element={<Gallery />} />
          {/* <Route path="/About" element={<About />} /> */}
        </Routes>
        <Footer />
        {/* <SignUp /> */}
        {/* <SignUp /> */}
      </div>
    </body>
  )
}


export default App;