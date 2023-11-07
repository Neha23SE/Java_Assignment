
import './App.css';

//import Example1 from './component/Example1';
//import GetAll from './component/GetAll';
//import CustomerListRecord from './component/customer/CustomerListRecord';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import LoginForm from './component/LoginForm';
//import Navigation from './component/shared/navigation/Navigation';
//import BankListRecord from './component/bank/BankListRecord';
//import AccountListRecord from './component/account/AccountListRecord';
//import React, { useState } from 'react';
import Login from './component/login/Login';
//import Navigation from './component/shared/navigation/Navigation';
import UserDashboard from './component/dashboardcommon/UserDashboard';
import AdminDashboard from './component/dashboardcommon/AdminDashboard';

const App = () => {
  return (
  <>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
        <Route path="/user-dashboard/*" element={<UserDashboard />} />
  
      </Routes>
    </Router>
 
  </>
  );
};

export default App;

