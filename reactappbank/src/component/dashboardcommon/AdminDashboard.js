import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AccountListRecord from '../account/AccountListRecord'
import CustomerListRecord from '../customer/CustomerListRecord';
import BankListRecord from '../bank/BankListRecord';
import Navigation from '../shared/navigation/Navigation';
import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  const location = useLocation();
  console.log('Location:', location);

  const username = location.state?.username;

  return (
    <>
      
      <div style={{ alignItems: 'center', height: '12vw', width: '100vh' }}>
      <h2 style={{ marginBottom: '0px' , width: '100vh',  padding: '20px'}}>Welcome to the Admin Dashboard</h2>
      <p style={welcomeStyle}>Hello, {username}!</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'top', height: '5vw', width: '100vh'}}>
      <Navigation />
      </div>
  
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',  margin: '20px' }}>
        <Link to="/admin-dashboard/account" style={buttonStyle}>Account</Link>
        <Link to="/admin-dashboard/customer" style={buttonStyle}>Customer</Link>
        <Link to="/admin-dashboard/bank" style={buttonStyle}>Bank</Link>
      </div>

      <Routes>
        <Route path="account" element={<AccountListRecord />} />
        <Route path="customer" element={<CustomerListRecord />} />
        <Route path="bank" element={<BankListRecord />} />
      </Routes>
    
    </>
  );
};

const buttonStyle = {
  display: 'block',
  padding: '10px',
  margin: '5px',
  backgroundColor: '#4CAF50',
  color: 'white',
  textDecoration: 'none',
  textAlign: 'center',
  width: '150px',
  borderRadius: '5px',
};

const welcomeStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#007bff',
  
};


export default AdminDashboard;
