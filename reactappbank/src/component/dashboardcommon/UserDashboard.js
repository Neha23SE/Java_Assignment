import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Transaction from '../../component/transaction/Transaction';
import Passbook from '../passbook/Passbook';
import Navigation from '../shared/navigation/Navigation';
import { useLocation } from 'react-router-dom';

const UserDashboard = () => {
  const location = useLocation();
  const [accountNo, setAccountNo] = useState('');
  const username = location.state?.username;

  const handleAccountNoChange = (e) => {
    setAccountNo(e.target.value);
    console.log('Account number changed:', e.target.value);
  };

  return (
    <>
      <div style={{ alignItems: 'center', height: '12vw', width: '100vh' }}>
        <h2 style={{ marginBottom: '0px', width: '100vh', padding: '20px' }}>Welcome to the User Dashboard</h2>
        <p style={welcomeStyle}>Hello, {username}!</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'top', height: '5vw', width: '100vh' }}>
        <Navigation />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px' }}>
        <Link to="/user-dashboard/transaction" style={buttonStyle}>
          Transaction
        </Link>
        <div>
     
        <Link to="/user-dashboard/passbook" style={buttonStyle}>
          Passbook
        </Link>

        </div>
        </div>
      
        <Routes>
        <Route path="transaction/*" element={<Transaction />} />
        <Route path="passbook" element={<Passbook />} />
      </Routes>
          </>
  );
};
const dashboardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '5vw',
  width: '100vh',
  padding:''
};

const headerStyle = {
  marginBottom: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const buttonStyle = {
  display: 'block',
  padding: '8px',
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


const labelStyle = {
  marginBottom: '8px',
  fontSize: '16px',
  color: '#333',
};

const inputStyle = {
  padding: '8px',
  fontSize: '12px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginRight: '10px',
  width:'5vh',
  alignItems: 'center',
};

export default UserDashboard;
