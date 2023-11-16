import axios from 'axios';

export const addAccountData = async (accountData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/accounts', accountData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding account:', error);
  }
};

export const fetchAccountData = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/auth/accountall?pagenumber=${pageNumber}&pagesize=${pageSize}`);
    const data = response.data;
    const totalElements = response.headers['x-total-count'];
    return { data, totalElements };
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};
