import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import './App.css';
import './Responsive.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import News from './Pages/News/News';
import NewsDetails from './Pages/News/NewsDetails';
import Contact from './Pages/Contact/Contact';
import MyProfile from './Pages/MyProfile/MyProfile';
import Reserve from './Pages/Reservation/Reserve';
import { getToken } from './Services/axiosInstance';
import PrivateRoute from './PrivateRoute';
import MyReservations from './Pages/MyProfile/MyReservations';

function App() {
  const location = useLocation();
  const hideNavRoutes = ['/login', '/register'];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname.toLocaleLowerCase());
  const [direction , setDirection] = useState('ltr');
  const [isAuthorized , setIsAuthorized] = useState(false);
  
  useEffect(() => {
    // Set language direction
    if(localStorage.getItem('language') === 'ar') {
      setDirection('rtl');
    }

    // Check if token is present
    const token = getToken();
    console.log(token);  // Log the token to check its value
    if (token) {
      setIsAuthorized(true);
    }
  }, []);  // Empty dependency array to run only on the first render
  
  return (
    <div className='App' dir={direction}>
      {shouldShowNav && <Nav />}
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/News' element={<News />} />
        <Route path='/News/:id' element={<NewsDetails />} />
        <Route path='/Contact' element={<Contact />} />
        
        <Route
          path='/MyReservations'
          element={
            <PrivateRoute>
              <MyReservations />
            </PrivateRoute>
          }
        />
        <Route
          path='/Reserve/:id'
          element={
            <PrivateRoute>
              <Reserve />
            </PrivateRoute>
          }
        />
      
    
        
      </Routes>
      {shouldShowNav && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
