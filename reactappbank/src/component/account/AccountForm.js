import React, { useState } from 'react';
import { addAccountData } from '../../service/getAccountData'; // Import the new function
import '../../component/account/AccountForm.css'; // Import the CSS file

const AccountForm = ({ onAddAccount }) => {
  const [formData, setFormData] = useState({
    balance: 1000.00, // Initial balance
    status: 'active', // Set a default value or provide a dropdown for status
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addedAccount = await addAccountData(formData);
      onAddAccount(addedAccount);
      // Optionally, reset the form fields
      setFormData({
        balance: 1000.00,
        status: 'active',
      });
    } catch (error) {
      console.error('Error adding account:', error);
    }
  };

  return (
    <div className="customer-form-container">
      <h2>Add Account</h2>
      <form onSubmit={handleSubmit} className="account-form">
        <div className="form-group">
          <label>Balance:</label>
          <input type="number" name="balance" value={formData.balance} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit">Add Account</button>
      </form>
    </div>
  );
};

export default AccountForm;

/*
const AccountForm = ({ onAddAccount }) => {
    const [formData, setFormData] = useState({
      // Account details
      accountType: '',
      balance: 0.0,
      status: 'active',
      // Customer details
      customer: {
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        status: 'active',
         // Set a default value or provide a dropdown for status
        // User details
        user: {
          username: '',
          password: '',
        },
      },
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleCustomerChange = (e) => {
      setFormData({
        ...formData,
        customer: {
          ...formData.customer,
          [e.target.name]: e.target.value,
        },
      });
    };
  
    const handleUserChange = (e) => {
      setFormData({
        ...formData,
        customer: {
          ...formData.customer,
          user: {
            ...formData.customer.user,
            [e.target.name]: e.target.value,
          },
        },
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Adding an account with nested Customer and User information
        const addedAccount = await addAccountData(formData);
        onAddAccount(addedAccount);
        // Optionally, reset the form fields
        setFormData({
    
          balance: 0.0,
          status: 'active',
          customer: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            status: 'active',
            user: {
              username: '',
              password: '',
            },
          },
        });
      } catch (error) {
        console.error('Error adding account:', error);
      }
    };
  
    return (
      <div className="customer-form-container">
        <h2>Add Account</h2>
        <form onSubmit={handleSubmit} className="account-form">
          // Account details 

  
          <div className="form-group">
            <label>Balance:</label>
            <input type="number" name="balance" value={formData.balance} onChange={handleChange} required />
          </div>
  
          <div className="form-group">
            <label>Account Status:</label>
            <select name="status" value={formData.status} onChange={handleCustomerChange}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            </div>
            
         // Customer details 
          <div className="form-group">
            <label>Customer First Name:</label>
            <input type="text" name="firstname" value={formData.customer.firstname} onChange={handleCustomerChange} required />
          </div>
  
          <div className="form-group">
            <label>Customer Last Name:</label>
            <input type="text" name="lastname" value={formData.customer.lastname} onChange={handleCustomerChange} required />
          </div>
  
          <div className="form-group">
            <label>Customer Email:</label>
            <input type="email" name="email" value={formData.customer.email} onChange={handleCustomerChange} required />
          </div>
  
          <div className="form-group">
            <label>Customer Mobile:</label>
            <input type="text" name="mobile" value={formData.customer.mobile} onChange={handleCustomerChange} required />
          </div>
  
          <div className="form-group">
            <label>Customer Status:</label>
            <select name="status" value={formData.customer.status} onChange={handleCustomerChange}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

         
        </div>

  
          // User details 
          <div className="form-group">
            <label>User Username:</label>
            <input type="text" name="username" value={formData.customer.user.username} onChange={handleUserChange} required />
          </div>
  
          <div className="form-group">
            <label>User Password:</label>
            <input type="password" name="password" value={formData.customer.user.password} onChange={handleUserChange} required />
          </div>
  
          <button type="submit">Add Account</button>
        </form>
      </div>
    );
  };
  
  export default AccountForm;
  */