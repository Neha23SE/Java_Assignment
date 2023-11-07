import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    // Only fetch data if showData is true
    if (showData) {
      fetchData();
    }
  }, [pageNumber, pageSize, showData]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/customer/customersall?pagenumber=${pageNumber}&pagesize=${pageSize}`);
      setCustomers(response.data);
      setTotalElements(response.headers['x-total-count']);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

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
    setPageNumber(0); // Reset to the first page after applying new page size
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Customer List</h2>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Page Size: </label>
        <input type="number" value={pageSize} onChange={handlePageSizeChange} min="1" style={{ marginRight: '10px', padding: '5px' }} />
        <button onClick={handleApplyPageSize} style={{ padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px' }}>OK</button>
      </div>

      {loading && <p>Loading...</p>}

      {showData && customers.length > 0 ? (
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                {Object.keys(customers[0]).map((key) => (
                  <th key={key} style={{ padding: '10px', border: '1px solid #ddd' }}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  {Object.values(customer).map((value, nestedIndex) => (
                    <td key={nestedIndex} style={{ padding: '10px', border: '1px solid #ddd' }}>
                      {typeof value === 'object' ? (
                        // Render nested object properties as a comma-separated string
                        Object.values(value).join(', ')
                      ) : (
                        // Render non-object values directly
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {totalElements > pageSize && (
            <div style={{ marginTop: '20px' }}>
              <button onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 0}>&lt; Previous</button>
              {[...Array(Math.ceil(totalElements / pageSize))].map((_, index) => (
                <button key={index} onClick={() => handlePageChange(index)} disabled={pageNumber === index}>
                  {index + 1}
                </button>
              ))}
              <button onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === Math.ceil(totalElements / pageSize) - 1}>Next &gt;</button>
            </div>
          )}
        </div>
      ) : (
        showData && <p>No data available.</p>
      )}
    </div>
  );
};

export default CustomerList;