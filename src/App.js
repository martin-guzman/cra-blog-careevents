import React from 'react';
import { Navigate, Routes, Route, Link }  from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer'

const App = () => {
 return (
   <div>
     <header className='container-header'>
     <Link className='brand' to="/">COMPANY</Link>
        <nav>
          <ul>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

     <Routes>
       <Route path='/' element={<Home />} />
       <Route path="/about" element={<About />}></Route>
       <Route path="/donate" element={<Donate />}></Route>
       <Route path='/blog/:id' element={<Blog />} />
       <Route path='*' element={<Navigate to='/' />} />
     </Routes>
     <Footer />
   </div>
 );
};

export default App;



