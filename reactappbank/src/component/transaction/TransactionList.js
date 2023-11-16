/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../shared/tables/Table'; // Import your shared Table component
import Pagination from '../../pagination/Pagination'; // Import your shared Pagination component
import LoadingIndicator from '../../loadingIndicator/LoadingIndicator'; // Import your loading indicator component

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/auth/alltransactions`, {
          params: { pageNumber, pageSize },
        });

        setTransactions(response.data);
        setTotalElements(response.headers['x-total-count']);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber, pageSize]);

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

  return (
    <div style={{ margin: '20px' }}>
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
          onClick={() => setPageNumber(0)}
          style={{ padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px' }}
        >
          Apply
        </button>
      </div>

      {loading && <LoadingIndicator />}

      {transactions.length > 0 ? (
        <div>
          <Table data={transactions} />
          {totalElements > pageSize && (
            <Pagination pageNumber={pageNumber} totalElements={totalElements} pageSize={pageSize} onPageChange={handlePageChange} />
          )}
        </div>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionList;
*/
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../shared/tables/Table'; // Import your shared Table component
import Pagination from '../../pagination/Pagination'; // Import your shared Pagination component
import LoadingIndicator from '../../loadingIndicator/LoadingIndicator'; // Import your loading indicator component
import TransactionUpdateForm from './TransactionUpdateForm'; // Import your TransactionUpdateForm component

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/auth/alltransactions`, {
          params: { pageNumber, pageSize },
        });

        setTransactions(response.data);
        setTotalElements(response.headers['x-total-count']);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber, pageSize]);

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

  const handleUpdateClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowUpdateModal(true);
  };

  const handleUpdateClose = () => {
    setShowUpdateModal(false);
    setSelectedTransaction(null);
  };

  const handleUpdateSuccess = (updatedTransaction) => {
    // Update the transactions state with the updated transaction
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.transno === updatedTransaction.transno ? updatedTransaction : transaction
      )
    );
    // Close the modal
    handleUpdateClose();
  };

  return (
    <div style={{ margin: '20px' }}>
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
          onClick={() => setPageNumber(0)}
          style={{ padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px' }}
        >
          Apply
        </button>
      </div>

      {loading && <LoadingIndicator />}

      {transactions.length > 0 ? (
        <div>
          <Table data={transactions} />

          {totalElements > pageSize && (
            <Pagination pageNumber={pageNumber} totalElements={totalElements} pageSize={pageSize} onPageChange={handlePageChange} />
          )}

          //Update Transaction Modal 
          {showUpdateModal && (
            <div className="modal">
              <div className="modal-content">
                <TransactionUpdateForm
                  transaction={selectedTransaction}
                  onClose={handleUpdateClose}
                  onUpdate={handleUpdateSuccess}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionList;
*/

////after implementing update
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../shared/tables/Table'; // Import your shared Table component
import Pagination from '../../pagination/Pagination'; // Import your shared Pagination component
import LoadingIndicator from '../../loadingIndicator/LoadingIndicator'; // Import your loading indicator component
import TransactionUpdateForm from './TransactionUpdateForm'; // Import your TransactionUpdateForm component

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [updatingTransaction, setUpdatingTransaction] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/auth/alltransactions`, {
        params: { pageNumber, pageSize },
      });

      setTransactions(response.data);
      setTotalElements(response.headers['x-total-count']);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber, pageSize]);

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

  const handleUpdateClick = (transno) => {
    setUpdatingTransaction(transno);
  };

  const handleUpdateClose = () => {
    setUpdatingTransaction(null);
  };

  return (
    <div style={{ margin: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
      <h2 >Transactions</h2>
        <label style={{ marginRight: '10px' }}>Page Size: </label>
        <input
          type="number"
          value={pageSize}
          onChange={handlePageSizeChange}
          min="1"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button
          onClick={() => setPageNumber(0)}
          style={{ padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px' }}
        >
          Apply
        </button>
      </div>

      {loading && <LoadingIndicator />}

      {transactions.length > 0 ? (
        <div>
          <Table
            data={transactions}
            loading={loading}
            onUpdateClick={handleUpdateClick}
            onDeleteClick={() => console.log('Delete clicked')} // Implement delete functionality if needed
          />
          {totalElements > pageSize && (
            <Pagination pageNumber={pageNumber} totalElements={totalElements} pageSize={pageSize} onPageChange={handlePageChange} />
          )}
        </div>
      ) : (
        <p>No transactions available.</p>
      )}

      {/* Display the update form as a modal when updatingTransaction is not null */}
      {updatingTransaction && (
        <div className="modal">
          <div className="modal-content">
            <TransactionUpdateForm
              transno={updatingTransaction}
              onClose={handleUpdateClose}
              onUpdate={() => fetchData()} // Refetch data after update
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
