import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
       
        const authorizationHeader = response.headers.get('authorization');
  
        if (authorizationHeader) {
          const token = authorizationHeader.replace('Bearer ', '');
          localStorage.setItem('token', token);
          console.log('Login successful!');
  
          // Redirect to the dashboard or perform other actions
          // You can use react-router-dom for navigation
          // Example: history.push('/dashboard');
        } else {
          console.error('Authorization header missing in the response.');
        }
      } else {
        // Handle unsuccessful login
        console.error('Login failed:', response.status, response.statusText);
  
        // You can also handle specific error messages from the server if available
        const errorData = await response.json();
        console.error('Server error message:', errorData.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
