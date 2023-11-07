import axios from 'axios';

export const addCustomerData = async (customerData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/customers', customerData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding customer:', error);
  }
};

export const fetchCustomerData = async (pageNumber, pageSize) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/auth/customersall?pagenumber=${pageNumber}&pagesize=${pageSize}`);
    const data = response.data;
    const totalElements = response.headers['x-total-count'];
    return { data, totalElements };
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export const updateCustomerData = async (customerId, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/auth/customers/${customerId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating customer:', error);
  }
};
export const deleteCustomerData = async (customerId) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/auth/customers/${customerId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting customer:', error);
  }
};
