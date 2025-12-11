// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const NotificationsPage = () => {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     api.get("/notifications").then((res) => setList(res.data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-slate-800">
//           Notifications
//         </h2>

//         {list.length === 0 ? (
//           <p className="text-gray-500">No notifications yet.</p>
//         ) : (
//           <div className="space-y-3">
//             {list.map((n) => (
//               <div
//                 key={n._id}
//                 className="bg-white p-4 rounded-xl shadow border"
//               >
//                 <p className="text-sm text-gray-700">{n.message}</p>
//                 <p className="text-xs text-gray-400 mt-1">
//                   {new Date(n.createdAt).toLocaleString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;


// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const NotificationsPage = () => {
//   const [notifications, setNotifications] = useState([]);

//   // Load notifications
//   const loadNotifications = async () => {
//     const res = await api.get("/notifications");
//     setNotifications(res.data);
//   };

//   // Mark all as read
//   const markAllRead = async () => {
//     await api.put("/notifications/mark-read");
//   };

//   useEffect(() => {
//     loadNotifications();
//     markAllRead();   // 👈 AUTO READ WHEN PAGE OPENS
//   }, []);

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Notifications</h1>

//       {notifications.length === 0 ? (
//         <p className="text-gray-500">No notifications</p>
//       ) : (
//         <div className="space-y-3">
//           {notifications.map((n) => (
//             <div
//               key={n._id}
//               className={`p-4 border rounded-xl ${
//                 n.isRead ? "bg-gray-100" : "bg-yellow-50"
//               }`}
//             >
//               <p>{n.message}</p>
//               <p className="text-xs text-gray-400">
//                 {new Date(n.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationsPage;

import { useEffect, useState } from "react";
import api from "../api/axios";

const NotificationsPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await api.get("/notifications");
      setList(res.data);

      // ⭐ Mark all as READ when user opens the page
      await api.put("/notifications/mark-read");
    };

    load();
  }, []);

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Notifications</h2>

      {list.length === 0 ? (
        <p className="text-gray-500">No notifications</p>
      ) : (
        <div className="space-y-4">
          {list.map((n) => (
            <div
              key={n._id}
              className={`p-4 rounded-lg shadow ${
                n.isRead ? "bg-gray-100" : "bg-blue-100"
              }`}
            >
              {n.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
