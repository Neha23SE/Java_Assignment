import React, { useState } from 'react';
import axios from 'axios';
import './TransactionForm.css'; // Import your CSS file

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    operation: 'withdraw',
    fromAccountNo: '',
    toAccountNo: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { operation, fromAccountNo, toAccountNo, amount } = formData;

      switch (operation) {
        case 'withdraw':
          await axios.post(`http://localhost:8080/api/auth/withdraw`, { accountNo: fromAccountNo, amount });
          console.log('Withdrawal successful!');
          break;
        case 'deposit':
          await axios.post(`http://localhost:8080/api/auth/deposit`, { accountNo: toAccountNo, amount });
          console.log('Deposit successful!');
          break;
        case 'transfer':
          await axios.post(`http://localhost:8080/api/auth/transfer`, { fromAccountNo, toAccountNo, amount });
          console.log('Transfer successful!');
          break;
        default:
          console.error('Invalid operation');
      }

      // Optionally, update the transaction list or perform other actions
    } catch (error) {
      console.error('Error processing transaction:', error);
    }
  };

  return (
    <div className="transaction-form-container">
      <h2>Transaction Form</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label>Operation:</label>
          <select name="operation" value={formData.operation} onChange={handleChange}>
            <option value="withdraw">Withdraw</option>
            <option value="deposit">Deposit</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>
        <div className="form-group">
          <label>From Account:</label>
          <input type="number" name="fromAccountNo" value={formData.fromAccountNo} onChange={handleChange} />
        </div>
        {formData.operation === 'transfer' && (
          <div className="form-group">
            <label>To Account:</label>
            <input type="number" name="toAccountNo" value={formData.toAccountNo} onChange={handleChange} />
          </div>
        )}
        <div className="form-group">
          <label>Amount:</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TransactionForm;
