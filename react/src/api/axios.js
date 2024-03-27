import axios from "axios";

export const baseURL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL,
});

export const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    accept: "application/json",
  },
};

const auth = {
  login: async (username, password) => {
    try {
      // const formData = new FormData();
      // formData.append("username", username);
      // formData.append("password", password);
      data = {
        username: username,
        password: password,
      };

      const response = await axiosInstance.post("/login", data, config);
      return response.data;
    } catch (error) {
      throw new Error("Login failed");
    }
  },
  createAccount: async (userData) => {
    try {
      const response = await axiosInstance.post("/user", userData, config);
      return response.data;
    } catch (error) {
      throw new Error("Account creation failed");
    }
  },
};

export default auth;
