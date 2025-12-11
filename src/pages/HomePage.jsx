// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white text-center px-4">
//       <h1 className="text-5xl font-extrabold mb-6">
//         Welcome to <span className="text-yellow-300">Careeva</span>
//       </h1>
//       <p className="text-xl mb-8 max-w-2xl">
//         A smart career & job placement platform where students find the right jobs,
//         recruiters find the right talent, and careers begin.
//       </p>
//       <div className="flex gap-5">
//         <a
//           href="/jobs"
//           className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-200"
//         >
//           Browse Jobs
//         </a>
//         <a
//           href="/register"
//           className="border border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-700"
//         >
//           Get Started
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="bg-gray-50">

//       {/* ✅ HERO SECTION */}
//       <section className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col items-center justify-center text-white text-center px-6">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//           Build Your Career with <span className="text-yellow-300">Careeva</span>
//         </h1>

//         <p className="text-xl mb-8 max-w-2xl opacity-90">
//           A powerful job placement platform where students meet opportunities
//           and recruiters find top talent.
//         </p>

//         <div className="flex gap-6">
//           <Link
//             to="/jobs"
//             className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-200"
//           >
//             Browse Jobs
//           </Link>

//           <Link
//             to="/register"
//             className="border border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-700"
//           >
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* ✅ FEATURES SECTION */}
//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
//           Why Choose Careeva?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-bold text-indigo-600 mb-3">
//               Verified Jobs
//             </h3>
//             <p className="text-gray-600">
//               All jobs are reviewed and approved by our admin before students
//               can apply.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-bold text-indigo-600 mb-3">
//               Secure Accounts
//             </h3>
//             <p className="text-gray-600">
//               Email verification, password security, profile protection and
//               account management.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-bold text-indigo-600 mb-3">
//               Smart Hiring
//             </h3>
//             <p className="text-gray-600">
//               Recruiters get fast access to skilled candidates with resume
//               uploads.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ✅ FOR STUDENTS / RECRUITERS */}
//       <section className="py-16 px-6 bg-indigo-50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

//           {/* STUDENTS */}
//           <div className="bg-white p-8 rounded-xl shadow">
//             <h3 className="text-2xl font-bold text-indigo-700 mb-4">
//               For Students
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               <li>✅ Create your career profile</li>
//               <li>✅ Browse verified jobs</li>
//               <li>✅ Upload resume and apply easily</li>
//               <li>✅ Track application status</li>
//             </ul>
//             <Link
//               to="/register"
//               className="inline-block mt-6 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
//             >
//               Start as Student
//             </Link>
//           </div>

//           {/* RECRUITERS */}
//           <div className="bg-white p-8 rounded-xl shadow">
//             <h3 className="text-2xl font-bold text-indigo-700 mb-4">
//               For Recruiters
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               <li>✅ Post job openings</li>
//               <li>✅ Admin approval for authenticity</li>
//               <li>✅ View applicant resumes</li>
//               <li>✅ Manage job postings easily</li>
//             </ul>
//             <Link
//               to="/register"
//               className="inline-block mt-6 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
//             >
//               Start Hiring
//             </Link>
//           </div>

//         </div>
//       </section>

//       {/* ✅ CALL TO ACTION */}
//       <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-center text-white px-6">
//         <h2 className="text-4xl font-bold mb-4">
//           Ready to Grow Your Future?
//         </h2>
//         <p className="mb-8 text-lg opacity-90">
//           Join thousands of students and recruiters using Careeva today.
//         </p>

//         <Link
//           to="/register"
//           className="bg-white text-indigo-700 px-10 py-3 font-bold rounded-lg hover:bg-gray-200"
//         >
//           Create Free Account
//         </Link>
//       </section>

//     </div>
//   );
// };

// export default HomePage;


import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-slate-50">

      {/* ✅ HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Power Your Career with{" "}
          <span className="text-emerald-400">NaukriSpot</span>
        </h1>

        <p className="text-xl mb-10 max-w-2xl text-slate-300">
          A trusted job placement platform connecting skilled students with
          verified recruiters and real career opportunities.
        </p>

        <div className="flex gap-6">
          <Link
            to="/jobs"
            className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-600 transition shadow"
          >
            Browse Jobs
          </Link>

          <Link
            to="/register"
            className="border border-emerald-400 text-emerald-300 px-8 py-3 rounded-lg font-bold hover:bg-emerald-400 hover:text-slate-900 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* ✅ FEATURES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">
          A Smarter Way to Hire & Get Hired
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-emerald-600 mb-3">
              Verified Opportunities
            </h3>
            <p className="text-gray-600">
              Every job posted is verified and approved by our admin to ensure
              authenticity and trust.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-emerald-600 mb-3">
              Secure Profiles
            </h3>
            <p className="text-gray-600">
              Email verification, encrypted passwords, profile controls and full
              account security.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-emerald-600 mb-3">
              Smart Recruitment
            </h3>
            <p className="text-gray-600">
              Recruiters can easily post jobs, review resumes, and manage hiring
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ USER SECTIONS */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

          {/* STUDENTS */}
          <div className="bg-white p-10 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              For Students
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Create a secure profile</li>
              <li>✅ Apply to approved jobs only</li>
              <li>✅ Upload resumes easily</li>
              <li>✅ Track application status</li>
            </ul>
            <Link
              to="/register"
              className="inline-block mt-6 bg-emerald-500 text-white px-7 py-2 rounded-lg hover:bg-emerald-600 transition"
            >
              Start as Student
            </Link>
          </div>

          {/* RECRUITERS */}
          <div className="bg-white p-10 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              For Recruiters
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Post job openings</li>
              <li>✅ Admin approval for quality</li>
              <li>✅ Access skilled candidates</li>
              <li>✅ Manage postings easily</li>
            </ul>
            <Link
              to="/register"
              className="inline-block mt-6 bg-sky-500 text-white px-7 py-2 rounded-lg hover:bg-sky-600 transition"
            >
              Start Hiring
            </Link>
          </div>

        </div>
      </section>

      {/* ✅ FINAL CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-sky-600 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-5">
          Your Career Journey Starts Here
        </h2>
        <p className="mb-10 text-lg opacity-90">
          Join NaukriSpot and unlock real opportunities today.
        </p>

        <Link
          to="/register"
          className="bg-white text-emerald-700 px-12 py-3 font-bold rounded-lg hover:bg-gray-200 transition"
        >
          Create Free Account
        </Link>
      </section>

    </div>
  );
};

export default HomePage;
