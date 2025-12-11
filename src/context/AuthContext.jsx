// import { createContext, useContext, useState } from "react";
// import api from "../api/axios";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem("jobportal_user");
//     return saved ? JSON.parse(saved) : null;
//   });

//   const login = async (email, password) => {
//     const res = await api.post("/auth/login", { email, password });
//     setUser(res.data);
//     localStorage.setItem("jobportal_user", JSON.stringify(res.data));
//     localStorage.setItem("jobportal_token", res.data.token);
//   };

//   const register = async (name, email, password, role) => {
//     const res = await api.post("/auth/register", {
//       name,
//       email,
//       password,
//       role
//     });
//     setUser(res.data);
//     localStorage.setItem("jobportal_user", JSON.stringify(res.data));
//     localStorage.setItem("jobportal_token", res.data.token);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("jobportal_user");
//     localStorage.removeItem("jobportal_token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem("jobportal_user");
//     return saved ? JSON.parse(saved) : null;
//   });

//   const login = async (email, password) => {
//     const res = await api.post("/auth/login", { email, password });
//     setUser(res.data);
//     localStorage.setItem("jobportal_user", JSON.stringify(res.data));
//     localStorage.setItem("jobportal_token", res.data.token);
//     navigate("/"); // ✅ redirect home
//   };

//   const register = async (name, email, password, role) => {
//     const res = await api.post("/auth/register", {
//       name,
//       email,
//       password,
//       role,
//     });

//     setUser(res.data);
//     localStorage.setItem("jobportal_user", JSON.stringify(res.data));
//     localStorage.setItem("jobportal_token", res.data.token);
//     navigate("/"); // ✅ redirect home
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("jobportal_user");
//     localStorage.removeItem("jobportal_token");
//     navigate("/"); // ✅ redirect home after logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("jobportal_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });

    localStorage.setItem("jobportal_user", JSON.stringify(res.data));
    localStorage.setItem("jobportal_token", res.data.token); // FIXED MATCH

    setUser(res.data);
    navigate("/");
  };

  const register = async (name, email, password, role) => {
    const res = await api.post("/auth/register", {
      name,
      email,
      password,
      role,
    });

    localStorage.setItem("jobportal_user", JSON.stringify(res.data));
    localStorage.setItem("jobportal_token", res.data.token); // FIXED MATCH

    setUser(res.data);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("jobportal_user");
    localStorage.removeItem("jobportal_token");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
