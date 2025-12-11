// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const RecruiterDashboard = () => {
//   const [jobs, setJobs] = useState([]);
//   const [newJob, setNewJob] = useState({
//     title: "", description: "", salary: "", location: ""
//   });

//   const onChange = (e) =>
//     setNewJob({ ...newJob, [e.target.name]: e.target.value });

//   const createJob = async (e) => {
//     e.preventDefault();
//     const res = await api.post("/jobs/create", newJob);
//     setJobs([res.data, ...jobs]);
//     setNewJob({ title: "", description: "", salary: "", location: "" });
//   };

//   useEffect(() => {
//     api.get("/jobs/recruiter/my").then((res) => setJobs(res.data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <div className="max-w-5xl mx-auto">

//         <h2 className="text-3xl font-bold text-indigo-700 mb-6">
//           Recruiter Dashboard
//         </h2>

//         <form
//           onSubmit={createJob}
//           className="bg-white p-6 rounded shadow mb-10 space-y-3"
//         >
//           <input className="w-full p-2 border rounded" name="title" placeholder="Job Title" onChange={onChange} />
//           <textarea className="w-full p-2 border rounded" name="description" placeholder="Job Description" onChange={onChange}></textarea>
//           <input className="w-full p-2 border rounded" name="salary" placeholder="Salary" onChange={onChange} />
//           <input className="w-full p-2 border rounded" name="location" placeholder="Location" onChange={onChange} />

//           <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700">
//             Create Job
//           </button>
//         </form>

//         <div className="grid md:grid-cols-2 gap-6">
//           {jobs.map((job) => (
//             <div key={job._id} className="bg-white p-5 rounded shadow">
//               <h3 className="font-bold text-indigo-700">{job.title}</h3>
//               <p>{job.location}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default RecruiterDashboard;


// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const RecruiterDashboard = () => {
//   const [jobs, setJobs] = useState([]);
//   const [newJob, setNewJob] = useState({
//     title: "",
//     description: "",
//     salary: "",
//     location: "",
//   });

//   const onChange = (e) =>
//     setNewJob({ ...newJob, [e.target.name]: e.target.value });

//   const createJob = async (e) => {
//     e.preventDefault();

//     // ✅ Frontend Validation
//     if (!newJob.title.trim()) {
//       alert("Job title is required");
//       return;
//     }

//     if (!newJob.description.trim()) {
//       alert("Job description is required");
//       return;
//     }

//     if (!newJob.salary.trim()) {
//       alert("Salary is required");
//       return;
//     }

//     if (!newJob.location.trim()) {
//       alert("Location is required");
//       return;
//     }

//     try {
//       const res = await api.post("/jobs/create", newJob);

//       setJobs([res.data, ...jobs]);
//       setNewJob({
//         title: "",
//         description: "",
//         salary: "",
//         location: "",
//       });
//     } catch (err) {
//       console.error("CREATE JOB ERROR:", err);

//       if (err.response) {
//         alert(err.response.data.message);
//       } else {
//         alert("Server error while creating job");
//       }
//     }
//   };

//   useEffect(() => {
//     api.get("/jobs/recruiter/my").then((res) => setJobs(res.data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-6">
//           Recruiter Dashboard
//         </h2>

//         {/* ✅ CREATE JOB FORM */}
//         <form
//           onSubmit={createJob}
//           className="bg-white p-6 rounded shadow mb-10 space-y-3"
//         >
//           <input
//             className="w-full p-2 border rounded"
//             name="title"
//             placeholder="Job Title"
//             value={newJob.title}
//             onChange={onChange}
//           />

//           <textarea
//             className="w-full p-2 border rounded"
//             name="description"
//             placeholder="Job Description"
//             value={newJob.description}
//             onChange={onChange}
//           ></textarea>

//           <input
//             className="w-full p-2 border rounded"
//             name="salary"
//             placeholder="Salary"
//             value={newJob.salary}
//             onChange={onChange}
//           />

//           <input
//             className="w-full p-2 border rounded"
//             name="location"
//             placeholder="Location"
//             value={newJob.location}
//             onChange={onChange}
//           />

//           <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700">
//             Create Job
//           </button>
//         </form>

//         {/* ✅ JOB LIST */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {jobs.map((job) => (
//             <div key={job._id} className="bg-white p-5 rounded shadow">
//               <h3 className="font-bold text-indigo-700">{job.title}</h3>
//               <p className="text-gray-700">{job.location}</p>
//               <p className="text-gray-600">₹ {job.salary}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecruiterDashboard;


// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const RecruiterDashboard = () => {
//   const [jobs, setJobs] = useState([]);
//   const [newJob, setNewJob] = useState({
//     title: "",
//     description: "",
//     salary: "",
//     location: "",
//   });

//   const onChange = (e) =>
//     setNewJob({ ...newJob, [e.target.name]: e.target.value });

//   const createJob = async (e) => {
//     e.preventDefault();

//     // ✅ Frontend Validation
//     if (!newJob.title.trim()) return alert("Job title is required");
//     if (!newJob.description.trim()) return alert("Job description is required");
//     if (!newJob.salary.trim()) return alert("Salary is required");
//     if (!newJob.location.trim()) return alert("Location is required");

//     try {
//       const res = await api.post("/jobs/create", newJob);

//       setJobs([res.data.job || res.data, ...jobs]);
//       setNewJob({
//         title: "",
//         description: "",
//         salary: "",
//         location: "",
//       });

//       alert("Job sent for admin approval");
//     } catch (err) {
//       console.error("CREATE JOB ERROR:", err);
//       alert(err.response?.data?.message || "Failed to create job");
//     }
//   };

//   useEffect(() => {
//     api.get("/jobs/recruiter/my").then((res) => setJobs(res.data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <div className="max-w-5xl mx-auto">

//         <h2 className="text-3xl font-bold text-indigo-700 mb-6">
//           Recruiter Dashboard
//         </h2>

//         {/* ✅ CREATE JOB FORM */}
//         <form
//           onSubmit={createJob}
//           className="bg-white p-6 rounded shadow mb-10 space-y-3"
//         >
//           <input
//             className="w-full p-2 border rounded"
//             name="title"
//             placeholder="Job Title"
//             value={newJob.title}
//             onChange={onChange}
//           />

//           <textarea
//             className="w-full p-2 border rounded"
//             name="description"
//             placeholder="Job Description"
//             value={newJob.description}
//             onChange={onChange}
//           ></textarea>

//           <input
//             className="w-full p-2 border rounded"
//             name="salary"
//             placeholder="Salary"
//             value={newJob.salary}
//             onChange={onChange}
//           />

//           <input
//             className="w-full p-2 border rounded"
//             name="location"
//             placeholder="Location"
//             value={newJob.location}
//             onChange={onChange}
//           />

//           <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700">
//             Create Job
//           </button>
//         </form>

//         {/* ✅ JOB LIST WITH STATUS */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {jobs.map((job) => (
//             <div key={job._id} className="bg-white p-5 rounded shadow">
//               <h3 className="font-bold text-indigo-700">{job.title}</h3>
//               <p>{job.location}</p>
//               <p>₹ {job.salary}</p>

//               <span
//                 className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
//                   job.status === "approved"
//                     ? "bg-green-200 text-green-700"
//                     : "bg-yellow-200 text-yellow-700"
//                 }`}
//               >
//                 {job.status?.toUpperCase() || "PENDING"}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecruiterDashboard;


// import { useEffect, useMemo, useState } from "react";
// import api from "../api/axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const RecruiterDashboard = () => {
//   const [jobs, setJobs] = useState([]);
//   const [users, setUsers] = useState([]);

//   const [newJob, setNewJob] = useState({
//     title: "",
//     description: "",
//     salary: "",
//     location: "",
//   });

//   const onChange = (e) =>
//     setNewJob({ ...newJob, [e.target.name]: e.target.value });

//   const createJob = async (e) => {
//     e.preventDefault();

//     // ✅ Frontend Validation
//     if (!newJob.title.trim()) return alert("Job title is required");
//     if (!newJob.description.trim()) return alert("Job description is required");
//     if (!newJob.salary.trim()) return alert("Salary is required");
//     if (!newJob.location.trim()) return alert("Location is required");

//     try {
//       const res = await api.post("/jobs/create", newJob);

//       setJobs([res.data.job || res.data, ...jobs]);
//       setNewJob({
//         title: "",
//         description: "",
//         salary: "",
//         location: "",
//       });

//       alert("Job sent for admin approval");
//     } catch (err) {
//       console.error("CREATE JOB ERROR:", err);
//       alert(err.response?.data?.message || "Failed to create job");
//     }
//   };

//   useEffect(() => {
//     api.get("/jobs/recruiter/my").then((res) => setJobs(res.data));
//     api.get("/admin/users").then((res) => setUsers(res.data)); // total users
//   }, []);

