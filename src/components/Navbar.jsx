// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useAuth();

//   return (
//     <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
//       <Link to="/" className="text-2xl font-bold tracking-wide">
//         Careeva
//       </Link>

//       <div className="flex items-center gap-5 text-lg">
//         <Link to="/jobs" className="hover:text-gray-200">
//           Jobs
//         </Link>

//         {user?.role === "student" && (
//           <Link to="/applications" className="hover:text-gray-200">
//             My Applications
//           </Link>
//         )}

//         {user?.role === "recruiter" && (
//           <Link to="/recruiter" className="hover:text-gray-200">
//             Recruiter
//           </Link>
//         )}

//         {user?.role === "admin" && (
//           <Link to="/admin" className="hover:text-gray-200">
//             Admin
//           </Link>
//         )}

//         {user ? (
//           <>
//             <span className="font-semibold">Hi, {user.name}</span>
//             <button
//               onClick={logout}
//               className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="hover:text-gray-200">
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-white text-indigo-600 px-4 py-1 rounded hover:bg-gray-200"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();        // clear auth state & localStorage
//     navigate("/");  // ✅ redirect to Home after logout
//   };

//   return (
//     <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
//       <Link to="/" className="text-2xl font-bold tracking-wide">
//         Careeva
//       </Link>

//       <div className="flex items-center gap-5 text-lg">
//         <Link to="/jobs" className="hover:text-gray-200">
//           Jobs
//         </Link>

//         {user?.role === "student" && (
//           <Link to="/applications" className="hover:text-gray-200">
//             My Applications
//           </Link>
//         )}

//         {user?.role === "recruiter" && (
//           <Link to="/recruiter" className="hover:text-gray-200">
//             Recruiter
//           </Link>
//         )}

//         {user?.role === "admin" && (
//           <Link to="/admin" className="hover:text-gray-200">
//             Admin
//           </Link>
//         )}

//         {user ? (
//           <>
//             {/* ✅ My Account Link */}
//             <Link
//               to="/account"
//               className="bg-white text-indigo-600 px-4 py-1 rounded hover:bg-gray-200"
//             >
//               My Account
//             </Link>

//             <span className="font-semibold">Hi, {user.name}</span>

//             {/* ✅ Logout with Redirect */}
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="hover:text-gray-200">
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-white text-indigo-600 px-4 py-1 rounded hover:bg-gray-200"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/"); // ✅ redirect to home after logout
//   };

//   return (
//     <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
//       <Link
//         to="/"
//         className="text-2xl font-bold tracking-wide hover:text-yellow-300"
//       >
//         Careeva
//       </Link>

//       <div className="flex items-center gap-5 text-lg">
//         <Link to="/jobs" className="hover:text-gray-200">
//           Jobs
//         </Link>

//         {user?.role === "student" && (
//           <Link to="/applications" className="hover:text-gray-200">
//             My Applications
//           </Link>
//         )}

//         {user?.role === "recruiter" && (
//           <Link to="/recruiter" className="hover:text-gray-200">
//             Recruiter
//           </Link>
//         )}

//         {user?.role === "admin" && (
//           <Link to="/admin" className="hover:text-gray-200">
//             Admin
//           </Link>
//         )}

//         {user ? (
//           <>
//             <Link
//               to="/account"
//               className="bg-white text-indigo-600 px-3 py-1 rounded hover:bg-gray-200"
//             >
//               My Account
//             </Link>

//             <span className="font-semibold hidden md:inline">
//               Hi, {user.name}
//             </span>

//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="hover:text-gray-200">
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-white text-indigo-600 px-4 py-1 rounded hover:bg-gray-200"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
//       <Link
//         to="/"
//         className="text-2xl font-bold tracking-wide text-emerald-400 hover:text-emerald-300"
//       >
//         NaukriSpot
//       </Link>

//       <div className="flex items-center gap-6 text-lg">
//         <Link to="/jobs" className="hover:text-emerald-400 transition">
//           Jobs
//         </Link>

