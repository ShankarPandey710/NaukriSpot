// import { useState } from "react";
// import api from "../api/axios";

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");
//   const [err, setErr] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setMsg("");
//     setErr("");
//     try {
//       const res = await api.post("/auth/forgot-password", { email });
//       setMsg(res.data.message);
//     } catch (error) {
//       setErr(error.response?.data?.message || "Error sending reset email");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
//           Forgot Password
//         </h2>

//         {msg && <p className="text-green-600 mb-3 text-center">{msg}</p>}
//         {err && <p className="text-red-500 mb-3 text-center">{err}</p>}

//         <form onSubmit={submit} className="space-y-4">
//           <input
//             className="w-full p-3 border rounded"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
//             Send Reset Link
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordPage;


// import { useState } from "react";
// import api from "../api/axios";
// import { Link } from "react-router-dom";

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState("");
//   const [msg, setMsg] = useState("");
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setMsg("");
//     setErr("");

//     if (!email) {
//       setErr("Please enter your email address");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await api.post("/auth/forgot-password", { email });
//       setMsg(res.data.message);
//     } catch (error) {
//       setErr(error.response?.data?.message || "Error sending reset email");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">

//       <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//         {/* ✅ LEFT BRAND PANEL */}
//         <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-teal-600 to-emerald-500 text-white p-10">
//           <h2 className="text-4xl font-extrabold mb-4">
//             Forgot Your Password?
//           </h2>
//           <p className="text-center text-lg opacity-90">
//             No worries! We’ll help you recover your account securely.
//           </p>

//           <div className="mt-8 bg-white/20 p-6 rounded-xl text-center">
//             <p className="font-semibold">🔒 Secure Password Reset</p>
//             <p className="text-sm mt-2">
//               Reset link will be sent to your email.
//             </p>
//           </div>
//         </div>

//         {/* ✅ RIGHT FORM PANEL */}
//         <div className="p-10">

//           <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
//             Reset Password
//           </h2>
//           <p className="text-gray-500 mb-6">
//             Enter your registered email to receive reset instructions.
//           </p>

//           {msg && (
//             <div className="bg-green-50 text-green-600 border border-green-200 p-3 rounded-lg mb-6 text-center font-semibold">
//               {msg}
//             </div>
//           )}

//           {err && (
//             <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg mb-6 text-center font-semibold">
//               {err}
//             </div>
//           )}

//           <form onSubmit={submit} className="space-y-5">

//             <input
//               type="email"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-emerald-700 disabled:opacity-60 transition shadow-lg"
//             >
//               {loading ? "Sending Reset Link..." : "Send Reset Link"}
//             </button>

//           </form>

//           {/* ✅ EXTRA LINKS */}
//           <div className="mt-6 text-center text-sm">
//             <Link to="/login" className="text-teal-600 font-semibold hover:underline">
//               ← Back to Login
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordPage;

import { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");

    if (!email) {
      setErr("Please enter your registered email");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/auth/forgot-password", { email });
      setMsg(res.data.message);
    } catch (error) {
      setErr(error.response?.data?.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        {/* ✅ ICON */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-4 rounded-full text-white text-3xl shadow-lg">
            🔐
          </div>
        </div>

        {/* ✅ HEADER */}
        <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-2">
          Forgot Password?
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Enter your email and we’ll send you a password reset link.
        </p>

        {/* ✅ SUCCESS & ERROR */}
        {msg && (
          <div className="bg-green-50 text-green-600 border border-green-200 p-3 rounded-lg mb-5 text-center font-semibold">
            {msg}
          </div>
        )}

        {err && (
          <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg mb-5 text-center font-semibold">
            {err}
          </div>
        )}

        {/* ✅ FORM */}
        <form onSubmit={submit} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-emerald-700 disabled:opacity-60 transition shadow-lg"
          >
            {loading ? "Sending Reset Link..." : "Send Reset Link"}
          </button>

        </form>

        {/* ✅ FOOTER LINKS */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-500">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="text-teal-600 font-semibold hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>

        {/* ✅ TRUST NOTE */}
        <div className="mt-6 text-center text-xs text-gray-400">
          Secure password recovery powered by NaukriSpot
        </div>

      </div>
    </div>
  );
};

export default ForgotPasswordPage;
