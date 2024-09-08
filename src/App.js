import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './Pages/Login/Login';

function App() {
  return (
    // <AuthProvider>
      <Router>
          <div className='App'>
            <Routes>
                <Route path='/Login'element={<Login/>}/>
                <Route path='/'element={<Login/>}/>
            </Routes>
          </div>
      </Router>
    // </AuthProvider>
      
        
         
          
    
  );
}

export default App;
