
import './App.css';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
  <BrowserRouter>
   <Navbar />
  <Routes>
   
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  );
}

export default App;
