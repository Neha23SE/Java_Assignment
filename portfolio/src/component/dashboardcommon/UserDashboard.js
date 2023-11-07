import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Transaction from '../transaction/Transaction';
import Passbook from '../passbook/Passbook';
import Navigation from '../shared/navigation/Navigation';

const UserDashboard = () => {
  return (
    <div>
     
      <h2>User Dashboard</h2>
      <Navigation />

      <Routes>
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/passbook" element={<Passbook />} />
      </Routes>
    </div>
  );
};

export default UserDashboard;
