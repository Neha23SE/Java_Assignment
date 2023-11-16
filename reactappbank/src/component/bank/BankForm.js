import React, { useState } from 'react';
import { addBankData } from '../../service/getBankData'; // Import the new function
import '../../component/bank/BankForm.css'; // Import the CSS file

const BankForm = ({ onAddBank }) => {
  const [formData, setFormData] = useState({
    bankname: '',
    banknameabbr: '',
    branch: '',
    status: 'active', // Set a default value or provide a dropdown for status
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addedBank = await addBankData(formData);
      onAddBank(addedBank);
      // Optionally, reset the form fields
      setFormData({
        bankname: '',
        banknameabbr: '',
        branch: '',
        status: 'active',
      });
    } catch (error) {
      console.error('Error adding bank:', error);
    }
  };

  return (
    <div className="customer-form-container">
      <h2>Add Bank</h2>
      <form onSubmit={handleSubmit} className="bank-form">
        <div className="form-group">
          <label>Bank Name:</label>
          <input type="text" name="bankname" value={formData.bankname} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Bank Name Abbreviation:</label>
          <input type="text" name="banknameabbr" value={formData.banknameabbr} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Branch:</label>
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit">Add Bank</button>
      </form>
    </div>
  );
};

export default BankForm;
