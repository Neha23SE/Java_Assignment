import React, { useState, useEffect } from 'react';
import AccountForm from './AccountForm';
import Table from '../shared/tables/Table';
import Pagination from '../../pagination/Pagination';
import LoadingIndicator from '../../loadingIndicator/LoadingIndicator';
// Import statements in CustomerListRecord.js
import { fetchAccountData, addAccountData } from '../../service/getAccountData';
import { fetchCustomerData, addCustomerData } from '../../service/getCustomerData';
 // Import the new function

const AccountListRecord = () => {
  const [accounts, setAccounts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, totalElements } = await fetchAccountData(pageNumber, pageSize);
        setAccounts(data);
        setTotalElements(totalElements);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (showData) {
      fetchData();
    }
  }, [pageNumber, pageSize, showData]);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    if (!isNaN(newSize) && newSize > 0) {
      setPageSize(newSize);
    } else {
      console.error('Invalid page size:', e.target.value);
    }
  };

  const handleApplyPageSize = () => {
    setShowData(true);
    setPageNumber(0);
  };

  const handleAddAccount = async (accountData) => {
    try {
      const addedAccount = await addAccountData(accountData);
      setAccounts([...accounts, addedAccount]);
      // Optionally, reset the form fields or update the data accordingly
    } catch (error) {
      console.error('Error adding account:', error);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <AccountForm onAddAccount={handleAddAccount} />
      <br />

      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Page Size: </label>
        <input
          type="number"
          value={pageSize}
          onChange={handlePageSizeChange}
          min="1"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button
          onClick={handleApplyPageSize}
          style={{ padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px' }}
        >
          Apply
        </button>
        <h2 style={{ marginBottom: '20px' }}>Account List</h2>
      </div>

      {loading && <LoadingIndicator />}

      {showData && accounts.length > 0 ? (
        <div>
          <Table data={accounts} />
          {totalElements > pageSize && (
            <Pagination
              pageNumber={pageNumber}
              totalElements={totalElements}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      ) : (
        showData && <p>No data available.</p>
      )}
    </div>
  );
};

export default AccountListRecord;
