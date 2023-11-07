// pagesize.js

import React from 'react';

const PageSize = ({ pageSize, onPageSizeChange }) => {
  return (
    <div>
      <span>Page Size:</span>
      <select value={pageSize} onChange={(e) => onPageSizeChange(e.target.value)}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default PageSize;
