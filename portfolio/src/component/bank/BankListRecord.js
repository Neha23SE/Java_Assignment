// CustomerListRecord.js
import React, { useState, useEffect } from 'react';
import BankForm from './BankForm'; // Import BankForm instead of CustomerForm
import Table from '../shared/tables/Table'; // Assuming you have a BankTable component
import Pagination from '../../pagination/Pagination';
import LoadingIndicator from '../../loadingIndicator/LoadingIndicator';
import { fetchBankData, addBankData } from '../../service/getBankData'; // Adjust import for bank service functions

const BankListRecord = () => {
  const [banks, setBanks] = useState([]); // Change variable names
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, totalElements } = await fetchBankData(pageNumber, pageSize); // Adjust function call
        setBanks(data); // Change state variable name
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

  const handleAddBank = async (bankData) => {
    try {
      const addedBank = await addBankData(bankData); // Adjust function call
      setBanks([...banks, addedBank]); // Change state variable name
      // Optionally, reset the form fields or update the data accordingly
    } catch (error) {
      console.error('Error adding bank:', error);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
       <BankForm onAddBank={handleAddBank} /> {/* Change component name and props */}
       <br></br>
      
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
        <h2 style={{ marginBottom: '20px' }}>Bank List</h2>
      </div>

      {loading && <LoadingIndicator />}

      {showData && banks.length > 0 ? (
        <div>
          <Table data={banks} /> {/* Change component name */}
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

export default BankListRecord;
