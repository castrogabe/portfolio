import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

// admin pages

// pages
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import WebDesign from './pages/WebDesign';

// user protected pages

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='mt-0'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/webdesign' element={<WebDesign />} />
          {/* Protected Routes */}

          {/* Admin Routes */}
        </Routes>
      </main>
      <Footer />
      <BottomFooter />
    </BrowserRouter>
  );
}

export default App;
