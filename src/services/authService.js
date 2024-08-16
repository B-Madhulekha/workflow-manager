import axios from 'axios';

// Define the base URL for your backend API
const API_BASE_URL = 'http://localhost:8080/api'; // Adjust the URL as needed

// Function to handle user login
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });
    return response; // Return the response to handle in the component
  } catch (error) {
    throw error; // Rethrow the error to handle it in the component
  }
};

// Function to handle user registration
export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      username,
      password,
    });
    return response; // Return the response to handle in the component
  } catch (error) {
    throw error; // Rethrow the error to handle it in the component
  }
};
