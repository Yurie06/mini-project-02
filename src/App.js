
import './App.css';
import Pricing from './Components/Pricing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';






function App() {
  return (
    <body className='bgimg'>
      <div>
      <Footer/>
       <Pricing/>
       <About/>
      </div>
    </body>
  )
}

export default App;
