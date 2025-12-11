// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const LoginPage = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const onChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(form.email, form.password);
//       navigate("/");
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
//           Login to Careeva
//         </h2>

//         {error && <p className="text-red-500 mb-3">{error}</p>}

//         <form onSubmit={onSubmit} className="space-y-4">
//           <input
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={onChange}
//             className="w-full p-3 border rounded"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={onChange}
//             className="w-full p-3 border rounded"
//           />
//           <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const LoginPage = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const onChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(form.email, form.password);
//       navigate("/");
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Invalid credentials"
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
//           Login to NaukriSpot
//         </h2>

//         {error && <p className="text-red-500 mb-3 text-center">{error}</p>}

//         <form onSubmit={onSubmit} className="space-y-4">
//           <input
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={onChange}
//             className="w-full p-3 border rounded"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={onChange}
//             className="w-full p-3 border rounded"
//           />
//           <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
//             Login
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <Link to="/forgot-password" className="text-indigo-600">
//             Forgot your password?
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError("Backend not responding. Is server running?");
      } else {
        setError("Login failed. Try again.");
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
            Welcome Back
          </h2>
          <p className="text-center text-lg opacity-90">
            Login to continue your career journey with NaukriSpot.
          </p>

          <div className="mt-8 bg-white/20 p-6 rounded-xl text-center">
            <p className="font-semibold">🚀 1000+ Verified Jobs</p>
            <p className="text-sm mt-2">
              Trusted recruiters. Faster hiring.
            </p>
          </div>
        </div>

        {/* ✅ RIGHT LOGIN FORM */}
        <div className="p-10">

          <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
            Login
          </h2>
          <p className="text-gray-500 mb-6">
            Enter your credentials to access your account
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg mb-6 text-center font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={onChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={onChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-emerald-700 disabled:opacity-60 transition shadow-lg mt-4"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          {/* ✅ EXTRA LINKS */}
          <div className="mt-5 flex flex-col gap-2 text-center text-sm">
            <Link to="/forgot-password" className="text-teal-600 hover:underline">
              Forgot your password?
            </Link>

            <p className="text-gray-500">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-teal-600 font-semibold hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
