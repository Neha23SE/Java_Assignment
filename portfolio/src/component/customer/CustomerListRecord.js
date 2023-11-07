 /*import React, { useState, useEffect } from 'react';
import Table from '../tables/Table';
import Pagination from '../pagination/Pagination'; // Check the path
import LoadingIndicator from '../loadingIndicator/LoadingIndicator'; // Check the path
import { fetchCustomerData } from '../service/fetchCustomerData';

const CustomerListRecord = () => {
  const [customers, setCustomers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, totalElements } = await fetchCustomerData(pageNumber, pageSize);
        setCustomers(data);
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

  return (

    
    <div style={{ margin: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Customer List</h2>
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
      </div>

      {loading && <LoadingIndicator />}

      {showData && customers.length > 0 ? (
        <div>
          <Table data={customers} />
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

export default CustomerListRecord;
*/
/*
// CustomerListRecord.js
/*import React, { useState, useEffect } from 'react';
import CustomerForm from '../component/CustomerForm';
import Table from '../tables/Table';
import Pagination from '../pagination/Pagination';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator';
import { fetchCustomerData } from '../service/fetchCustomerData';

const CustomerListRecord = () => {
  const [customers, setCustomers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, totalElements } = await fetchCustomerData(pageNumber, pageSize);
        setCustomers(data);
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

  return (
    <div style={{ margin: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Customer List</h2>
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
      </div>

      {loading && <LoadingIndicator />}

      {showData && customers.length > 0 ? (
        <div>
          <Table data={customers} />
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

      <CustomerForm onAddCustomer={(addedCustomer) => setCustomers([...customers, addedCustomer])} />
    </div>
  );
};

export default CustomerListRecord;

*/

// CustomerListRecord.js
/*import React, { useState, useEffect } from 'react';
import CustomerForm from './CustomerForm';
import Table from '../shared/tables/Table';
import Pagination from '../../pagination/Pagination';
import LoadingIndicator from '../../loadingIndicator/LoadingIndicator';
import { fetchCustomerData, addCustomerData } from '../../service/getCustomerData'; // Import the new function

const CustomerListRecord = () => {
  const [customers, setCustomers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, totalElements } = await fetchCustomerData(pageNumber, pageSize);
        setCustomers(data);
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

  const handleAddCustomer = async (customerData) => {
    try {
      const addedCustomer = await addCustomerData(customerData);
      setCustomers([...customers, addedCustomer]);
      // Optionally, reset the form fields or update the data accordingly
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <div>
    <div style={{ margin: '20px' }}>
       <CustomerForm onAddCustomer={handleAddCustomer} />
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
        <h2 style={{ marginBottom: '20px' }}>Customer List</h2>
      </div>

      {loading && <LoadingIndicator />}

      {showData && customers.length > 0 ? (
        <div>
     

          <Table data={customers} />
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
    </div>
  );
};

export default CustomerListRecord;

*/

//after implementing update and dlelete button
import React, { useState, useEffect } from 'react';
import CustomerForm from './CustomerForm';
import Table from '../shared/tables/Table';
import Pagination from '../../pagination/Pagination';
import LoadingIndicator from '../../loadingIndicator/LoadingIndicator';
import {
  fetchCustomerData,
  addCustomerData,
  updateCustomerData,
  deleteCustomerData,
} from '../../service/getCustomerData';

const CustomerListRecord = () => {
  const [customers, setCustomers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, totalElements } = await fetchCustomerData(pageNumber, pageSize);
        setCustomers(data);
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

  const handleAddCustomer = async (customerData) => {
    try {
      const addedCustomer = await addCustomerData(customerData);
      setCustomers([...customers, addedCustomer]);
      // Optionally, reset the form fields or update the data accordingly
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  
  
  const handleUpdateCustomer = async (customerId) => {
    try {
      // Fetch updated data using your logic, replace 'fetchUpdatedData' accordingly
      const { data: updatedData } = await fetchUpdatedData(customerId);

      // Assuming updateCustomerData function is available in your service
      const updatedCustomer = await updateCustomerData(customerId, updatedData);
      setCustomers((prevCustomers) =>
        prevCustomers.map((customer) =>
          customer.cid === customerId ? { ...customer, ...updatedCustomer } : customer
        )
      );
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  
  
  const handleDeleteCustomer = async (customerId) => {
    try {
      // Assuming deleteCustomerData function is available in your service
      await deleteCustomerData(customerId);
      setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.cid !== customerId));
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };


  return (
    <div>
      <div style={{ margin: '20px' }}>
        <CustomerForm onAddCustomer={handleAddCustomer} />
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
            style={{
              padding: '5px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
            }}
          >
            Apply
          </button>
          <h2 style={{ marginBottom: '20px' }}>Customer List</h2>
        </div>

        {loading ? (
        <LoadingIndicator />
      ) : showData && customers.length > 0 ? (
        <div>
          <Table
            data={customers}
            loading={loading}
            onUpdateClick={handleUpdateCustomer}
            onDeleteClick={handleDeleteCustomer}
          />
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
    </div>
  );
};

export default CustomerListRecord;
