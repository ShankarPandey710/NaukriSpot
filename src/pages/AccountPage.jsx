// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const AccountPage = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("");
//   const [image, setImage] = useState(null);

//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   useEffect(() => {
//     api.get("/profile/me").then((res) => {
//       setUser(res.data);
//       setName(res.data.name);
//     });
//   }, []);

//   const updateProfile = async () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     if (image) formData.append("profileImage", image);

//     await api.put("/profile/update", formData);
//     alert("Profile Updated");
//     window.location.reload();
//   };

//   const changePassword = async () => {
//     await api.put("/profile/change-password", {
//       oldPassword,
//       newPassword,
//     });

//     alert("Password Changed");
//     setOldPassword("");
//     setNewPassword("");
//   };

//   const deleteAccount = async () => {
//     if (!window.confirm("Delete your account permanently?")) return;

//     await api.delete("/profile/delete");
//     logout();
//     navigate("/");
//   };

//   if (!user) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">

//         <div className="flex flex-col items-center mb-6">
//           <img
//             src={`http://localhost:5000/${user.profileImage}`}
//             className="w-28 h-28 rounded-full object-cover border"
//           />
//           <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
//           <p>{user.email}</p>
//           <span className="text-indigo-600 text-sm">{user.role}</span>
//         </div>

//         <input
//           className="w-full p-2 border mb-3 rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />

//         <button
//           onClick={updateProfile}
//           className="w-full mt-3 bg-indigo-600 text-white py-2 rounded"
//         >
//           Update Profile
//         </button>

//         <input
//           type="password"
//           placeholder="Old Password"
//           className="w-full p-2 border mt-4 rounded"
//           value={oldPassword}
//           onChange={(e) => setOldPassword(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="New Password"
//           className="w-full p-2 border mt-2 rounded"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//         />

//         <button
//           onClick={changePassword}
//           className="w-full mt-3 bg-green-600 text-white py-2 rounded"
//         >
//           Change Password
//         </button>

//         <button
//           onClick={deleteAccount}
//           className="w-full mt-4 bg-red-600 text-white py-2 rounded"
//         >
//           Delete Account
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AccountPage;


// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const AccountPage = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("");
//   const [image, setImage] = useState(null);

//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   useEffect(() => {
//     api.get("/profile/me").then((res) => {
//       setUser(res.data);
//       setName(res.data.name);
//     });
//   }, []);

//   const updateProfile = async () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     if (image) formData.append("profileImage", image);

//     try {
//       await api.put("/profile/update", formData);
//       alert("✅ Profile Updated Successfully");
//       window.location.reload();
//     } catch (err) {
//       alert("Failed to update profile");
//     }
//   };

//   const changePassword = async () => {
//     try {
//       await api.put("/profile/change-password", {
//         oldPassword,
//         newPassword,
//       });

//       alert("✅ Password Changed Successfully");
//       setOldPassword("");
//       setNewPassword("");
//     } catch (err) {
//       alert("Failed to change password");
//     }
//   };

//   const deleteAccount = async () => {
//     if (!window.confirm("⚠️ Delete your account permanently?")) return;

//     try {
//       await api.delete("/profile/delete");
//       logout();
//       navigate("/");
//     } catch (err) {
//       alert("Failed to delete account");
//     }
//   };

//   if (!user)
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         Loading profile...
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 flex items-center justify-center px-4 py-12">

//       <div className="bg-white/95 backdrop-blur-xl w-full max-w-2xl rounded-2xl shadow-2xl p-10 border border-white/20">

//         {/* ✅ Profile Header */}
//         <div className="flex flex-col items-center mb-10">
//           <div className="relative">
//             <img
//               src={`http://localhost:5000/${user.profileImage || "uploads/default.png"}`}
//               className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow"
//               alt="Profile"
//             />
//             <label className="absolute bottom-1 right-1 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700">
//               ✎
//               <input
//                 type="file"
//                 className="hidden"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//             </label>
//           </div>

//           <h2 className="text-3xl font-bold mt-4 text-slate-800">
//             {user.name}
//           </h2>
//           <p className="text-gray-500">{user.email}</p>

