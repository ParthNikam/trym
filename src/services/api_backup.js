// src/services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const apiEndpoints = {
  fetchUserByName: (name) => `/?name=${name}`,
  fetchAllUsers: () => `/all`,
  fetchUserById: (userId) => `/profile/?uid=${userId}`,
};

const apiService = {
  fetchUserByName: async (name) => {
    try {
      const response = await api.get(apiEndpoints.fetchUserByName(name));
      return response.data;
    } catch (error) {
      console.error("Error fetching users by name:", error);
      throw error;
    }
  },

  fetchAllUsers: async () => {
    try {
      const response = await api.get(apiEndpoints.fetchAllUsers());
      return response.data;
    } catch (error) {
      console.error("Error fetching all users", error);
      throw error;
    }
  },

  fetchUserById: async (userId) => {
    try {
      const response = await api.get(apiEndpoints.fetchUserById(userId));
      return response.data;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    }
  },
};

export default apiService;
