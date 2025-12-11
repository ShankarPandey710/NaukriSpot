// // frontend/src/pages/RecruiterJobApplicationsPage.jsx
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../api/axios";

// const ApplicantCard = ({ app, onStatusChange }) => {
//   const resumeUrl = app.resume ? `http://localhost:5000/${app.resume}` : null;

//   const changeStatus = async (status) => {
//     await api.patch(`/applications/${app._id}/status`, { status });
//     onStatusChange(app._id, status);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow p-6">
//       <div className="flex items-start gap-4">
//         <img
//           src={app.studentId?.profileImage ? `http://localhost:5000/${app.studentId.profileImage}` : "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"}
//           className="w-16 h-16 rounded-full object-cover"
//           alt="avatar"
//         />
//         <div className="flex-1">
//           <h3 className="text-xl font-bold">{app.fullName || app.studentId?.name}</h3>
//           <p className="text-sm text-gray-600">{app.email || app.studentId?.email}</p>
//           <p className="text-sm text-gray-600 mt-2">Phone: {app.phone || "N/A"}</p>
//           <p className="text-sm text-gray-600">Location: {app.location || "N/A"}</p>
//           <p className="text-sm text-gray-600">DOB: {app.dob || "N/A"}</p>
//           <p className="text-sm text-gray-600">Relocate: {app.relocate || "no"}</p>

//           <div className="mt-3 flex gap-2">
//             <button
//               onClick={() => changeStatus("shortlisted")}
//               className="bg-green-600 text-white px-3 py-1 rounded"
//             >
//               Shortlist
//             </button>
//             <button
//               onClick={() => changeStatus("rejected")}
//               className="bg-red-600 text-white px-3 py-1 rounded"
//             >
//               Reject
//             </button>
//             {resumeUrl && (
//               <a
//                 href={resumeUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-indigo-600 text-white px-3 py-1 rounded"
//               >
//                 View Resume
//               </a>
//             )}
//           </div>
//         </div>

//         <div className="text-sm">
//           <div className={`px-3 py-1 rounded-full ${app.status === "shortlisted" ? "bg-green-100 text-green-700" : app.status === "rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
//             {app.status?.toUpperCase() || "APPLIED"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RecruiterJobApplicationsPage = () => {
//   const { id } = useParams(); // job id
//   const [apps, setApps] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await api.get(`/applications/job/${id}`);
//         setApps(res.data);
//       } catch (err) {
//         console.error("Load applicants error:", err);
//         alert(err.response?.data?.message || "Failed to load applicants");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, [id]);

//   const handleStatusChange = (appId, status) => {
//     setApps((prev) => prev.map((a) => (a._id === appId ? { ...a, status } : a)));
//   };

//   if (loading) return <div className="p-8">Loading applicants...</div>;

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-6">Applicants</h2>

//         {apps.length === 0 ? (
//           <div className="bg-white p-6 rounded-xl shadow text-center">No applicants yet</div>
//         ) : (
//           <div className="space-y-4">
//             {apps.map((a) => (
//               <ApplicantCard key={a._id} app={a} onStatusChange={handleStatusChange} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RecruiterJobApplicationsPage;


// frontend/src/pages/RecruiterJobApplicationsPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const ApplicantCard = ({ app, onStatusChange }) => {
  const [loading, setLoading] = useState(false);

  const resumeUrl = app.resume ? `http://localhost:5000/${app.resume}` : null;

  const updateStatus = async (status) => {
    setLoading(true);
    try {
      await api.patch(`/applications/${app._id}/status`, { status });
      onStatusChange(app._id, status);
    } catch (err) {
      console.error("STATUS UPDATE ERROR:", err);
      alert("Failed to update status");
    }
    setLoading(false);
  };

  const statusBadge = (status) => {
    const colors = {
      applied: "bg-yellow-100 text-yellow-700",
      shortlisted: "bg-green-100 text-green-700",
      rejected: "bg-red-100 text-red-700",
    };

    return (
      <span className={`px-3 py-1 rounded-full font-semibold text-sm ${colors[status]}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  // Disable buttons once finalized
  const disableActions = app.status !== "applied" || loading;

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-start gap-4">
        {/* Profile Photo */}
        <img
          src={
            app.studentId?.profileImage
              ? `http://localhost:5000/${app.studentId.profileImage}`
              : "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          }
          className="w-16 h-16 rounded-full object-cover"
          alt="avatar"
        />

        {/* Applicant Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold">{app.fullName || app.studentId?.name}</h3>
          <p className="text-sm text-gray-600">{app.email || app.studentId?.email}</p>

          <p className="text-sm text-gray-600 mt-2">📞 Phone: {app.phone || "N/A"}</p>
          <p className="text-sm text-gray-600">📍 Location: {app.location || "N/A"}</p>
          <p className="text-sm text-gray-600">🎂 DOB: {app.dob || "N/A"}</p>
          <p className="text-sm text-gray-600">🚚 Will Relocate: {app.relocate || "No"}</p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              disabled={disableActions}
              onClick={() => updateStatus("shortlisted")}
              className={`px-4 py-2 rounded text-white font-semibold
                ${
                  app.status === "shortlisted"
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
            >
              {loading && app.status === "applied"
                ? "Processing..."
                : app.status === "shortlisted"
                ? "Shortlisted"
                : "Shortlist"}
            </button>

            <button
              disabled={disableActions}
              onClick={() => updateStatus("rejected")}
              className={`px-4 py-2 rounded text-white font-semibold
                ${
                  app.status === "rejected"
                    ? "bg-red-500 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
            >
              {loading && app.status === "applied"
                ? "Processing..."
                : app.status === "rejected"
                ? "Rejected"
                : "Reject"}
            </button>

            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-semibold"
              >
                View Resume
              </a>
            )}
          </div>
        </div>

        {/* Status Badge */}
        <div className="mt-2">
          {statusBadge(app.status || "applied")}
        </div>
      </div>
    </div>
  );
};

const RecruiterJobApplicationsPage = () => {
  const { id } = useParams();
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApplicants = async () => {
      try {
        const res = await api.get(`/applications/job/${id}`);
        setApps(res.data);
      } catch (err) {
        console.error("LOAD APPLICANTS ERROR:", err);
        alert("Failed to load applicants");
      }
      setLoading(false);
    };

    loadApplicants();
  }, [id]);

  const handleStatusChange = (appId, status) => {
    setApps((prev) =>
      prev.map((a) => (a._id === appId ? { ...a, status } : a))
    );
  };

  if (loading)
    return <div className="p-8 text-center text-gray-500">Loading applicants...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Applicants</h2>

        {apps.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow text-center">
            No applicants yet.
          </div>
        ) : (
          <div className="space-y-6">
            {apps.map((app) => (
              <ApplicantCard key={app._id} app={app} onStatusChange={handleStatusChange} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruiterJobApplicationsPage;
