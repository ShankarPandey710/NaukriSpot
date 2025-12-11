// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const ApplyJobPage = () => {
//   const { id } = useParams();
//   const [resumeText, setResumeText] = useState("");
//   const [resumeFile, setResumeFile] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const formData = new FormData();
//       formData.append("resumeText", resumeText);
//       if (resumeFile) {
//         formData.append("resumeFile", resumeFile);
//       }

//       await api.post(`/applications/apply/${id}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       navigate("/applications");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to apply");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={submit}
//         className="bg-white p-8 rounded shadow w-full max-w-lg space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-indigo-700 text-center">
//           Apply for Job
//         </h2>

//         {error && (
//           <p className="text-red-500 text-center">{error}</p>
//         )}

//         <textarea
//           rows="4"
//           placeholder="Paste resume text or summary (optional)"
//           className="w-full p-3 border rounded"
//           value={resumeText}
//           onChange={(e) => setResumeText(e.target.value)}
//         ></textarea>

//         <div>
//           <label className="block mb-1 font-semibold">
//             Upload Resume (PDF/DOC)
//           </label>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             onChange={(e) => setResumeFile(e.target.files[0])}
//             className="w-full"
//           />
//         </div>

//         <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplyJobPage;


// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const ApplyJobPage = () => {
//   const { id } = useParams();
//   const [resume, setResume] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (!resume) {
//         setError("Resume is required");
//         return;
//       }

//       await api.post(`/applications/apply/${id}`, { resume });

//       navigate("/applications");
//     } catch (err) {
//       console.error("APPLY ERROR:", err);

//       if (err.response) {
//         setError(err.response.data.message);
//       } else if (err.request) {
//         setError("Backend not responding. Is server running?");
//       } else {
//         setError("Unknown error occurred");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={submit}
//         className="bg-white p-8 rounded shadow w-full max-w-lg space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-indigo-700 text-center">
//           Apply for Job
//         </h2>

//         {error && (
//           <p className="text-red-500 text-center">{error}</p>
//         )}

//         <textarea
//           rows="6"
//           placeholder="Paste your resume text or Google Drive link"
//           className="w-full p-3 border rounded"
//           value={resume}
//           onChange={(e) => setResume(e.target.value)}
//         />

//         <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplyJobPage;


// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const ApplyJobPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [resumeFile, setResumeFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!resumeFile) {
//       setError("Please upload your resume (PDF/DOC)");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("resumeFile", resumeFile);

//       await api.post(`/applications/apply/${id}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       navigate("/applications");
//     } catch (err) {
//       console.error("APPLY ERROR:", err);

//       if (err.response) {
//         setError(err.response.data.message);
//       } else if (err.request) {
//         setError("Backend not responding. Is server running?");
//       } else {
//         setError("Something went wrong. Try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center px-4">
//       <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 animate-fadeIn">

//         {/* Header */}
//         <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-2">
//           Apply for This Job
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           Upload your latest resume to complete your application
//         </p>

//         {/* Error Message */}
//         {error && (
//           <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-center">
//             {error}
//           </div>
//         )}

//         {/* Form */}
//         <form onSubmit={submit} className="space-y-6">

//           {/* File Upload */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Upload Resume <span className="text-red-500">*</span>
//             </label>

//             <div className="relative border-2 border-dashed border-indigo-400 rounded-lg p-6 text-center hover:bg-indigo-50 transition cursor-pointer">
//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => setResumeFile(e.target.files[0])}
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//               />
//               <p className="text-gray-600">
//                 {resumeFile ? (
//                   <span className="font-semibold text-indigo-700">
//                     {resumeFile.name}
//                   </span>
//                 ) : (
//                   "Click to upload PDF / DOC / DOCX"
//                 )}
//               </p>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-indigo-700 disabled:opacity-60 transition"
//           >
//             {loading ? "Submitting Application..." : "Submit Application"}
//           </button>

//         </form>

//         {/* Footer Note */}
//         <p className="text-xs text-gray-500 text-center mt-6">
//           By applying, you agree to share your resume with the recruiter.
//         </p>

//       </div>
//     </div>
//   );
// };

// export default ApplyJobPage;

// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const ApplyJobPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [resumeFile, setResumeFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!resumeFile) {
//       setError("Please upload your resume (PDF / DOC)");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("resumeFile", resumeFile);

//       await api.post(`/applications/apply/${id}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       navigate("/applications");
//     } catch (err) {
//       console.error("APPLY ERROR:", err);

//       if (err.response) {
//         setError(err.response.data.message);
//       } else if (err.request) {
//         setError("Backend not responding. Is server running?");
//       } else {
//         setError("Something went wrong. Try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 flex items-center justify-center px-4">

//       <div className="bg-white/95 backdrop-blur-xl w-full max-w-xl rounded-2xl shadow-2xl p-10 border border-white/20">

