// AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../dashboard/Dashboard.css'; // Update the import for styles

const AdminDashboard = () => {
  // You can add specific content for the Admin Dashboard here

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav className={styles.nav}>
        <Link to="/admin/bank">Bank</Link>
        <Link to="/admin/customer">Customer</Link>
        <Link to="/admin/account">Account</Link>
        <Link to="/admin/logout">Logout</Link>
        <Link to="/">Back</Link>
      </nav>

      {/* Add additional content for the Admin Dashboard */}
    </div>
  );
};

export default AdminDashboard;
