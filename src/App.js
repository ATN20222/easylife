import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './Responsive.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    // <AuthProvider>
      <Router>
          <div className='App'>
            <Routes>
                <Route path='/Login'element={<Login/>}/>
                <Route path='/Register'element={<Register/>}/>
                <Route path='/'element={<Login/>}/>
            </Routes>
          </div>
      </Router>
    // </AuthProvider>
      
        
         
          
    
  );
}

export default App;
