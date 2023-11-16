// pagesize.js
import React, { useEffect, useState } from 'react';
import Pagination from './pagination';
import Table from './table'; // Assuming you have a Table component
// Import your service method (I'm assuming getAllCustomer is an asynchronous function)
import { getAllCustomer } from '../../service/user';

const PageSize = () => {
  const [pageSize, setPageSize] = useState(3); // Set a default value
  const [pageNumber, setPageNumber] = useState(1); // Set a default value
  const [numberOfPages, setNumberOfPages] = useState(1); // Set a default value
  const [totalNumberOfRecords, setTotalNumberOfRecords] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      console.log('pageSize', pageSize);
      console.log('pageNumber', pageNumber);

      const response = await getAllCustomer(pageNumber, pageSize);

      if (response.data) {
        setData(response.data);
      }

      console.log(response);

      const totalNumberOfRecords = response.headers['x-total-count'];
      setTotalNumberOfRecords(Number(totalNumberOfRecords));
      setNumberOfPages(Math.ceil(totalNumberOfRecords / pageSize));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log('useEffect called');
    fetchData();
  }, [totalNumberOfRecords, pageSize, pageNumber]);

  return (
    <>
      <div style={{ marginTop: '2rem' }}>
        <h1 className="heading">Customer Details</h1>
        <div className="n-container">
          <div className="n-left">
            <div className="s-blur" style={{ background: 'green' }}></div>
            <select
              className="form-select"
              aria-label="default select example"
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageNumber(1); // Reset page number when page size changes
              }}
              value={pageSize}
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <Table data={data} />
      <Pagination
        numberOfPages={numberOfPages}
        getFunction={fetchData} // Pass the function reference, not the result
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default PageSize;