//         {/* ✅ Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-extrabold text-slate-800 mb-2">
//             Apply for This Job
//           </h2>
//           <p className="text-gray-500">
//             Upload your resume to complete your application
//           </p>
//         </div>

//         {/* ✅ Error Message */}
//         {error && (
//           <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg mb-6 text-center font-semibold">
//             {error}
//           </div>
//         )}

//         {/* ✅ Form */}
//         <form onSubmit={submit} className="space-y-8">

//           {/* ✅ File Upload Card */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-3">
//               Resume Upload <span className="text-red-500">*</span>
//             </label>

//             <div className="relative rounded-xl border-2 border-dashed border-indigo-400 p-8 text-center hover:bg-indigo-50 transition cursor-pointer">

//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => setResumeFile(e.target.files[0])}
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//               />

//               {!resumeFile && (
//                 <>
//                   <p className="text-gray-600 text-lg font-medium">
//                     Click here to upload your resume
//                   </p>
//                   <p className="text-sm text-gray-400 mt-1">
//                     Supported formats: PDF, DOC, DOCX
//                   </p>
//                 </>
//               )}

//               {resumeFile && (
//                 <div className="space-y-2">
//                   <p className="text-green-600 font-bold text-lg">
//                     ✅ File Selected
//                   </p>
//                   <p className="text-indigo-700 font-semibold">
//                     {resumeFile.name}
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     You can change the file before submitting.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ✅ Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg tracking-wide hover:from-indigo-700 hover:to-blue-700 disabled:opacity-60 transition shadow-lg"
//           >
//             {loading ? "Submitting Application..." : "Submit Application"}
//           </button>

//         </form>

//         {/* ✅ Trust Footer */}
//         <div className="mt-8 text-center">
//           <p className="text-xs text-gray-500">
//             🔒 Your resume will only be shared with the recruiter.
//           </p>
//           <p className="text-xs text-gray-400 mt-1">
//             Powered by NaukriSpot Job Platform
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ApplyJobPage;


// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const ApplyJobPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [resumeFile, setResumeFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!resumeFile) {
//       setError("Please upload your resume (PDF / DOC / DOCX)");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("resumeFile", resumeFile);

//       await api.post(`/applications/apply/${id}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       navigate("/applications");
//     } catch (err) {
//       console.error("APPLY ERROR:", err);

//       if (err.response) {
//         setError(err.response.data.message);
//       } else if (err.request) {
//         setError("Backend not responding. Is server running?");
//       } else {
//         setError("Something went wrong. Try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">

//       <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//         {/* ✅ LEFT BRAND PANEL */}
//         <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-teal-600 to-emerald-500 text-white p-10">
//           <h2 className="text-4xl font-extrabold mb-4 text-center">
//             Complete Your Application
//           </h2>
//           <p className="text-center text-lg opacity-90">
//             Upload your resume and take the next step in your career.
//           </p>

//           <div className="mt-8 bg-white/20 p-6 rounded-xl text-center">
//             <p className="font-semibold">🔒 100% Secure</p>
//             <p className="text-sm mt-2">
//               Your resume is only shared with the recruiter.
//             </p>
//           </div>
//         </div>

//         {/* ✅ RIGHT FORM PANEL */}
//         <div className="p-10">

//           <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
//             Apply for Job
//           </h2>
//           <p className="text-gray-500 mb-6">
//             Upload your resume to submit your application
//           </p>

//           {error && (
//             <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg mb-6 text-center font-semibold">
//               {error}
//             </div>
//           )}

//           <form onSubmit={submit} className="space-y-6">

//             {/* ✅ FILE UPLOAD */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Upload Resume <span className="text-red-500">*</span>
//               </label>

//               <div className="relative rounded-xl border-2 border-dashed border-teal-400 p-6 text-center hover:bg-teal-50 transition cursor-pointer">

//                 <input
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={(e) => setResumeFile(e.target.files[0])}
//                   className="absolute inset-0 opacity-0 cursor-pointer"
//                 />

//                 {!resumeFile && (
//                   <>
//                     <p className="text-gray-600 font-medium">
//                       Click to upload your resume
//                     </p>
//                     <p className="text-sm text-gray-400 mt-1">
//                       Supported: PDF, DOC, DOCX
//                     </p>
//                   </>
//                 )}

//                 {resumeFile && (
//                   <div className="space-y-2">
//                     <p className="text-green-600 font-bold">
//                       ✅ File Selected
//                     </p>
//                     <p className="text-teal-700 font-semibold">
//                       {resumeFile.name}
//                     </p>
//                     <p className="text-xs text-gray-400">
//                       You can change the file before submitting.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* ✅ SUBMIT BUTTON */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-emerald-700 disabled:opacity-60 transition shadow-lg"
//             >
//               {loading ? "Submitting Application..." : "Submit Application"}
//             </button>

//           </form>

//           {/* ✅ FOOTER NOTE */}
//           <p className="text-xs text-gray-500 text-center mt-6">
//             By applying, you agree to share your resume with the recruiter.
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplyJobPage;
  

// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../api/axios";

// const ApplyJobPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     dob: "",
//     gender: "",
//     location: "",
//     relocate: "No",
//   });

//   const [resumeFile, setResumeFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const onChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!resumeFile) {
//       return setError("Please upload your resume (PDF / DOC / DOCX)");
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("resumeFile", resumeFile);

//       // append all application fields
//       Object.keys(form).forEach((key) => {
//         formData.append(key, form[key]);
//       });

//       await api.post(`/applications/apply/${id}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       navigate("/applications");
//     } catch (err) {
//       console.error("APPLY ERROR:", err);
//       setError(
//         err.response?.data?.message ||
//           "Something went wrong. Try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">

//       <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">

//         <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-10 text-white text-center">
//           <h2 className="text-4xl font-extrabold">Job Application Form</h2>
//           <p className="opacity-90 mt-2">
//             Fill the details and upload your resume
//           </p>
//         </div>

//         <form onSubmit={submit} className="p-10 space-y-6">

//           {error && (
//             <div className="bg-red-50 text-red-600 border border-red-200 p-3 rounded-lg text-center font-semibold">
//               {error}
//             </div>
//           )}

//           {/* 🟩 FULL NAME */}
//           <input
//             type="text"
//             name="fullName"
//             value={form.fullName}
//             onChange={onChange}
//             placeholder="Full Name"
//             className="w-full p-3 border rounded-lg"
//             required
//           />

//           {/* 🟩 PHONE */}
//           <input
//             type="text"
//             name="phone"
//             value={form.phone}
//             onChange={onChange}
//             placeholder="Phone Number"
//             className="w-full p-3 border rounded-lg"
//             required
//           />

//           {/* 🟩 EMAIL */}
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={onChange}
//             placeholder="Email ID"
//             className="w-full p-3 border rounded-lg"
//             required
//           />

//           {/* 🟩 DOB */}
//           <input
//             type="date"
//             name="dob"
//             value={form.dob}
//             onChange={onChange}
//             className="w-full p-3 border rounded-lg"
//             required
//           />

//           {/* 🟩 GENDER */}
//           <select
//             name="gender"
//             value={form.gender}
//             onChange={onChange}
//             className="w-full p-3 border rounded-lg"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>

//           {/* 🟩 LOCATION */}
//           <input
//             type="text"
//             name="location"
//             value={form.location}
//             onChange={onChange}
//             placeholder="Current Location / Address"
//             className="w-full p-3 border rounded-lg"
//             required
//           />

//           {/* 🟩 RELOCATE OPTION */}
//           <select
//             name="relocate"
//             value={form.relocate}
//             onChange={onChange}
//             className="w-full p-3 border rounded-lg"
//           >
//             <option>No</option>
//             <option>Yes</option>
//           </select>

//           {/* 🟩 RESUME FILE */}
//           <div className="border-2 border-dashed border-teal-400 p-6 rounded-xl text-center">
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={(e) => setResumeFile(e.target.files[0])}
//               className="cursor-pointer"
//             />
//           </div>

//           {/* 🟩 SUBMIT */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-3 rounded-xl font-bold hover:opacity-90"
//           >
//             {loading ? "Submitting..." : "Submit Application"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplyJobPage;


import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

const ApplyJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resumeFile, setResumeFile] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    location: "",
    relocate: "no",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!resumeFile) return setError("Please upload your resume");

    try {
      setLoading(true);

      const fd = new FormData();
      Object.keys(form).forEach((key) => fd.append(key, form[key]));
      fd.append("resumeFile", resumeFile);

      await api.post(`/applications/apply/${id}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/applications");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to apply");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Job Application Form
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={submit} className="space-y-5">

          <input
            className="w-full p-3 border rounded"
            placeholder="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={change}
            required
          />

          <input
            className="w-full p-3 border rounded"
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={change}
            required
          />

          <input
            className="w-full p-3 border rounded"
            placeholder="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={change}
            required
          />

          <label className="block text-gray-600">Date of Birth</label>
          <input
            type="date"
            className="w-full p-3 border rounded"
            name="dob"
            value={form.dob}
            onChange={change}
          />

          <select
            className="w-full p-3 border rounded"
            name="gender"
            value={form.gender}
            onChange={change}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            className="w-full p-3 border rounded"
            placeholder="Current Location"
            name="location"
            value={form.location}
            onChange={change}
            required
          />

          <label className="block font-medium">Willing to Relocate?</label>
          <select
            className="w-full p-3 border rounded"
            name="relocate"
            value={form.relocate}
            onChange={change}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          {/* Resume Upload */}
          <div className="border-2 border-dashed p-6 rounded text-center">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResumeFile(e.target.files[0])}
              className="mb-2"
            />
            <p className="text-gray-500 text-sm">PDF, DOC, DOCX allowed</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-indigo-700"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobPage;
