const API_URL = 'http://localhost:5000/api';

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const searchUsers = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search?query=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const filterUsers = async (nationality) => {
  try {
    const response = await fetch(`${API_URL}/filter?nationality=${nationality}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error filtering users:', error);
    throw error;
  }
};