import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import Login from '../../login/Login';


const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item"><a href="https://monocept.com/" target="_blank" rel="noopener noreferrer">Dashboard</a></li>
      <li className="nav-item"><Link to="/contact-us">contact Us</Link></li>
      <li className="nav-item"><Link to="/">Back</Link></li>
      <li className="nav-item">
          <Link to="/">Logout</Link>
        </li>

      </ul>
    </nav>
  );
};


export default Navigation;