//   // ✅ COUNTS
//   const totalUsers = users.length;
//   const totalJobs = jobs.length;
//   const approvedJobs = jobs.filter((j) => j.status === "approved").length;
//   const pendingJobs = jobs.filter((j) => j.status === "pending").length;

//   // ✅ GRAPH DATA
//   const chartData = useMemo(
//     () => [
//       { name: "Jobs", Approved: approvedJobs, Pending: pendingJobs },
//     ],
//     [approvedJobs, pendingJobs]
//   );

//   return (
//     <div className="min-h-screen bg-slate-100 p-10">
//       <div className="max-w-6xl mx-auto">

//         <h2 className="text-4xl font-bold text-slate-800 mb-10 text-center">
//           Recruiter Dashboard
//         </h2>

//         {/* ✅ SUMMARY CARDS */}
//         <div className="grid md:grid-cols-4 gap-6 mb-10">
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="text-gray-500 text-sm">Total Users</h3>
//             <p className="text-3xl font-bold text-indigo-600">{totalUsers}</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="text-gray-500 text-sm">Your Jobs</h3>
//             <p className="text-3xl font-bold text-sky-600">{totalJobs}</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="text-gray-500 text-sm">Approved Jobs</h3>
//             <p className="text-3xl font-bold text-green-600">{approvedJobs}</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="text-gray-500 text-sm">Pending Jobs</h3>
//             <p className="text-3xl font-bold text-yellow-500">{pendingJobs}</p>
//           </div>
//         </div>

//         {/* ✅ GRAPH SECTION */}
//         <div className="bg-white p-6 rounded-xl shadow mb-12">
//           <h3 className="text-xl font-bold text-slate-800 mb-4">
//             Job Status Overview
//           </h3>

//           <div className="w-full h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={chartData}>
//                 <XAxis dataKey="name" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="Approved" />
//                 <Bar dataKey="Pending" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* ✅ CREATE JOB FORM */}
//         <div className="bg-white p-6 rounded-xl shadow mb-10">
//           <h3 className="text-2xl font-semibold text-slate-800 mb-4">
//             Create New Job
//           </h3>

//           <form onSubmit={createJob} className="space-y-4">
//             <input
//               className="w-full p-2 border rounded"
//               name="title"
//               placeholder="Job Title"
//               value={newJob.title}
//               onChange={onChange}
//             />

//             <textarea
//               className="w-full p-2 border rounded"
//               name="description"
//               placeholder="Job Description"
//               value={newJob.description}
//               onChange={onChange}
//             ></textarea>

//             <input
//               className="w-full p-2 border rounded"
//               name="salary"
//               placeholder="Salary"
//               value={newJob.salary}
//               onChange={onChange}
//             />

//             <input
//               className="w-full p-2 border rounded"
//               name="location"
//               placeholder="Location"
//               value={newJob.location}
//               onChange={onChange}
//             />

//             <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
//               Create Job
//             </button>
//           </form>
//         </div>

//         {/* ✅ JOB LIST WITH STATUS */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {jobs.map((job) => (
//             <div key={job._id} className="bg-white p-5 rounded shadow">
//               <h3 className="font-bold text-indigo-700">{job.title}</h3>
//               <p>{job.location}</p>
//               <p>₹ {job.salary}</p>

//               <span
//                 className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
//                   job.status === "approved"
//                     ? "bg-green-200 text-green-700"
//                     : "bg-yellow-200 text-yellow-700"
//                 }`}
//               >
//                 {job.status?.toUpperCase() || "PENDING"}
//               </span>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default RecruiterDashboard;


// import { useEffect, useMemo, useState } from "react";
// import api from "../api/axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const RecruiterDashboard = () => {
//   const [jobs, setJobs] = useState([]);
//   const [users, setUsers] = useState([]);

//   const [newJob, setNewJob] = useState({
//     title: "",
//     description: "",
//     salary: "",
//     location: "",
//     skills: "",
//   });

//   const onChange = (e) =>
//     setNewJob({ ...newJob, [e.target.name]: e.target.value });

//   const createJob = async (e) => {
//     e.preventDefault();

//     if (!newJob.title.trim()) return alert("Job title is required");
//     if (!newJob.description.trim()) return alert("Job description is required");
//     if (!newJob.salary.trim()) return alert("Salary is required");
//     if (!newJob.location.trim()) return alert("Location is required");
//     if (!newJob.skills.trim()) return alert("Required skills are required");

//     try {
//       const res = await api.post("/jobs/create", {
//         ...newJob,
//         skills: newJob.skills.split(","),
//       });