//           <span className="mt-1 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-semibold capitalize">
//             {user.role}
//           </span>
//         </div>

//         {/* ✅ PROFILE UPDATE */}
//         <div className="mb-8">
//           <h3 className="text-xl font-bold text-slate-700 mb-4">
//             Edit Profile
//           </h3>

//           <input
//             className="w-full p-3 border rounded mb-4"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Full Name"
//           />

//           <button
//             onClick={updateProfile}
//             className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-blue-700 transition"
//           >
//             Update Profile
//           </button>
//         </div>

//         {/* ✅ CHANGE PASSWORD */}
//         <div className="mb-8">
//           <h3 className="text-xl font-bold text-slate-700 mb-4">
//             Change Password
//           </h3>

//           <input
//             type="password"
//             placeholder="Old Password"
//             className="w-full p-3 border mb-3 rounded"
//             value={oldPassword}
//             onChange={(e) => setOldPassword(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="New Password"
//             className="w-full p-3 border mb-4 rounded"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />

//           <button
//             onClick={changePassword}
//             className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
//           >
//             Change Password
//           </button>
//         </div>

//         {/* ✅ DANGER ZONE */}
//         <div className="border-t pt-6">
//           <h3 className="text-lg font-bold text-red-600 mb-4">
//             Danger Zone
//           </h3>

//           <button
//             onClick={deleteAccount}
//             className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition"
//           >
//             Delete Account Permanently
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AccountPage;

import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    api.get("/profile/me").then((res) => {
      setUser(res.data);
      setName(res.data.name);
      setPreview(
        res.data.profileImage
          ? `http://localhost:5000/${res.data.profileImage}`
          : "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
      );
    });
  }, []);

  const updateProfile = async () => {
    const formData = new FormData();
    formData.append("name", name);
    if (image) formData.append("profileImage", image);

    try {
      await api.put("/profile/update", formData);
      alert("✅ Profile Updated Successfully");
      window.location.reload();
    } catch (err) {
      alert("❌ Failed to update profile");
    }
  };

  const changePassword = async () => {
    try {
      await api.put("/profile/change-password", {
        oldPassword,
        newPassword,
      });

      alert("✅ Password Changed Successfully");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      alert("❌ Failed to change password");
    }
  };

  const deleteAccount = async () => {
    if (!window.confirm("⚠️ Delete your account permanently?")) return;

    try {
      await api.delete("/profile/delete");
      logout();
      navigate("/");
    } catch (err) {
      alert("❌ Failed to delete account");
    }
  };

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading profile...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 flex items-center justify-center px-4 py-12">
      <div className="bg-white/95 backdrop-blur-xl w-full max-w-3xl rounded-2xl shadow-2xl p-10">

        {/* ✅ HEADER */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            <img
              src={preview}
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
              alt="Profile"
            />

            <label className="absolute bottom-1 right-1 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition">
              ✎
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImage(file);
                  if (file) setPreview(URL.createObjectURL(file));
                }}
              />
            </label>
          </div>

          <h2 className="text-3xl font-bold mt-4 text-slate-800">
            {user.name}
          </h2>
          <p className="text-gray-500">{user.email}</p>

          <span className="mt-2 px-4 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 font-semibold uppercase">
            {user.role}
          </span>
        </div>

        {/* ✅ PROFILE CARD */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow">
          <h3 className="text-lg font-bold text-slate-700 mb-4">
            Profile Information
          </h3>

          <input
            className="w-full p-3 border rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />

          <button
            onClick={updateProfile}
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-blue-700 transition"
          >
            Save Changes
          </button>
        </div>

        {/* ✅ PASSWORD CARD */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow">
          <h3 className="text-lg font-bold text-slate-700 mb-4">
            Security Settings
          </h3>

          <input
            type="password"
            placeholder="Old Password"
            className="w-full p-3 border mb-3 rounded"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border mb-4 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            onClick={changePassword}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
          >
            Update Password
          </button>
        </div>

        {/* ✅ DANGER ZONE */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-600 mb-4">
            Danger Zone
          </h3>

          <button
            onClick={deleteAccount}
            className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition"
          >
            Delete Account Permanently
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccountPage;
