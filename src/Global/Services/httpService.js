import axios from "axios";

// Setting up base URL
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// Middleware for every requests
axios.interceptors.request.use(
  (request) => {
    request.withCredentials = true;
    request.headers["Content-Type"] = "application/json";
    request.headers["Accept"] = "application/json";
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