//         {user?.role === "student" && (
//           <Link to="/applications" className="hover:text-emerald-400 transition">
//             My Applications
//           </Link>
//         )}

//         {user?.role === "recruiter" && (
//           <Link to="/recruiter" className="hover:text-emerald-400 transition">
//             Recruiter
//           </Link>
//         )}

//         {user?.role === "admin" && (
//           <Link to="/admin" className="hover:text-emerald-400 transition">
//             Admin
//           </Link>
//         )}

//         {user ? (
//           <>
//             <Link
//               to="/account"
//               className="bg-emerald-500 text-white px-4 py-1 rounded-md hover:bg-emerald-600 transition"
//             >
//               My Account
//             </Link>

//             <span className="font-medium hidden md:inline text-slate-300">
//               Hi, {user.name}
//             </span>

//             <button
//               onClick={handleLogout}
//               className="bg-red-500 px-4 py-1 rounded-md hover:bg-red-600 transition"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="hover:text-emerald-400 transition">
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-emerald-500 text-white px-4 py-1 rounded-md hover:bg-emerald-600 transition"
//             >
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";
// import { User, LogOut } from "lucide-react";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">

//       {/* ✅ LOGO */}
//       <Link to="/" className="text-2xl font-bold text-emerald-400">
//         NaukriSpot
//       </Link>

//       {/* ✅ NAV LINKS */}
//       <div className="flex items-center gap-8">

//         <Link to="/jobs" className="hover:text-emerald-400 transition">
//           Jobs
//         </Link>

//         {user?.role === "student" && (
//           <Link to="/applications" className="hover:text-emerald-400 transition">
//             Applications
//           </Link>
//         )}

//         {user?.role === "recruiter" && (
//           <Link to="/recruiter" className="hover:text-emerald-400 transition">
//             Recruiter
//           </Link>
//         )}

//         {user?.role === "admin" && (
//           <Link to="/admin" className="hover:text-emerald-400 transition">
//             Admin
//           </Link>
//         )}

//         {!user ? (
//           <>
//             <Link to="/login" className="hover:text-emerald-400 transition">
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600 transition font-semibold"
//             >
//               Register
//             </Link>
//           </>
//         ) : (
//           /* ✅ ACCOUNT ICON DROPDOWN */
//           <div className="relative">

//             <button
//               onClick={() => setOpen(!open)}
//               className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center hover:bg-emerald-600 transition"
//             >
//               <User size={20} />
//             </button>

//             {open && (
//               <div className="absolute right-0 mt-4 w-48 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden z-50">

//                 <div className="px-4 py-3 border-b">
//                   <p className="text-sm font-semibold">{user.email}</p>
//                   <p className="text-xs text-gray-500 capitalize">
//                     {user.role}
//                   </p>
//                 </div>

//                 <Link
//                   to="/account"
//                   onClick={() => setOpen(false)}
//                   className="block px-4 py-3 hover:bg-gray-100 transition"
//                 >
//                   My Profile
//                 </Link>

//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition"
//                 >
//                   <LogOut size={16} />
//                   Logout
//                 </button>

//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useTheme } from "../context/ThemeContext";
// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { Bell, Moon, Sun, User, LogOut } from "lucide-react";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const { dark, toggleTheme } = useTheme();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     if (!user) return;
//     api.get("/notifications").then((res) => setNotifications(res.data));
//   }, [user]);

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const unreadCount = notifications.length; // simple count for now

//   return (
//     <nav className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
//       {/* LOGO */}
//       <Link to="/" className="text-2xl font-bold text-emerald-400">
//         NaukriSpot
//       </Link>

//       {/* LINKS + ICONS */}
//       <div className="flex items-center gap-6 text-sm md:text-base">

//         <Link to="/jobs" className="hover:text-emerald-400 transition">
//           Jobs
//         </Link>

//         {user?.role === "student" && (
//           <Link
//             to="/applications"
//             className="hover:text-emerald-400 transition"
//           >
//             Applications
//           </Link>
//         )}

