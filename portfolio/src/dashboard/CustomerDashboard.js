// CustomerDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../dashboard/Dashboard.css'; // Update the import for styles

const CustomerDashboard = () => {
  // You can add specific content for the Customer Dashboard here

  return (
    <div>
      <h2>Customer Dashboard</h2>
      <nav className={styles.nav}>
        <Link to="/customer/getCustomer">Get Customer</Link>
        <Link to="/customer/passbook">Passbook</Link>
        <Link to="/customer/transaction">Transaction</Link>
        <Link to="/customer/logout">Logout</Link>
        <Link to="/">Back</Link>
        <Link to="/customer/addAccount">Add Account</Link>
        <Link to="/customer/viewAccount">View Account</Link>
      </nav>

      {/* Add additional content for the Customer Dashboard */}
    </div>
  );
};

export default CustomerDashboard;