//       setJobs([res.data.job || res.data, ...jobs]);
//       setNewJob({
//         title: "",
//         description: "",
//         salary: "",
//         location: "",
//         skills: "",
//       });

//       alert("✅ Job submitted for admin approval");
//     } catch (err) {
//       console.error("CREATE JOB ERROR:", err);
//       alert(err.response?.data?.message || "Failed to create job");
//     }
//   };

//   useEffect(() => {
//     api.get("/jobs/recruiter/my").then((res) => setJobs(res.data));
//     api.get("/admin/users").then((res) => setUsers(res.data));
//   }, []);

//   const totalUsers = users.length;
//   const totalJobs = jobs.length;
//   const approvedJobs = jobs.filter((j) => j.status === "approved").length;
//   const pendingJobs = jobs.filter((j) => j.status === "pending").length;

//   const chartData = useMemo(
//     () => [
//       { name: "Status", Approved: approvedJobs, Pending: pendingJobs },
//     ],
//     [approvedJobs, pendingJobs]
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 p-10">
//       <div className="max-w-7xl mx-auto">

//         <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
//           Recruiter Dashboard
//         </h2>

//         {/* ✅ STAT ROW */}
//         <div className="grid md:grid-cols-4 gap-6 mb-12">
//           <MiniCard title="Total Users" value={totalUsers} color="text-indigo-600" />
//           <MiniCard title="Your Jobs" value={totalJobs} color="text-sky-600" />
//           <MiniCard title="Approved" value={approvedJobs} color="text-green-600" />
//           <MiniCard title="Pending" value={pendingJobs} color="text-yellow-500" />
//         </div>

//         {/* ✅ CHART + FORM GRID */}
//         <div className="grid md:grid-cols-2 gap-10 mb-12">

//           {/* ✅ CHART */}
//           <div className="bg-white rounded-2xl shadow-md p-8">
//             <h3 className="text-xl font-semibold text-slate-700 mb-6">
//               Job Approval Statistics
//             </h3>

//             <div className="w-full h-72">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={chartData}>
//                   <XAxis dataKey="name" />
//                   <YAxis allowDecimals={false} />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="Approved" />
//                   <Bar dataKey="Pending" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* ✅ CREATE JOB */}
//           <div className="bg-white rounded-2xl shadow-md p-8">
//             <h3 className="text-xl font-semibold text-slate-700 mb-6">
//               Create New Job
//             </h3>

//             <form onSubmit={createJob} className="space-y-4">

//               <input
//                 className="w-full p-3 border rounded-lg"
//                 name="title"
//                 placeholder="Job Title"
//                 value={newJob.title}
//                 onChange={onChange}
//               />

//               <input
//                 className="w-full p-3 border rounded-lg"
//                 name="location"
//                 placeholder="Job Location"
//                 value={newJob.location}
//                 onChange={onChange}
//               />

//               <input
//                 className="w-full p-3 border rounded-lg"
//                 name="salary"
//                 placeholder="Salary"
//                 value={newJob.salary}
//                 onChange={onChange}
//               />

//               <input
//                 className="w-full p-3 border rounded-lg"
//                 name="skills"
//                 placeholder="Required Skills (React, Node, MongoDB...)"
//                 value={newJob.skills}
//                 onChange={onChange}
//               />

//               <textarea
//                 className="w-full p-3 border rounded-lg"
//                 name="description"
//                 rows={4}
//                 placeholder="Job Description"
//                 value={newJob.description}
//                 onChange={onChange}
//               ></textarea>

