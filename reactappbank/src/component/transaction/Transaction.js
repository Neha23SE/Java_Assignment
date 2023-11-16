import React from 'react';
import TransactionForm from '../../component/transaction/TransactionForm';
import TransactionList from '../../component/transaction/TransactionList';

const Transaction = () => {
  return (
    <>
      <h2 >Transactions</h2>
      
      <TransactionForm />
      <TransactionList />
   </>
  );
};



const headerStyle = {
  textAlign: 'center',

  color: '#333',
};


export default Transaction;
