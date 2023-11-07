import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AccountListRecord from '../account/AccountListRecord'
import CustomerListRecord from '../customer/CustomerListRecord';
import BankListRecord from '../bank/BankListRecord';
import Navigation from '../shared/navigation/Navigation';

const AdminDashboard = () => {
  return (
    <>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '5vw', width: '100vh' }}>
      <h2 style={{ marginBottom: '20px' }}>Admin Dashboard</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '5vw', width: '100vh'}}>
      <Navigation />
      </div>
  
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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


export default AdminDashboard;
