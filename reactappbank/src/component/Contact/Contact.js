import React from 'react';
import './Contact.css'; // Create a CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Monocept Bank</h2>
      <div className="contact-info">
        <p>
          <strong>Address:</strong> Level 4, N-Heights, Awfis, Plot No 38, Phase 2, Siddiq Nagar, HITEC City, Hyderabad, Telangana 500081
        </p>
        <p>
          <strong>Hours:</strong> Closed ⋅ Opens 10 am Thu
        </p>
        <p>
          <strong>Appointments:</strong> <a href="https://www.monocept.com" target="_blank" rel="noopener noreferrer">monocept.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
