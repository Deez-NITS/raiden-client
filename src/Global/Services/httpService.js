import axios from "axios";

// Setting up base URL
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// Sending auth token with every requests
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("_accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
