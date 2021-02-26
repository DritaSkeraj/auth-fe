import axios from "axios";

const backend = axios.create({
  baseURL: process.env.REACT_APP_DEV_BACKEND_URL,
  withCredentials: true,
});

backend.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("refreshing the token...");
      return backend
        .post("/auth/refreshToken")
        .then((res) => {
          if (res.status === 200) {
            console.log("token is refreshed");
            return backend(originalRequest);
          }
        })
        .catch(() => {
          window.location.replace("/auth/login");
          return Promise.reject(error);
        });
    }
  }
);

export default backend;
