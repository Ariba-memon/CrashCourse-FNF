
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Chatbot from './Components/Chatbot';
import Footer from './Components/Footer';
// import PostBlog from './pages/PostBlog';
import Navbar from './Components/Navbar';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage'
function App() {
  return (
 <>
  <BrowserRouter>
  <Navbar />
  <Chatbot />
  <Routes>
   
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    {/* <Route path='/postblogs' element={<PostBlog />} /> */}
    <Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />
  </Routes>
  <Footer />
  </BrowserRouter></>
  );
}

export default App;
