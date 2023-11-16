// fetchBankData.js
import axios from 'axios';

export const addBankData = async (bankData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/existingbanks', bankData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding bank:', error);
  }
};

export const fetchBankData = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/auth/banksall?pagenumber=${pageNumber}&pagesize=${pageSize}`);
    const data = response.data;
    const totalElements = response.headers['x-total-count'];
    return { data, totalElements };
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};
