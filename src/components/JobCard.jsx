// import { Link } from "react-router-dom";

// const JobCard = ({ job }) => {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
//       <h3 className="text-xl font-bold text-indigo-600 mb-2">
//         {job.title}
//       </h3>
//       <p className="text-gray-600">Location: {job.location}</p>
//       <p className="text-gray-600 mb-4">Salary: ₹{job.salary}</p>
//       <Link
//         to={`/jobs/${job._id}`}
//         className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//       >
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default JobCard;

// import { Link } from "react-router-dom";

// const JobCard = ({ job }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden">

//       {/* ✅ Company Logo / Image Section */}
//       <div className="h-28 w-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
//         <img
//           src={
//             job.companyLogo
//               ? `http://localhost:5000/${job.companyLogo}`
//               : "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
//           }
//           alt="Company Logo"
//           className="w-16 h-16 bg-white rounded-full p-2 shadow"
//         />
//       </div>

//       {/* ✅ Content */}
//       <div className="p-6">

//         <h3 className="text-xl font-extrabold text-slate-800 mb-1 line-clamp-1">
//           {job.title}
//         </h3>

//         <p className="text-sm text-gray-500 mb-2">
//           📍 {job.location}
//         </p>

//         <div className="flex items-center justify-between mb-4">
//           <span className="text-green-600 font-bold text-lg">
//             ₹ {job.salary}
//           </span>

//           <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">
//             Full Time
//           </span>
//         </div>

//         <Link
//           to={`/jobs/${job._id}`}
//           className="block w-full text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 rounded-lg font-bold hover:from-indigo-700 hover:to-blue-700 transition"
//         >
//           View Job Details
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default JobCard;

import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const bannerImage =
    job.jobImage ||
    job.companyImage ||
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80";

  const logoImage =
    job.companyLogo ||
    "https://cdn-icons-png.flaticon.com/512/3135/3135768.png";

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden">

      {/* ✅ JOB / COMPANY BANNER IMAGE */}
      <div className="relative h-36 w-full overflow-hidden">
        <img
          src={bannerImage.startsWith("http") ? bannerImage : `http://localhost:5000/${bannerImage}`}
          alt="Job Banner"
          className="w-full h-full object-cover"
        />

        {/* ✅ COMPANY LOGO BADGE */}
        <div className="absolute -bottom-6 left-4 bg-white rounded-full p-2 shadow-lg">
          <img
            src={logoImage.startsWith("http") ? logoImage : `http://localhost:5000/${logoImage}`}
            alt="Company Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>

      {/* ✅ CONTENT */}
      <div className="pt-10 p-6">

        <h3 className="text-xl font-extrabold text-slate-800 mb-1 line-clamp-1">
          {job.title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">
          📍 {job.location}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-green-600 font-bold text-lg">
            ₹ {job.salary}
          </span>

          <span className="bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full font-semibold">
            {job.jobType || "Full Time"}
          </span>
        </div>

        <Link
          to={`/jobs/${job._id}`}
          className="block w-full text-center bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2.5 rounded-lg font-bold hover:from-teal-700 hover:to-emerald-700 transition shadow"
        >
          View Job Details
        </Link>

      </div>
    </div>
  );
};

export default JobCard;
