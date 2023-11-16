// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/login',
        formData
      );

      // Assuming your backend sends a token in the response
      const token = response.headers.authorization.replace('Bearer ', '');

      // Store the token in localStorage or a state management system
      localStorage.setItem('token', token);
      //console.error('Login failed', error);
      // Redirect to the dashboard or perform other actions
      // You can use react-router-dom for navigation
      // Example: history.push('/dashboard');
    } catch (error) {
      
    }
  };

  return (
    <div className="login-container-background">
    <div className="login-container"> {/* Add a class for styling */}
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
  </div>
  );
};

export default Login;