//               <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
//                 Send for Approval
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* ✅ JOB LIST */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {jobs.map((job) => (
//             <div
//               key={job._id}
//               className="bg-white p-6 rounded-xl shadow border"
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="font-bold text-slate-800">{job.title}</h3>
//                 <span
//                   className={`px-3 py-1 text-xs rounded-full font-bold ${
//                     job.status === "approved"
//                       ? "bg-green-100 text-green-600"
//                       : "bg-yellow-100 text-yellow-600"
//                   }`}
//                 >
//                   {job.status?.toUpperCase() || "PENDING"}
//                 </span>
//               </div>

//               <p className="text-sm text-gray-500">{job.location}</p>
//               <p className="text-green-600 font-semibold mt-1">
//                 ₹ {job.salary}
//               </p>

//               {job.skills && (
//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {job.skills.map((s, i) => (
//                     <span
//                       key={i}
//                       className="bg-indigo-50 text-indigo-600 px-3 py-1 text-xs rounded-full"
//                     >
//                       {s}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// /* ✅ CLEAN MINI CARD */
// const MiniCard = ({ title, value, color }) => (
//   <div className="bg-white p-6 rounded-xl shadow-md border">
//     <p className="text-sm text-gray-500">{title}</p>
//     <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
//   </div>
// );

// export default RecruiterDashboard;



import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RecruiterDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);

  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
    skills: "",
  });

  const onChange = (e) =>
    setNewJob({ ...newJob, [e.target.name]: e.target.value });

  const createJob = async (e) => {
    e.preventDefault();

    if (!newJob.title.trim()) return alert("Job title is required");
    if (!newJob.description.trim()) return alert("Job description is required");
    if (!newJob.salary.trim()) return alert("Salary is required");
    if (!newJob.location.trim()) return alert("Location is required");
    if (!newJob.skills.trim()) return alert("Required skills are required");

    try {
      const res = await api.post("/jobs/create", {
        ...newJob,
        skills: newJob.skills.split(","),
      });

      setJobs([res.data.job || res.data, ...jobs]);
      setNewJob({
        title: "",
        description: "",
        salary: "",
        location: "",
        skills: "",
      });

      alert("✅ Job submitted for admin approval");
    } catch (err) {
      console.error("CREATE JOB ERROR:", err);
      alert(err.response?.data?.message || "Failed to create job");
    }
  };

  useEffect(() => {
    api.get("/jobs/recruiter/my").then((res) => setJobs(res.data));
    api.get("/admin/users").then((res) => setUsers(res.data));
  }, []);

  const totalUsers = users.length;
  const totalJobs = jobs.length;
  const approvedJobs = jobs.filter((j) => j.status === "approved").length;
  const pendingJobs = jobs.filter((j) => j.status === "pending").length;

  const chartData = useMemo(
    () => [
      { name: "Status", Approved: approvedJobs, Pending: pendingJobs },
    ],
    [approvedJobs, pendingJobs]
  );

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Recruiter Dashboard
        </h2>

        {/* ✅ STAT ROW */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <MiniCard title="Total Users" value={totalUsers} color="text-indigo-600" />
          <MiniCard title="Your Jobs" value={totalJobs} color="text-sky-600" />
          <MiniCard title="Approved" value={approvedJobs} color="text-green-600" />
          <MiniCard title="Pending" value={pendingJobs} color="text-yellow-500" />
        </div>

        {/* ✅ CHART + FORM GRID */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* CHART */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-slate-700 mb-6">
              Job Approval Statistics
            </h3>

            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Approved" />
                  <Bar dataKey="Pending" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CREATE JOB */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-slate-700 mb-6">
              Create New Job
            </h3>

            <form onSubmit={createJob} className="space-y-4">
              <input
                className="w-full p-3 border rounded-lg"
                name="title"
                placeholder="Job Title"
                value={newJob.title}
                onChange={onChange}
              />

              <input
                className="w-full p-3 border rounded-lg"
                name="location"
                placeholder="Job Location"
                value={newJob.location}
                onChange={onChange}
              />

              <input
                className="w-full p-3 border rounded-lg"
                name="salary"
                placeholder="Salary"
                value={newJob.salary}
                onChange={onChange}
              />

              <input
                className="w-full p-3 border rounded-lg"
                name="skills"
                placeholder="Required Skills (React, Node, MongoDB...)"
                value={newJob.skills}
                onChange={onChange}
              />

              <textarea
                className="w-full p-3 border rounded-lg"
                name="description"
                rows={4}
                placeholder="Job Description"
                value={newJob.description}
                onChange={onChange}
              ></textarea>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Send for Approval
              </button>
            </form>
          </div>
        </div>

        {/* ✅ JOB LIST */}
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-xl shadow border"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-slate-800">{job.title}</h3>
                <span
                  className={`px-3 py-1 text-xs rounded-full font-bold ${
                    job.status === "approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {job.status?.toUpperCase() || "PENDING"}
                </span>
              </div>

              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="text-green-600 font-semibold mt-1">
                ₹ {job.salary}
              </p>

              {/* Skills */}
              {job.skills && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.map((s, i) => (
                    <span
                      key={i}
                      className="bg-indigo-50 text-indigo-600 px-3 py-1 text-xs rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {/* ✅ NEW — VIEW APPLICANTS BUTTON */}
              <div className="mt-5 flex justify-end">
                <a
                  href={`/recruiter/job/${job._id}/applicants`}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  View Applicants
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

/* CARD */
const MiniCard = ({ title, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border">
    <p className="text-sm text-gray-500">{title}</p>
    <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
  </div>
);

export default RecruiterDashboard;
