import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionUpdateForm = ({ transaction, onUpdate, onClose }) => {
  const [updatedTransaction, setUpdatedTransaction] = useState({ ...transaction });

  useEffect(() => {
    setUpdatedTransaction({ ...transaction });
  }, [transaction]);

  const handleChange = (e) => {
    setUpdatedTransaction({ ...updatedTransaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/api/auth/transactions`, updatedTransaction);
      onUpdate(response.data); // Pass the updated transaction data back to the parent component
      onClose(); // Close the update form modal
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };

  return (
    <div>
      <h2>Update Transaction</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for updating transaction attributes */}
        <div>
          <label>From Account:</label>
          <input type="number" name="fromacc" value={updatedTransaction.fromacc} onChange={handleChange} />
        </div>
        <div>
          <label>To Account:</label>
          <input type="number" name="toacc" value={updatedTransaction.toacc} onChange={handleChange} />
        </div>
        <div>
          <label>Transactional Type:</label>
          <input type="text" name="transactionaltype" value={updatedTransaction.transactionaltype} onChange={handleChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={updatedTransaction.amount} onChange={handleChange} />
        </div>

        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default TransactionUpdateForm;
