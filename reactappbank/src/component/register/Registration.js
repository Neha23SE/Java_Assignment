import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    userType: 'user', // Default to 'user', you can change this to 'admin' if needed
    // Include additional fields for registration as needed
  });

  const navigate = useNavigate();

  // Define mapping of user types to registration endpoints
  const registrationEndpoints = {
    user: '/api/auth/register',
    admin: '/api/auth/registeradmin',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use the mapping to get the correct registration endpoint
      const endpoint = registrationEndpoints[formData.userType];
      const response = await axios.post(`http://localhost:8080${endpoint}`, formData);

      // Handle the registration response as needed
      console.log(response.data);

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="registration-container-background">
      <div className="registration-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>
            User Type:
            <select name="userType" value={formData.userType} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Register</button>
        </form>
        {/* Use Link to navigate to the login page */}
        <p>
          Already have an account? <Link to="/">Login here</Link>.
        </p>
      </div>
    </div>
  );
};

export default Registration;
