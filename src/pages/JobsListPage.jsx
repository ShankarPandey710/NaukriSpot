// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import JobCard from "../components/JobCard";

// const JobsListPage = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     api.get("/jobs").then((res) => setJobs(res.data));
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <h2 className="text-4xl text-center font-bold mb-8 text-indigo-700">
//         Available Jobs
//       </h2>
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
//         {jobs.map((job) => (
//           <JobCard key={job._id} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobsListPage;


// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import JobCard from "../components/JobCard";

// const JobsListPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     api.get("/jobs").then((res) => setJobs(res.data));
//   }, []);

//   const filteredJobs = jobs.filter(
//     (job) =>
//       job.title.toLowerCase().includes(search.toLowerCase()) ||
//       job.location.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900">

//       {/* ✅ HERO HEADER */}
//       <div className="text-center py-16 px-4">
//         <h2 className="text-5xl font-extrabold text-white mb-4">
//           Explore Career Opportunities
//         </h2>
//         <p className="text-gray-300 max-w-2xl mx-auto">
//           Find the latest job openings from verified recruiters and kickstart
//           your professional journey with NaukriSpot.
//         </p>

//         {/* ✅ SEARCH BAR */}
//         <div className="mt-8 max-w-xl mx-auto">
//           <input
//             type="text"
//             placeholder="Search by job title or location..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//         </div>
//       </div>

//       {/* ✅ JOB GRID SECTION */}
//       <div className="bg-slate-100 rounded-t-3xl py-14 px-6">
//         <div className="max-w-7xl mx-auto">

//           {filteredJobs.length === 0 ? (
//             <div className="text-center text-gray-500 text-lg">
//               No jobs found. Try a different search.
//             </div>
//           ) : (
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {filteredJobs.map((job) => (
//                 <JobCard key={job._id} job={job} />
//               ))}
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };



// export default JobsListPage;
  import { useEffect, useState } from "react";
import api from "../api/axios";
import JobCard from "../components/JobCard";

const JobsListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">

      {/* ✅ HERO HEADER */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 py-16 px-4 text-center text-white shadow-lg">
        <h2 className="text-5xl font-extrabold mb-4">
          Explore Career Opportunities
        </h2>
        <p className="max-w-2xl mx-auto opacity-90 text-lg">
          Find verified job openings from trusted recruiters and start your
          professional journey today.
        </p>

        {/* ✅ SEARCH BAR */}
        <div className="mt-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by job title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-xl text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
      </div>

      {/* ✅ JOB GRID SECTION */}
      <div className="py-14 px-6">
        <div className="max-w-7xl mx-auto">

          {filteredJobs.length === 0 ? (
            <div className="text-center text-gray-500 text-lg bg-white p-10 rounded-xl shadow">
              No jobs found. Try a different search.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredJobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default JobsListPage;
