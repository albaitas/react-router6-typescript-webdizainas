import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Darbai from './pages/Darbai';
import DUK from './pages/DUK';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/darbai' element={<Darbai />} />
          <Route path='/duk' element={<DUK />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
