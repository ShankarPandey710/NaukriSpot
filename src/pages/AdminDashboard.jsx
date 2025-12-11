// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const [uRes, jRes] = await Promise.all([
//         api.get("/admin/users"),
//         api.get("/jobs")
//       ]);
//       setUsers(uRes.data);
//       setJobs(jRes.data);
//     };
//     fetchData();
//   }, []);

//   const deleteJob = async (id) => {
//     await api.delete(`/admin/job/${id}`);
//     setJobs((prev) => prev.filter((j) => j._id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <h2 className="text-4xl font-bold text-indigo-700 mb-10 text-center">
//           Admin Dashboard
//         </h2>

//         {/* USERS SECTION */}
//         <div className="bg-white rounded-xl shadow p-6 mb-10">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-5">
//             All Users
//           </h3>

//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-indigo-600 text-white">
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((u) => (
//                   <tr
//                     key={u._id}
//                     className="border-b hover:bg-gray-50 transition"
//                   >
//                     <td className="p-3">{u.name}</td>
//                     <td className="p-3">{u.email}</td>
//                     <td className="p-3 capitalize">{u.role}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {users.length === 0 && (
//               <p className="text-center text-gray-500 mt-4">
//                 No users found.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* JOBS SECTION */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-5">
//             All Jobs
//           </h3>

//           <div className="grid md:grid-cols-2 gap-6">
//             {jobs.map((job) => (
//               <div
//                 key={job._id}
//                 className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-gray-50"
//               >
//                 <h4 className="text-xl font-bold text-indigo-700 mb-2">
//                   {job.title}
//                 </h4>
//                 <p className="text-gray-600 mb-4">
//                   Location: {job.location || "Not specified"}
//                 </p>

//                 <button
//                   onClick={() => deleteJob(job._id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//                 >
//                   Delete Job
//                 </button>
//               </div>
//             ))}
//           </div>

//           {jobs.length === 0 && (
//             <p className="text-center text-gray-500 mt-6">
//               No jobs available.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [jobs, setJobs] = useState([]);
//   const [pendingJobs, setPendingJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchAllData = async () => {
//     try {
//       const [userRes, jobRes, pendingRes] = await Promise.all([
//         api.get("/admin/users"),
//         api.get("/admin/jobs"),
//         api.get("/admin/jobs/pending"),
//       ]);

//       setUsers(userRes.data);
//       setJobs(jobRes.data);
//       setPendingJobs(pendingRes.data);
//     } catch (err) {
//       console.error("Admin fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   /* ------------------ USER ACTIONS ------------------ */

//   const deleteUser = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     await api.delete(`/admin/user/${id}`);
//     setUsers((prev) => prev.filter((u) => u._id !== id));
//   };

//   /* ------------------ JOB ACTIONS ------------------ */

//   const approveJob = async (id) => {
//     const res = await api.put(`/admin/job/approve/${id}`);

//     // remove from pending
//     setPendingJobs((prev) => prev.filter((j) => j._id !== id));

//     // add to all jobs as approved
//     setJobs((prev) => [res.data.job, ...prev]);
//   };

//   const deleteJob = async (id) => {
//     if (!window.confirm("Delete this job?")) return;

//     await api.delete(`/admin/job/${id}`);

//     setJobs((prev) => prev.filter((j) => j._id !== id));
//     setPendingJobs((prev) => prev.filter((j) => j._id !== id));
//   };

//   if (loading) {
//     return <p className="text-center mt-10 text-xl">Loading admin data...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto space-y-12">

//         {/* HEADER */}
//         <h2 className="text-4xl font-bold text-center text-indigo-700">
//           Admin Control Panel
//         </h2>

//         {/* ================= USERS ================= */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="text-2xl font-bold mb-6 text-gray-800">All Users</h3>

//           <div className="overflow-x-auto">
//             <table className="w-full border">
//               <thead>
//                 <tr className="bg-indigo-600 text-white">
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Email</th>
//                   <th className="p-3">Role</th>
//                   <th className="p-3">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((u) => (
//                   <tr key={u._id} className="border-b text-center">
//                     <td className="p-3">{u.name}</td>
//                     <td className="p-3">{u.email}</td>
//                     <td className="p-3 capitalize">{u.role}</td>
//                     <td className="p-3">
//                       {u.role !== "admin" && (
//                         <button
//                           onClick={() => deleteUser(u._id)}
//                           className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                         >
//                           Delete
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* ================= PENDING JOBS ================= */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="text-2xl font-bold mb-6 text-yellow-600">
//             Pending Jobs for Approval
//           </h3>

//           {pendingJobs.length === 0 && (
//             <p className="text-gray-500">No pending jobs.</p>
//           )}

//           <div className="grid md:grid-cols-2 gap-6">
//             {pendingJobs.map((job) => (
//               <div
//                 key={job._id}
//                 className="border p-5 rounded-lg bg-yellow-50"
//               >
//                 <h4 className="text-xl font-bold text-indigo-700">
//                   {job.title}
//                 </h4>
//                 <p className="text-gray-600">Location: {job.location}</p>
//                 <p className="text-gray-600">
//                   Recruiter: {job.createdBy?.name}
//                 </p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => approveJob(job._id)}
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Approve
//                   </button>

//                   <button
//                     onClick={() => deleteJob(job._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= ALL JOBS ================= */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="text-2xl font-bold mb-6 text-gray-800">
//             All Jobs (Approved + Pending)
//           </h3>

//           <div className="grid md:grid-cols-2 gap-6">
//             {jobs.map((job) => (
//               <div
//                 key={job._id}
//                 className={`border p-5 rounded-lg ${
//                   job.isApproved ? "bg-green-50" : "bg-red-50"
//                 }`}
//               >
//                 <h4 className="text-xl font-bold text-indigo-700 mb-1">
//                   {job.title}
//                 </h4>

//                 <p className="text-gray-600">Location: {job.location}</p>
//                 <p
//                   className={`mt-1 font-semibold ${
//                     job.isApproved
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   Status: {job.isApproved ? "Approved" : "Pending"}
//                 </p>

//                 <button
//                   onClick={() => deleteJob(job._id)}
//                   className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 >
//                   Delete Job
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const [uRes, jRes] = await Promise.all([
//         api.get("/admin/users"),
//         api.get("/admin/jobs"),
//       ]);

//       setUsers(uRes.data);
//       setJobs(jRes.data);
//     };

//     fetchData();
//   }, []);

//   const approveJob = async (id) => {
//     await api.put(`/admin/job/approve/${id}`);
//     setJobs((prev) =>
//       prev.map((job) =>
//         job._id === id ? { ...job, status: "approved" } : job
//       )
//     );
//   };

//   const deleteJob = async (id) => {
//     await api.delete(`/admin/job/${id}`);
//     setJobs((prev) => prev.filter((job) => job._id !== id));
//   };

//   const deleteUser = async (id) => {
//     await api.delete(`/admin/user/${id}`);
//     setUsers((prev) => prev.filter((u) => u._id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-6xl mx-auto">

//         <h2 className="text-4xl font-bold text-indigo-700 mb-10 text-center">
//           Admin Dashboard
//         </h2>

//         {/* ✅ USERS SECTION */}
//         <div className="bg-white rounded-xl shadow p-6 mb-10">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-5">
//             All Users
//           </h3>

//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-indigo-600 text-white">
//                   <th className="p-3 text-left">Name</th>
//                   <th className="p-3 text-left">Email</th>
//                   <th className="p-3 text-left">Role</th>
//                   <th className="p-3 text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((u) => (
//                   <tr
//                     key={u._id}
//                     className="border-b hover:bg-gray-50 transition"
//                   >
//                     <td className="p-3">{u.name}</td>
//                     <td className="p-3">{u.email}</td>
//                     <td className="p-3 capitalize">{u.role}</td>
//                     <td className="p-3">
//                       <button
//                         onClick={() => deleteUser(u._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {users.length === 0 && (
//               <p className="text-center text-gray-500 mt-4">
//                 No users found.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* ✅ JOBS SECTION */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-5">
//             Job Approvals
//           </h3>

//           <div className="grid md:grid-cols-2 gap-6">
//             {jobs.map((job) => (
//               <div
//                 key={job._id}
//                 className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-gray-50"
//               >
//                 <h4 className="text-xl font-bold text-indigo-700 mb-1">
//                   {job.title}
//                 </h4>

//                 <p className="text-gray-600">
//                   Location: {job.location}
//                 </p>

//                 <p className="text-gray-600">
//                   Salary: ₹ {job.salary}
//                 </p>

//                 <p className="text-sm text-gray-500 mt-1">
//                   Recruiter: {job.createdBy?.name || "Unknown"}
//                 </p>

//                 <span
//                   className={`inline-block mt-2 mb-3 px-3 py-1 text-sm rounded-full ${
//                     job.status === "approved"
//                       ? "bg-green-200 text-green-700"
//                       : "bg-yellow-200 text-yellow-700"
//                   }`}
//                 >
//                   {job.status?.toUpperCase()}
//                 </span>

//                 {job.status === "pending" && (
//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => approveJob(job._id)}
//                       className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
//                     >
//                       Approve
//                     </button>

//                     <button
//                       onClick={() => deleteJob(job._id)}
//                       className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {jobs.length === 0 && (
//             <p className="text-center text-gray-500 mt-6">
//               No jobs available.
//             </p>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [uRes, jRes] = await Promise.all([
        api.get("/admin/users"),
        api.get("/admin/jobs"),
      ]);
      setUsers(uRes.data);
      setJobs(jRes.data);
    };
    fetchData();
  }, []);

  // ✅ COUNTS
  const totalStudents = users.filter((u) => u.role === "student").length;
  const totalRecruiters = users.filter((u) => u.role === "recruiter").length;
  const totalUsers = users.length;

  const approvedJobs = jobs.filter((j) => j.status === "approved").length;
  const pendingJobs = jobs.filter((j) => j.status === "pending").length;
  const totalJobs = jobs.length;

  // ✅ CHART DATA
  const chartData = useMemo(
    () => [
      {
        name: "Users",
        Students: totalStudents,
        Recruiters: totalRecruiters,
      },
      {
        name: "Jobs",
        Approved: approvedJobs,
        Pending: pendingJobs,
      },
    ],
    [totalStudents, totalRecruiters, approvedJobs, pendingJobs]
  );

  const approveJob = async (id) => {
    await api.put(`/admin/job/approve/${id}`);
    setJobs((prev) =>
      prev.map((job) =>
        job._id === id ? { ...job, status: "approved" } : job
      )
    );
  };

  const deleteJob = async (id) => {
    await api.delete(`/admin/job/${id}`);
    setJobs((prev) => prev.filter((job) => job._id !== id));
  };

  const deleteUser = async (id) => {
    await api.delete(`/admin/user/${id}`);
    setUsers((prev) => prev.filter((u) => u._id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-slate-800 mb-10 text-center">
          Admin Control Panel
        </h2>

        {/* ✅ SUMMARY CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Total Users</h3>
            <p className="text-3xl font-bold text-emerald-600">{totalUsers}</p>
            <p className="text-sm text-gray-500 mt-1">
              Students + Recruiters
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Students</h3>
            <p className="text-3xl font-bold text-indigo-600">{totalStudents}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Recruiters</h3>
            <p className="text-3xl font-bold text-purple-600">{totalRecruiters}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Total Jobs</h3>
            <p className="text-3xl font-bold text-sky-600">{totalJobs}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Approved Jobs</h3>
            <p className="text-3xl font-bold text-green-600">{approvedJobs}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Pending Jobs</h3>
            <p className="text-3xl font-bold text-yellow-500">{pendingJobs}</p>
          </div>

        </div>

        {/* ✅ GRAPH SECTION */}
        <div className="bg-white p-6 rounded-xl shadow mb-12">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            Platform Overview
          </h3>

          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Students" />
                <Bar dataKey="Recruiters" />
                <Bar dataKey="Approved" />
                <Bar dataKey="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ✅ USERS TABLE */}
        <div className="bg-white rounded-xl shadow p-6 mb-10">
          <h3 className="text-2xl font-semibold text-slate-800 mb-5">
            All Users
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{u.name}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3 capitalize">{u.role}</td>
                    <td className="p-3">
                      <button
                        onClick={() => deleteUser(u._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ JOB APPROVALS */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold text-slate-800 mb-5">
            Job Approvals
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="border rounded-lg p-5 shadow-sm bg-gray-50"
              >
                <h4 className="text-xl font-bold text-indigo-700 mb-1">
                  {job.title}
                </h4>

                <p>Location: {job.location}</p>
                <p>Salary: ₹ {job.salary}</p>
                <p className="text-sm text-gray-500">
                  Recruiter: {job.createdBy?.name || "Unknown"}
                </p>

                <span
                  className={`inline-block mt-2 mb-3 px-3 py-1 text-sm rounded-full ${
                    job.status === "approved"
                      ? "bg-green-200 text-green-700"
                      : "bg-yellow-200 text-yellow-700"
                  }`}
                >
                  {job.status.toUpperCase()}
                </span>

                {job.status === "pending" && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => approveJob(job._id)}
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => deleteJob(job._id)}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
