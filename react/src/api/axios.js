import axios from "axios";

const baseURL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/x-www-form-urlencoded",
  },
});

const api = {
  login: async (username, password) => {
    try {
      const formData = new URLSearchParams();
      formData.append("grant_type", "");
      formData.append("username", username);
      formData.append("password", password);
      formData.append("scope", "");
      formData.append("client_id", "");
      formData.append("client_secret", "");

      const response = await axiosInstance.post("/login", formData);

      return response.data;
    } catch (error) {
      throw new Error("Login failed");
    }
  },
  createAccount: async (userData) => {
    try {
      const response = await axiosInstance.post("/create-account", userData);
      return response.data;
    } catch (error) {
      throw new Error("Account creation failed");
    }
  },
};

export default api;
