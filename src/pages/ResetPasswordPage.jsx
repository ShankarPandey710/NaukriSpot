import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");
    try {
      const res = await api.post(`/auth/reset-password/${token}`, {
        password,
      });
      setMsg(res.data.message);
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setErr(error.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Reset Password
        </h2>

        {msg && <p className="text-green-600 mb-3 text-center">{msg}</p>}
        {err && <p className="text-red-500 mb-3 text-center">{err}</p>}

        <form onSubmit={submit} className="space-y-4">
          <input
            className="w-full p-3 border rounded"
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
