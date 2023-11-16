import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Add this import statement
import LoadingIndicator from '../../loadingIndicator/LoadingIndicator';
import './Passbook.css';

const Passbook = () => {
  const [accountNo, setAccountNo] = useState('');
  const [passbook, setPassbook] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(false);

  const fetchPassbook = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/accounts/passbook?accountNo=${accountNo}`);
      setPassbook(response.data.account);
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error fetching passbook:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPassbook();
  }, [accountNo]);

  const indexOfLastTransaction = currentPage * pageSize;
  const indexOfFirstTransaction = indexOfLastTransaction - pageSize;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="passbook-container">
      <h2 className="passbook-title">Passbook Details</h2>
      <label>
        Enter Account Number:
        <input
          type="text"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          className="passbook-input"
        />
      </label>
      <button onClick={fetchPassbook} className="passbook-button">
        Fetch Passbook
      </button>

      {loading && <LoadingIndicator />}

      {passbook && (
        <div>
          <div className="passbook-account-details">
            <p>Account Number: {passbook.accountno}</p>
            <p>Balance: {passbook.balance}</p>
            <p>Status: {passbook.status}</p>
          </div>

          <h3 className="passbook-transaction-title">Transaction Details</h3>
          <table className="passbook-transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction) => (
                <tr key={transaction.transno}>
                  <td>{transaction.transactiondate}</td>
                  <td>{transaction.transactionaltype}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="passbook-pagination">
            {Array.from({ length: Math.ceil(transactions.length / pageSize) }).map((_, index) => (
              <li key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Passbook;
