// customerService.js
import axios from 'axios';

const fetchCustomers = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`http://localhost:8080/customer/customersall?pagenumber=${pageNumber}&pagesize=${pageSize}`);
    return {
      data: response.data,
      totalElements: response.headers['x-total-count'],
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You might want to handle this error more gracefully in a real application
  }
};

export { fetchCustomers };