//         {user?.role === "recruiter" && (
//           <Link
//             to="/recruiter"
//             className="hover:text-emerald-400 transition"
//           >
//             Recruiter
//           </Link>
//         )}

//         {user?.role === "admin" && (
//           <Link to="/admin" className="hover:text-emerald-400 transition">
//             Admin
//           </Link>
//         )}

//         {/* THEME TOGGLE */}
//         <button
//           onClick={toggleTheme}
//           className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
//         >
//           {dark ? <Sun size={18} /> : <Moon size={18} />}
//         </button>

//         {!user ? (
//           <>
//             <Link to="/login" className="hover:text-emerald-400 transition">
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600 transition font-semibold"
//             >
//               Register
//             </Link>
//           </>
//         ) : (
//           <>
//             {/* NOTIFICATION BELL */}
//             <button
//               onClick={() => navigate("/notifications")}
//               className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
//             >
//               <Bell size={18} />
//               {unreadCount > 0 && (
//                 <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-[10px] flex items-center justify-center rounded-full">
//                   {unreadCount}
//                 </span>
//               )}
//             </button>

//             {/* ACCOUNT ICON DROPDOWN */}
//             <div className="relative">
//               <button
//                 onClick={() => setOpen((prev) => !prev)}
//                 className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center hover:bg-emerald-600 transition"
//               >
//                 <User size={18} />
//               </button>

//               {open && (
//                 <div className="absolute right-0 mt-3 w-52 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden z-50">
//                   <div className="px-4 py-3 border-b">
//                     <p className="text-sm font-semibold">
//                       {user.email}
//                     </p>
//                     <p className="text-xs text-gray-500 capitalize">
//                       {user.role}
//                     </p>
//                   </div>

//                   <Link
//                     to="/account"
//                     onClick={() => setOpen(false)}
//                     className="block px-4 py-3 hover:bg-gray-100 transition text-sm"
//                   >
//                     My Profile
//                   </Link>

//                   <button
//                     onClick={handleLogout}
//                     className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition text-sm"
//                   >
//                     <LogOut size={16} />
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import api from "../api/axios";
import { Bell, Moon, Sun, User, LogOut } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { dark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // ✅ Load notifications on login
  // useEffect(() => {
  //   if (!user) {
  //     setNotifications([]);
  //     return;
  //   }

  //   api.get("/notifications").then((res) => setNotifications(res.data));
  // }, [user]);
  useEffect(() => {
  if (!user) {
    setNotifications([]);
    return;
  }

  const fetch = async () => {
    const res = await api.get("/notifications");
    setNotifications(res.data);
  };

  fetch();
}, [user]);


  // ⭐ Count only unread notifications
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      
      {/* LOGO */}
      <Link to="/" className="text-2xl font-bold text-emerald-400">
        NaukriSpot
      </Link>

      {/* LINKS + ICONS */}
      <div className="flex items-center gap-6 text-sm md:text-base">

        <Link to="/jobs" className="hover:text-emerald-400 transition">
          Jobs
        </Link>

        {user?.role === "student" && (
          <Link
            to="/applications"
            className="hover:text-emerald-400 transition"
          >
            Applications
          </Link>
        )}

        {user?.role === "recruiter" && (
          <Link
            to="/recruiter"
            className="hover:text-emerald-400 transition"
          >
            Recruiter
          </Link>
        )}

        {user?.role === "admin" && (
          <Link to="/admin" className="hover:text-emerald-400 transition">
            Admin
          </Link>
        )}

        {/* ⭐ THEME TOGGLE BUTTON */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {!user ? (
          <>
            <Link to="/login" className="hover:text-emerald-400 transition">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600 transition font-semibold"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {/* ⭐ NOTIFICATION BELL (UNREAD COUNT) */}
            <button
              onClick={() => navigate("/notifications")}
              className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Bell size={18} />

              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-[10px] flex items-center justify-center rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* ACCOUNT DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <User size={18} />
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-52 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-semibold">
                      {user.email}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {user.role}
                    </p>
                  </div>

                  <Link
                    to="/account"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-100 transition text-sm"
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition text-sm"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
