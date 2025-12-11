// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const StudentApplicationsPage = () => {
//   const [apps, setApps] = useState([]);

//   useEffect(() => {
//     api.get("/applications/my").then((res) => setApps(res.data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h2 className="text-3xl font-bold mb-6 text-indigo-700">
//         My Applications
//       </h2>
//       <div className="space-y-4">
//         {apps.map((a) => (
//           <div key={a._id} className="bg-white p-5 rounded shadow">
//             <p className="font-bold">{a.jobId?.title}</p>
//             <p>Status: <span className="text-indigo-600">{a.status}</span></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudentApplicationsPage;


// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const StudentApplicationsPage = () => {
//   const [apps, setApps] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api.get("/applications/my")
//       .then((res) => setApps(res.data))
//       .finally(() => setLoading(false));
//   }, []);

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "shortlisted":
//         return "bg-green-100 text-green-700";
//       case "rejected":
//         return "bg-red-100 text-red-700";
//       default:
//         return "bg-yellow-100 text-yellow-700";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         Loading your applications...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-8">

//       {/* ✅ Header */}
//       <div className="max-w-6xl mx-auto mb-10 text-center text-white">
//         <h2 className="text-4xl font-extrabold mb-2">
//           My Applications
//         </h2>
//         <p className="text-gray-300">
//           Track all your job applications and their current status
//         </p>
//       </div>

//       {/* ✅ Applications List */}
//       <div className="max-w-6xl mx-auto grid gap-6">
//         {apps.length === 0 ? (
//           <div className="bg-white/90 backdrop-blur-lg rounded-xl p-10 text-center text-gray-500 shadow">
//             <p className="text-lg font-semibold mb-2">
//               You haven’t applied to any jobs yet.
//             </p>
//             <p className="text-sm">
//               Start exploring jobs and apply to kickstart your career.
//             </p>
//           </div>
//         ) : (
//           apps.map((a) => (
//             <div
//               key={a._id}
//               className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
//             >
//               {/* ✅ Job Info */}
//               <div>
//                 <h3 className="text-xl font-bold text-slate-800 mb-1">
//                   {a.jobId?.title || "Job Removed"}
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   Applied on{" "}
//                   {new Date(a.createdAt).toLocaleDateString()}
//                 </p>
//               </div>

//               {/* ✅ Status Badge */}
//               <div
//                 className={`px-5 py-2 rounded-full text-sm font-bold ${getStatusStyle(
//                   a.status
//                 )}`}
//               >
//                 {a.status?.toUpperCase()}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentApplicationsPage;


import { useEffect, useState } from "react";
import api from "../api/axios";
import { Briefcase, Calendar, CheckCircle, XCircle, Clock } from "lucide-react";

const StudentApplicationsPage = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/applications/my")
      .then((res) => setApps(res.data))
      .finally(() => setLoading(false));
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "shortlisted":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          icon: <CheckCircle size={16} />,
        };
      case "rejected":
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          icon: <XCircle size={16} />,
        };
      default:
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          icon: <Clock size={16} />,
        };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900">
        <div className="animate-spin w-10 h-10 border-4 border-indigo-400 border-t-transparent rounded-full mb-4"></div>
        Loading your applications...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 px-6 py-12">

      {/* ✅ PAGE HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-12 text-white">
        <h2 className="text-5xl font-extrabold mb-3">
          My Applications
        </h2>
        <p className="text-gray-300 text-lg">
          Track your job applications and monitor their live status
        </p>
      </div>

      {/* ✅ APPLICATIONS GRID */}
      <div className="max-w-6xl mx-auto space-y-6">

        {apps.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 text-center border border-white/20 shadow-xl">
            <Briefcase size={48} className="mx-auto text-indigo-400 mb-4" />
            <p className="text-xl font-semibold text-white mb-2">
              No Applications Yet
            </p>
            <p className="text-gray-300">
              Start applying to jobs and your applications will appear here.
            </p>
          </div>
        ) : (
          apps.map((a) => {
            const statusUI = getStatusStyle(a.status);

            return (
              <div
                key={a._id}
                className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover:scale-[1.01] transition"
              >
                {/* ✅ LEFT INFO */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
                    <Briefcase />
                  </div>

                  {/* <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {a.jobId?.title || "Job Removed"}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      Applied on{" "}
                      {new Date(a.createdAt).toLocaleDateString()}
                    </div> */}
                  {/* </div> */}

                  <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {a.jobId?.title || "Job Removed"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Applied on{" "}
                    {new Date(a.createdAt).toLocaleDateString()}
                  </p>
                  {typeof a.matchPercentage === "number" && (
                    <p className="text-xs text-indigo-600 font-semibold mt-1">
                      Match: {a.matchPercentage}% (skills vs job)
                    </p>
                  )}
                </div>
                </div>

                {/* ✅ STATUS BADGE */}
                <div
                  className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm ${statusUI.bg} ${statusUI.text}`}
                >
                  {statusUI.icon}
                  {a.status?.toUpperCase()}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default StudentApplicationsPage;
