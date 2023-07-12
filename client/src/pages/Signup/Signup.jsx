import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Signup.css'; 

import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile , setMobile] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) =>{
    setName(e.target.value)
  }
  const handleMobileChange = (e) => {
    setMobile(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      'name' : name,
      'email' : email,
      'password' : password,
      'phoneNumber' : mobile
    }
    try {
      const response = await axios.post('http://localhost:5000/user/signup', userData);
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
    setEmail('');
    setPassword('');
    setMobile('');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} placeholder='Your Name' />
        </div>
        <div className="form-group">

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder='Your Email' />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder='Your Password'/>
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Phone Number:</label>
          <input type="text" id="mobile" value={mobile} onChange={handleMobileChange} placeholder='Your Phone Number'/>
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login" className="link">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
