import React from 'react';

const Pagination = ({ pageNumber, totalElements, pageSize, onPageChange }) => (
  <div style={{ marginTop: '20px' }}>
    <button onClick={() => onPageChange(pageNumber - 1)} disabled={pageNumber === 0}>
      &lt; Previous
    </button>
    {[...Array(Math.ceil(totalElements / pageSize))].map((_, index) => (
      <button key={index} onClick={() => onPageChange(index)} disabled={pageNumber === index}>
        {index + 1}
      </button>
    ))}
    <button onClick={() => onPageChange(pageNumber + 1)} disabled={pageNumber === Math.ceil(totalElements / pageSize) - 1}>
      Next &gt;
    </button>
  </div>
);

export default Pagination;
