import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item"><Link to="/admin-dashboard">Dashboard</Link></li>
      <li className="nav-item"><Link to="/admin-dashboard/profile">contact Us</Link></li>
      <li className="nav-item"><Link to="/admin-dashboard/settings">Back</Link></li>
      <li className="nav-item"><Link to="/admin-dashboard/logout">Logout</Link></li>

      </ul>
    </nav>
  );
};


export default Navigation;