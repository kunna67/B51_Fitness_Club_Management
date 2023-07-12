import React, { useState , useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
 

  const navigate = useNavigate();

  useEffect(() => {
  
    const token = localStorage.getItem('token');
    if (token) {
      
      setIsLoggedIn(true);
      
    }
  },[]);

  const handleLogout = () => {
    localStorage.removeItem('token');

    
    setIsLoggedIn(false);
    navigate('/'); 
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/trainers">View Trainers</Link>
        </li>
      </ul>

      {!isLoggedIn ? (
        
        <div className="buttons">
          <Link to="/login" className="login-button">Login</Link>
          <Link to="/membership" className="membership-button">Membership</Link>
        </div>
      ) : (
        
        <div className="buttons">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
