// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const RegisterPage = () => {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const onChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       if (!form.name || !form.email || !form.password) {
//         setError("All fields are required");
//         setLoading(false);
//         return;
//       }

//       await register(
//         form.name,
//         form.email,
//         form.password,
//         form.role
//       );

//       navigate("/"); // ✅ redirect after success
//     } catch (err) {
//       console.error("REGISTER ERROR:", err);
//       setError(
//         err.response?.data?.message ||
//           "Registration failed. Check backend & database."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
//           Create Account
//         </h2>

//         {error && (
//           <p className="text-red-500 mb-4 text-center">{error}</p>
//         )}

//         <form onSubmit={onSubmit} className="space-y-4">
//           <input
//             className="w-full p-3 border rounded"
//             name="name"
//             placeholder="Name"
//             value={form.name}
//             onChange={onChange}
//           />

//           <input
//             className="w-full p-3 border rounded"
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={onChange}
//           />

//           <input
//             className="w-full p-3 border rounded"
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={onChange}
//           />

//           <select
//             className="w-full p-3 border rounded"
//             name="role"
//             value={form.role}
//             onChange={onChange}
//           >
//             <option value="student">Student</option>
//             <option value="recruiter">Recruiter</option>
//           </select>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 disabled:opacity-60"
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const RegisterPage = () => {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const onChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       if (!form.name || !form.email || !form.password) {
//         setError("All fields are required");
//         setLoading(false);
//         return;
//       }

//       await register(
//         form.name,
//         form.email,
//         form.password,
//         form.role
//       );

//       navigate("/"); // ✅ redirect after success
//     } catch (err) {
//       console.error("REGISTER ERROR:", err);

//       // ✅ SHOW REAL BACKEND ERROR
//       if (err.response) {
//         setError(err.response.data.message);
//       } else if (err.request) {
//         setError("Backend not responding. Is server running?");
//       } else {
//         setError("Unknown error occurred");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
//           Create Account
//         </h2>

//         {error && (
//           <p className="text-red-500 mb-4 text-center">{error}</p>
//         )}

//         <form onSubmit={onSubmit} className="space-y-4">
//           <input
//             className="w-full p-3 border rounded"
//             name="name"
//             placeholder="Name"
//             value={form.name}
//             onChange={onChange}
//           />

//           <input
//             className="w-full p-3 border rounded"
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={onChange}
//           />

//           <input
//             className="w-full p-3 border rounded"
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={onChange}
//           />

//           <select
//             className="w-full p-3 border rounded"
//             name="role"
//             value={form.role}
//             onChange={onChange}
//           >
//             <option value="student">Student</option>
//             <option value="recruiter">Recruiter</option>
//           </select>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 disabled:opacity-60"
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const RegisterPage = () => {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const onChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       if (!form.name || !form.email || !form.password) {
//         setError("All fields are required");
//         setLoading(false);
//         return;
//       }

//       await register(
//         form.name,
//         form.email,
//         form.password,
//         form.role
//       );

//       navigate("/");
//     } catch (err) {
//       console.error("REGISTER ERROR:", err);

//       if (err.response) {
//         setError(err.response.data.message);
//       } else if (err.request) {
//         setError("Backend not responding. Is server running?");
//       } else {
//         setError("Unknown error occurred");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 flex items-center justify-center px-4">

//       <div className="bg-white/95 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl p-10 border border-white/20">

//         {/* ✅ Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-extrabold text-slate-800 mb-1">
//             Create Account
//           </h2>
//           <p className="text-gray-500">
//             Join NaukriSpot and start your career journey
//           </p>
//         </div>

//         {/* ✅ Error Box */}
//         {error && (
//           <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg mb-6 text-center font-semibold">
//             {error}
//           </div>
//         )}

//         {/* ✅ Form */}
//         <form onSubmit={onSubmit} className="space-y-5">

//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">
//               Full Name
//             </label>
//             <input
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               name="name"
//               placeholder="Enter your full name"
//               value={form.name}
//               onChange={onChange}
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">
//               Email Address
//             </label>
//             <input
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               value={form.email}
//               onChange={onChange}
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">
//               Password
//             </label>
//             <input
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               name="password"
//               type="password"
//               placeholder="Create a strong password"
//               value={form.password}
//               onChange={onChange}
//             />
//             <p className="text-xs text-gray-400 mt-1">
//               Must be at least 6 characters
//             </p>
//           </div>

//           {/* Role */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">
//               Register As
//             </label>
//             <select
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
//               name="role"
//               value={form.role}
//               onChange={onChange}
//             >
//               <option value="student">🎓 Student</option>
//               <option value="recruiter">🏢 Recruiter</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-blue-700 disabled:opacity-60 transition shadow-lg"
//           >
//             {loading ? "Creating Account..." : "Create Account"}
//           </button>

//         </form>

//         {/* ✅ Footer */}
//         <p className="text-xs text-gray-500 text-center mt-6">
//           By signing up, you agree to our Terms & Privacy Policy.
//         </p>

//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!form.name || !form.email || !form.password) {
        setError("All fields are required");
        setLoading(false);
        return;
      }

      await register(
        form.name,
        form.email,
        form.password,
        form.role
      );

      navigate("/");
    } catch (err) {
      console.error("REGISTER ERROR:", err);

      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError("Backend not responding. Is server running?");
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* ✅ LEFT BRAND PANEL */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-teal-600 to-emerald-500 text-white p-10">
          <h2 className="text-4xl font-extrabold mb-4">
            Join NaukriSpot
          </h2>
          <p className="text-center text-lg opacity-90">
            Build your future with verified jobs and trusted recruiters.
          </p>

          <div className="mt-8 bg-white/20 p-6 rounded-xl text-center">
            <p className="font-semibold">✨ Trusted by Students</p>
            <p className="text-sm mt-2">
              Apply. Track. Get Hired.
            </p>
          </div>
        </div>

        {/* ✅ RIGHT FORM PANEL */}
        <div className="p-10">

          <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 mb-6">
            Register to access all career opportunities
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg mb-6 text-center font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">

            <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={onChange}
            />

            <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={onChange}
            />

            <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              name="password"
              type="password"
              placeholder="Create Password"
              value={form.password}
              onChange={onChange}
            />

            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none bg-white"
              name="role"
              value={form.role}
              onChange={onChange}
            >
              <option value="student">🎓 Student</option>
              <option value="recruiter">🏢 Recruiter</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-emerald-700 disabled:opacity-60 transition shadow-lg mt-4"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <p className="text-xs text-gray-400 text-center mt-6">
            By registering, you agree to our Terms & Privacy Policy
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
