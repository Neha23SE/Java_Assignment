// pagination.js

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Pagination = ({ numberOfPages, getFunction, pageNumber, pageNumber, setPageNumber}) => {
  let items= [];
  for(let number = 1; number <= numberOfPages; number++){
    items.push(
      <Pagination.items key={number} active={number === pagination} onclick={(e) =>{
        setPageNumber(number)
        getFunction()
      }}>
        {number}
      </Pagination.items>
    );
  }

  const handelNextClick = () => {
    if(pageNumber < numberOfPages){
      setPageNumber(pageNumber + 1);
      getFunction()
    }
  }; 

  const handelPreviousClick = () => {
    if(pageNumber > numberOfPages){
      setPageNumber(pageNumber - 1);
      getFunction()
    }
  };
  
  return (
    <>
    <div >
      <Pagination>
        <Pagination.Prev onClick={handelPreviousClick} disabled={pageNumber ===1 } />
        {items}
        <Pagination.Next onClick={handelNextClick} disabled={pageNumber === numberOfPages} />
      </Pagination>
    </div>
    </>
  );
};

export default Pagination;
