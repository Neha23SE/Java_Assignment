// CustomerForm.js
import React, { useState } from 'react';
import { addCustomerData } from '../../service/getCustomerData'; // Import the new function
import '../../component/customer/CustomerForm.css'; // Import the CSS file
//import { useAuth } from '../../component/authcontext/useAuth';
/*
const CustomerForm = ({ onAddCustomer }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    status: 'active',
  });

  const { authToken, user } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('User:', user); // Log the user information
      if (user && user.authorities.includes('ROLE_ADMIN')) {
        const addedCustomer = await addCustomerData(formData, authToken);
        onAddCustomer(addedCustomer);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          mobile: '',
          status: 'active',
        });
        console.log('Customer added successfully:', addedCustomer);
      } else {
        console.error('User does not have the necessary role to add a customer.');
      }
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

*/
const CustomerForm = ({ onAddCustomer }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    status: 'active', // Set a default value or provide a dropdown for status
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


  
    try {
      const addedCustomer = await addCustomerData(formData);
      onAddCustomer(addedCustomer);
      // Optionally, reset the form fields
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        status: 'active',

       
      }
      );
      console.log('Customer added successfully:', addedCustomer);
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <div className="customer-form-container">
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit} className="customer-form">
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email                                                                : </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mobile                                                               :  </label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
