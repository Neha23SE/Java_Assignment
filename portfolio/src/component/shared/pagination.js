// pagination.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
