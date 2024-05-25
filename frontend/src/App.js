import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

// pages
import About from './pages/About';
import Home from './pages/Home';
import MernRender from './pages/MernRender';
import Portfolio from './pages/Portfolio';
import WebDesign from './pages/WebDesign';
import Signin from './components/forms/Signin';
import Signup from './components/forms/Signup';

// user protected pages

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='mt-0'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/webdesign' element={<WebDesign />} />
          <Route path='/mernRender' element={<MernRender />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          {/* Admin Routes */}
        </Routes>
      </main>
      <Footer />
      <BottomFooter />
      <ToastContainer position='bottom-center' limit={1} />
    </BrowserRouter>
  );
}

export default App;
