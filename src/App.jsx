// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import JobsListPage from "./pages/JobsListPage";
// import JobDetailsPage from "./pages/JobDetailsPage";
// import ApplyJobPage from "./pages/ApplyJobPage";
// import StudentApplicationsPage from "./pages/StudentApplicationsPage";
// import RecruiterDashboard from "./pages/RecruiterDashboard";
// import AdminDashboard from "./pages/AdminDashboard";

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/jobs" element={<JobsListPage />} />
//           <Route path="/jobs/:id" element={<JobDetailsPage />} />
//           <Route
//             path="/jobs/:id/apply"
//             element={
//               <ProtectedRoute roles={["student"]}>
//                 <ApplyJobPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/applications"
//             element={
//               <ProtectedRoute roles={["student"]}>
//                 <StudentApplicationsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/recruiter"
//             element={
//               <ProtectedRoute roles={["recruiter"]}>
//                 <RecruiterDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute roles={["admin"]}>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;



// import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import JobsListPage from "./pages/JobsListPage";
// import JobDetailsPage from "./pages/JobDetailsPage";
// import ApplyJobPage from "./pages/ApplyJobPage";
// import StudentApplicationsPage from "./pages/StudentApplicationsPage";
// import RecruiterDashboard from "./pages/RecruiterDashboard";
// import AdminDashboard from "./pages/AdminDashboard";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/jobs" element={<JobsListPage />} />
//         <Route path="/jobs/:id" element={<JobDetailsPage />} />

//         <Route
//           path="/jobs/:id/apply"
//           element={
//             <ProtectedRoute roles={["student"]}>
//               <ApplyJobPage />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/applications"
//           element={
//             <ProtectedRoute roles={["student"]}>
//               <StudentApplicationsPage />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/recruiter"
//           element={
//             <ProtectedRoute roles={["recruiter"]}>
//               <RecruiterDashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute roles={["admin"]}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//       </Routes>
//     </AuthProvider>
//   );
// };

// export default App;


// import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import JobsListPage from "./pages/JobsListPage";
// import JobDetailsPage from "./pages/JobDetailsPage";
// import ApplyJobPage from "./pages/ApplyJobPage";
// import StudentApplicationsPage from "./pages/StudentApplicationsPage";
// import RecruiterDashboard from "./pages/RecruiterDashboard";
// import AdminDashboard from "./pages/AdminDashboard";
// import AccountPage from "./pages/AccountPage";
// import NotificationsPage from "./pages/NotificationsPage";



// // ✅ New pages
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import ResetPasswordPage from "./pages/ResetPasswordPage";

// const App = () => {
//   return (
//     <AuthProvider>
//       {/* ✅ Navbar stays outside routes */}
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/jobs" element={<JobsListPage />} />
//         <Route path="/jobs/:id" element={<JobDetailsPage />} />

//         <Route
//           path="/jobs/:id/apply"
//           element={
//             <ProtectedRoute roles={["student"]}>
//               <ApplyJobPage />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/applications"
//           element={
//             <ProtectedRoute roles={["student"]}>
//               <StudentApplicationsPage />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/recruiter"
//           element={
//             <ProtectedRoute roles={["recruiter"]}>
//               <RecruiterDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/account"
//           element={
//             <ProtectedRoute roles={["student", "recruiter", "admin"]}>
//               <AccountPage />
//             </ProtectedRoute>
//           }
//         />
//           <Route
//           path="/notifications"
//           element={
//             <ProtectedRoute roles={["student", "recruiter", "admin"]}>
//               <NotificationsPage />
//             </ProtectedRoute>
//           }
//         />


//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute roles={["admin"]}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* ✅ Forgot / Reset Password */}
//         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//         <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

//         {/* ✅ Auth */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//       </Routes>
//     </AuthProvider>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import JobsListPage from "./pages/JobsListPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import StudentApplicationsPage from "./pages/StudentApplicationsPage";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AccountPage from "./pages/AccountPage";
import NotificationsPage from "./pages/NotificationsPage";

import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import RecruiterJobApplicationsPage from "./pages/RecruiterJobApplicationsPage";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsListPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />

          <Route
            path="/jobs/:id/apply"
            element={
              <ProtectedRoute roles={["student"]}>
                <ApplyJobPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/applications"
            element={
              <ProtectedRoute roles={["student"]}>
                <StudentApplicationsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/recruiter"
            element={
              <ProtectedRoute roles={["recruiter"]}>
                <RecruiterDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/account"
            element={
              <ProtectedRoute roles={["student", "recruiter", "admin"]}>
                <AccountPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/notifications"
            element={
              <ProtectedRoute roles={["student", "recruiter", "admin"]}>
                <NotificationsPage />
              </ProtectedRoute>
            }
          />
          // inside your Routes, add:
          <Route
            path="/recruiter/job/:id/applicants"
            element={
              <ProtectedRoute roles={["recruiter"]}>
                <RecruiterJobApplicationsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />


          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
