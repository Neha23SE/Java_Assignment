// AdminRegistration.js

import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import { Link } from 'react-router-dom';


const AdminRegistration = () => {
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
      const response = await axios.post('http://localhost:8080/api/auth/registeradmin', formData);

      // Handle the registration response as needed
      console.log(response.data);
    } catch (error) {
      console.error('Admin registration failed', error);
    }
  };

  return (
    <div className="admin-registration-container">
      <h2>Admin Registration</h2>
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
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register Admin</button>
      </form>
      <p>
          Already have an account? <Link to="/">Login here</Link>.
        </p>
    </div>
  );
};

export default AdminRegistration;


/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import { Link } from 'react-router-dom';

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    // Remove any unnecessary admin-specific fields
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/registeradmin', formData);

      // Handle the registration response as needed
      console.log(response.data);

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Admin registration failed', error);
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
        <h2>Admin Registration</h2>
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
        
        <p>
          Already have an account? <Link to="/">Login here</Link>.
        </p>
      </div>
    </div>
  );
};

export default AdminRegistration;
*/
