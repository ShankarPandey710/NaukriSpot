// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import { useAuth } from "../context/AuthContext";

// const JobDetailsPage = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     api.get(`/jobs/${id}`).then((res) => setJob(res.data));
//   }, [id]);

//   if (!job) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-4">
//           {job.title}
//         </h2>
//         <p>{job.description}</p>
//         <p className="mt-3">Location: {job.location}</p>
//         <p className="mt-1">Salary: ₹{job.salary}</p>

//         {user?.role === "student" && (
//           <button
//             onClick={() => navigate(`/jobs/${id}/apply`)}
//             className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
//           >
//             Apply Now
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobDetailsPage;


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import { useAuth } from "../context/AuthContext";

// const JobDetailsPage = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     api.get(`/jobs/${id}`).then((res) => setJob(res.data));
//   }, [id]);

//   if (!job)
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         Loading job details...
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 flex items-center justify-center px-4 py-10">
//       <div className="bg-white/95 backdrop-blur-xl max-w-4xl w-full rounded-2xl shadow-2xl p-10 border border-white/20">

//         {/* ✅ Job Header */}
//         <div className="mb-8 border-b pb-6">
//           <h2 className="text-4xl font-extrabold text-slate-800 mb-3">
//             {job.title}
//           </h2>
//           <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
//             <span className="flex items-center gap-1">
//               📍 <b>{job.location}</b>
//             </span>
//             <span className="flex items-center gap-1">
//               💰 <b>₹ {job.salary}</b>
//             </span>
//           </div>
//         </div>

//         {/* ✅ Job Description */}
//         <div className="mb-8">
//           <h3 className="text-xl font-bold text-slate-700 mb-3">
//             Job Description
//           </h3>
//           <p className="text-gray-700 leading-relaxed">
//             {job.description}
//           </p>
//         </div>

//         {/* ✅ Job Meta Info */}
//         <div className="grid md:grid-cols-2 gap-6 mb-10">
//           <div className="p-4 bg-gray-50 rounded-lg border">
//             <p className="text-sm text-gray-500">Location</p>
//             <p className="font-semibold text-slate-800">{job.location}</p>
//           </div>

//           <div className="p-4 bg-gray-50 rounded-lg border">
//             <p className="text-sm text-gray-500">Salary</p>
//             <p className="font-semibold text-green-600">
//               ₹ {job.salary}
//             </p>
//           </div>
//         </div>

//         {/* ✅ Action Section */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

//           {user?.role === "student" ? (
//             <button
//               onClick={() => navigate(`/jobs/${id}/apply`)}
//               className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-3 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-blue-700 transition shadow-lg"
//             >
//               Apply Now
//             </button>
//           ) : user ? (
//             <div className="w-full sm:w-auto bg-yellow-100 text-yellow-700 px-6 py-3 rounded-lg text-center font-semibold">
//               Only students can apply for jobs
//             </div>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-3 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-blue-700 transition shadow-lg"
//             >
//               Login to Apply
//             </button>
//           )}

//           <button
//             onClick={() => navigate("/jobs")}
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             ← Back to Jobs
//           </button>
//         </div>

//         {/* ✅ Trust Footer */}
//         <div className="mt-10 text-center text-xs text-gray-400">
//           <p>Powered by NaukriSpot Job Platform</p>
//           <p>Your career starts here 🚀</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default JobDetailsPage;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  if (!job)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading job details...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10">

        {/* ✅ HEADER */}
        <div className="mb-8 border-b pb-6">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-3">
            {job.title}
          </h2>

          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              📍 <b>{job.location}</b>
            </span>
            <span className="flex items-center gap-1">
              💰 <b>₹ {job.salary}</b>
            </span>
          </div>
        </div>

        {/* ✅ DESCRIPTION */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-700 mb-3">
            Job Description
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* ✅ INFO CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-bold text-slate-800">{job.location}</p>
          </div>

          <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
            <p className="text-sm text-gray-500">Salary</p>
            <p className="font-bold text-emerald-600">
              ₹ {job.salary}
            </p>
          </div>
        </div>

        {/* ✅ ACTION SECTION */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {user?.role === "student" ? (
            <button
              onClick={() => navigate(`/jobs/${id}/apply`)}
              className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-10 py-3 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-emerald-700 transition shadow-lg"
            >
              Apply Now
            </button>
          ) : user ? (
            <div className="w-full sm:w-auto bg-yellow-100 text-yellow-700 px-6 py-3 rounded-lg text-center font-semibold">
              Only students can apply for jobs
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-10 py-3 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-emerald-700 transition shadow-lg"
            >
              Login to Apply
            </button>
          )}

          <button
            onClick={() => navigate("/jobs")}
            className="text-teal-600 font-semibold hover:underline"
          >
            ← Back to Jobs
          </button>
        </div>

        {/* ✅ FOOTER */}
        <div className="mt-10 text-center text-xs text-gray-400">
          <p>Powered by NaukriSpot Job Platform</p>
          <p>Your career starts here 🚀</p>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsPage;
