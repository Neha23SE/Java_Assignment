// Import necessary dependencies
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the authentication context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to manage authentication token and user details
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);

  // Retrieve authentication token and user details from local storage on mount
  useEffect(() => {
    const storedAuthToken = localStorage.getItem('authToken');
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedAuthToken && storedUser) {
      setAuthToken(storedAuthToken);
      setUser(storedUser);
    }
  }, []);

  // Update local storage when authToken or user changes
  useEffect(() => {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('user', JSON.stringify(user));
  }, [authToken, user]);

  // Login function to set authToken and user
  const login = (authToken, userDetails) => {
    setAuthToken(`Bearer ${authToken}`);
    setUser(userDetails);
    console.log('User logged in:', userDetails);
  };

  // Logout function to clear authToken and user
  const logout = () => {
    setAuthToken(null);
    setUser(null);
    console.log('User logged out');
  };

  // Context value containing authToken, user, login, and logout
  const value = {
    authToken,
    user,
    login,
    logout,
  };

  // Provide the context value to its descendants
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
