// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext(null);

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [dark, setDark] = useState(
//     () => localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   const toggleTheme = () => setDark((prev) => !prev);

//   return (
//     <ThemeContext.Provider value={{ dark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, setTheme: setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
