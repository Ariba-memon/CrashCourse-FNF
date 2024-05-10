
import './App.css';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Chatbot from './Components/Chatbot';
import Footer from './Components/Footer';
import PostBlog from './pages/PostBlog';
import Navbar from './Components/Navbar';
function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Chatbot />
  <Routes>
   
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/postblogs' element={<PostBlog />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  );
}

export default App;
