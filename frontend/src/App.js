import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';
import AdminRoute from './components/AdminRoute';
import ProtectedRoute from './components/ProtectedRoute';

// admin pages
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import WebsiteList from './pages/WebsiteList';
import WebsiteEdit from './pages/WebsiteEdit';
import UserEdit from './pages/UserEdit';
import UserList from './pages/UserList';

// pages
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MernRender from './pages/MernRender';
import Faq from './pages/Faq';
import Portfolio from './pages/Portfolio';
import WebDesign from './pages/WebDesign';
import Signin from './pages/forms/Signin';
import Signup from './pages/forms/Signup';
import ForgetPassword from './pages/forms/ForgetPassword';
import ResetPassword from './pages/forms/ResetPassword';

// user protected pages
import Profile from './pages/forms/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='mt-0'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/webdesign' element={<WebDesign />} />
          <Route path='/mernRender' element={<MernRender />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          {/* Protected Routes */}
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          {/* Admin Routes */}
          <Route
            path='/admin/dashboard'
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path='/admin/websites'
            element={
              <AdminRoute>
                <WebsiteList />
              </AdminRoute>
            }
          />
          <Route
            path='/admin/website/:id'
            element={
              <AdminRoute>
                <WebsiteEdit />
              </AdminRoute>
            }
          />
          <Route
            path='/admin/users'
            element={
              <AdminRoute>
                <UserList />
              </AdminRoute>
            }
          />
          <Route
            path='/admin/user/:id'
            element={
              <AdminRoute>
                <UserEdit />
              </AdminRoute>
            }
          />
          <Route
            path='/admin/messages'
            element={
              <AdminRoute>
                <Messages />
              </AdminRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
      <BottomFooter />
      <ToastContainer position='bottom-center' limit={1} />
    </BrowserRouter>
  );
}

export default App;
