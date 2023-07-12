import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Login.css';
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      'email' : email,
      'password' : password
    }
    try {
      const response = await axios.post('http://localhost:5000/user/login', userData);
      const {token } = response.data
      const {_id} = response.data.result
      console.log(response.data);
      console.log(token);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', _id);
      navigate('/dashboard/profile');
    } catch (error) {
      console.error(error.response.data); 
    }
    
    // navigate('')

    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup" className="link">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
