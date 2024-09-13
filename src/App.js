import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import './Responsive.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';

function App() {
  const location = useLocation();

  // Check if the current path is either '/Login' or '/Register'
  const hideNavRoutes = ['/Login', '/Register'];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  return (
    <div className='App'>
      {shouldShowNav && <Nav />}
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
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
