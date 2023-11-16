// Import the necessary hooks from 'react-router-dom'
/*import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

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
      console.log('Login successful!');

      // Use navigate to redirect to the dashboard or perform other actions
      // Example: navigate('/dashboard');
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container-background">
      <div className="login-container">
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
*/

// Import the necessary dependencies
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

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

      const { accessToken, userDetails } = response.data;

      // Store the token in localStorage or a state management system
      localStorage.setItem('token', accessToken);

      // Access the user role from userDetails.authorities[0].authority
      const role = userDetails.authorities[0].authority;

      // Redirect to the appropriate dashboard based on the user's role
      if (role === 'ROLE_ADMIN') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }

      console.log('Login successful!');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container-background">
      <div className="login-container">
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
*/
// Login.js

// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  const navigate = useNavigate();

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

      const { accessToken, userDetails } = response.data;
      localStorage.setItem('token', accessToken);
      

      const role = userDetails.authorities[0].authority;

      if (role === 'ROLE_ADMIN') {
        navigate('/admin-dashboard', { state: { username: userDetails.username } });
      } else {
        navigate('/user-dashboard', { state: { username: userDetails.username } });
      }

      console.log('Login successful!');
    } catch (error) {
      console.error('Login failed', error);
    }
  };


  return (
    <div className="container">
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
      <p>
        Don't have an account? 
        <Link to="/register/user">Register as User</Link> 
        {' '}
        or 
        {' '}
        <Link to="/register/admin">Register as Admin</Link>.
      </p>
    </div>
  );
};

export default Login;
