// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api"
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("jobportal_token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;


// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true,
// });

// // ✅ Attach token automatically
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;


// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // ✅ Always send correct token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("jobportal_token"); // FIXED KEY!!

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true,
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("jobportal_token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true,
// });

// // Attach token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("jobportal_token"); // FIXED KEY

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;


// frontend/src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // keep if you use cookies, ok to keep
});

api.interceptors.request.use((config) => {
  // your AuthContext stores token as 'jobportal_token'
  const token = localStorage.getItem("jobportal_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
