// import React from 'react';
// import { Link } from 'react-router-dom';

// const Dashboards = () => {
//   return (
//     <div className="flex flex-col items-center p-6">
//       {/* Header Section */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold mb-2">Choose a Dashboard Template</h1>
//         <p className="text-gray-500">Get started with a Dashboard template or create a custom Dashboard to fit your exact needs.</p>
//       </div>

//       {/* Containers Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         {/* Container 1 */}
//         <Link to="/simple-dashboard" className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 flex items-start">
//           <img src="path-to-simple-dashboard-icon" alt="Simple Dashboard Icon" className="w-8 h-8 mr-4" />
//           <div>
//             <h2 className="text-xl font-semibold">Simple Dashboard</h2>
//             <p className="text-gray-600">Easily manage and prioritize daily tasks</p>
//           </div>
//         </Link>

//         {/* Container 2 */}
//         <Link to="/template-2" className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 flex items-start">
//           <img src="path-to-template-2-icon" alt="Template 2 Icon" className="w-8 h-8 mr-4" />
//           <div>
//             <h2 className="text-xl font-semibold">Template 2</h2>
//             <p className="text-gray-600">Description for Template 2</p>
//           </div>
//         </Link>

//         {/* Container 3 */}
//         <Link to="/template-3" className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 flex items-start">
//           <img src="path-to-template-3-icon" alt="Template 3 Icon" className="w-8 h-8 mr-4" />
//           <div>
//             <h2 className="text-xl font-semibold">Template 3</h2>
//             <p className="text-gray-600">Description for Template 3</p>
//           </div>
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Container 4 */}
//         <Link to="/template-4" className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 flex items-start">
//           <img src="path-to-template-4-icon" alt="Template 4 Icon" className="w-8 h-8 mr-4" />
//           <div>
//             <h2 className="text-xl font-semibold">Template 4</h2>
//             <p className="text-gray-600">Description for Template 4</p>
//           </div>
//         </Link>

//         {/* Container 5 */}
//         <Link to="/template-5" className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 flex items-start">
//           <img src="path-to-template-5-icon" alt="Template 5 Icon" className="w-8 h-8 mr-4" />
//           <div>
//             <h2 className="text-xl font-semibold">Template 5</h2>
//             <p className="text-gray-600">Description for Template 5</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboards;

// Dashboard.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// // Example image import
// import dashboardIcon from '../images/simple.png'; 
// import dashboardIcon1 from '../images/team-report.png'; 
// import dashboardIcon2 from '../images/time-track.png'; 
// import dashboardIcon3 from '../images/project-mgmt.png'; 
// import dashboardIcon4 from '../images/client-port.png'; 

// const Dashboards = () => {
//   const templates = [
//     {
//       title: 'Simple Dashboard',
//       description: 'Easily manage and prioritize daily tasks',
//       image: dashboardIcon,
//       link: '/simple-dashboard',
//     },
//     {
//       title: 'Team Reporting',
//       description: 'Encourage collaboration by viewing progress across team.',
//       image: dashboardIcon1,
//       link: '/template-2',
//     },
//     {
//       title: 'Time Tracking',
//       description: 'View and report on time tracking metrics.',
//       image: dashboardIcon2,
//       link: '/template-3',
//     },
//     {
//       title: 'Project Management',
//       description: 'Deep-dive on detailed projects from a central place.',
//       image: dashboardIcon3,
//       link: '/template-4',
//     },
//     {
//       title: 'Client Portal',
//       description: 'Chat and collaborate with clients on tasks and projects.',
//       image: dashboardIcon4,
//       link: '/template-5',
//     },
//   ];

//   return (
//     <div className="p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold">Choose a dashboard template</h1>
//         <p className="text-gray-500 text-sm">
//           Get started with a Dashboard template or create a custom Dashboard to fit your exact needs.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
//         {templates.map((template, index) => (
//           <Link
//             key={index}
//             to={template.link}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-2xl"
//             style={{ width: '300px', height: '250px' }}
//           >
//             <img src={template.image} alt={`${template.title} icon`} className="w-12 h-12 mb-4" />
//             <h3 className="text-2xl font-bold">{template.title}</h3>
//             <p className="text-gray-600 mt-2">{template.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboards;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Example image import
// import dashboardIcon from '../images/simple.png'; 
// import dashboardIcon1 from '../images/team-report.png'; 
// import dashboardIcon2 from '../images/time-track.png'; 
// import dashboardIcon3 from '../images/project-mgmt.png'; 
// import dashboardIcon4 from '../images/client-port.png'; 

// const Dashboards = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const templates = [
//     {
//       title: 'Simple Dashboard',
//       description: 'Easily manage and prioritize daily tasks',
//       image: dashboardIcon,
//       link: '/simple-dashboard',
//       onClick: () => setIsPopupVisible(true),
//     },
//     {
//       title: 'Team Reporting',
//       description: 'Encourage collaboration by viewing progress across team.',
//       image: dashboardIcon1,
//       link: '/template-2',
//     },
//     {
//       title: 'Time Tracking',
//       description: 'View and report on time tracking metrics.',
//       image: dashboardIcon2,
//       link: '/template-3',
//     },
//     {
//       title: 'Project Management',
//       description: 'Deep-dive on detailed projects from a central place.',
//       image: dashboardIcon3,
//       link: '/template-4',
//     },
//     {
//       title: 'Client Portal',
//       description: 'Chat and collaborate with clients on tasks and projects.',
//       image: dashboardIcon4,
//       link: '/template-5',
//     },
//   ];

//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div className="p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold">Choose a dashboard template</h1>
//         <p className="text-gray-500 text-sm">
//           Get started with a Dashboard template or create a custom Dashboard to fit your exact needs.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
//         {templates.map((template, index) => (
//           <div
//             key={index}
//             onClick={template.onClick}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
//             style={{ width: '300px', height: '250px' }}
//           >
//             <img src={template.image} alt={`${template.title} icon`} className="w-12 h-12 mb-4" />
//             <h3 className="text-2xl font-bold">{template.title}</h3>
//             <p className="text-gray-600 mt-2">{template.description}</p>
//           </div>
//         ))}
//       </div>

//       {isPopupVisible && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">What data do you want to visualize?</h2>
//             <p className="text-gray-600 mb-4">
//               ClickUp Dashboards help you visualize data from your tasks. Select a location(s) to source your data from.
//             </p>
//             <label className="block text-gray-700 mb-2">Location (Data source)</label>
//             <select className="w-full p-2 border border-gray-300 rounded mb-4">
//               <option>Project 1</option>
//               {/* Add more projects as needed */}
//             </select>
//             <div className="flex justify-between">
//               <button onClick={closePopup} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
//                 Cancel
//               </button>
//               <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                 Create Dashboard
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboards;

// import React, { useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Bar } from 'react-chartjs-2';

// const DashboardContent = () => {
//   return (
//     <div className="p-6">
//       {/* Full-width container */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h1 className="text-4xl font-bold">Welcome to ClickUp Dashboards</h1>
//         <p className="text-gray-600 mt-4">
//           Hey there! 👋<br />
//           Dashboards can work as your personal headquarters, client portal, and more. Click on <span className="font-bold">[Add card]</span> at the top right to customize and visualize what's in your Workspace.
//         </p>
//       </div>

//       {/* Three containers in a row */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
//           <h3 className="text-xl font-bold">Unassigned</h3>
//           <p className="text-3xl font-bold">0</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
//           <h3 className="text-xl font-bold">In Progress</h3>
//           <p className="text-3xl font-bold">10</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
//           <h3 className="text-xl font-bold">Completed</h3>
//           <p className="text-3xl font-bold">5</p>
//         </div>
//       </div>

//       {/* Two long containers in a row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
//           <h3 className="text-xl font-bold mb-4">Total tasks by Assignee</h3>
//           <Pie
//             data={{
//               labels: ['Unassigned'],
//               datasets: [{
//                 data: [100],
//                 backgroundColor: ['#FF6384'],
//               }]
//             }}
//             options={{
//               tooltips: {
//                 callbacks: {
//                   label: () => 'Unassigned: 100%',
//                 }
//               }
//             }}
//           />
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
//           <h3 className="text-xl font-bold mb-4">Open Tasks by Assignee</h3>
//           <Bar
//             data={{
//               labels: ['Unassigned'],
//               datasets: [{
//                 label: 'Open Tasks',
//                 data: [0],
//                 backgroundColor: '#FF6384',
//               }]
//             }}
//             options={{
//               tooltips: {
//                 callbacks: {
//                   label: () => 'Unassigned: 0',
//                 }
//               }
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Dashboards = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isDashboardCreated, setIsDashboardCreated] = useState(false);

//   const templates = [
//     {
//       title: 'Simple Dashboard',
//       description: 'Easily manage and prioritize daily tasks',
//       image: dashboardIcon,
//       onClick: () => setIsPopupVisible(true),
//     },
//     // other templates...
//     {
//             title: 'Team Reporting',
//             description: 'Encourage collaboration by viewing progress across team.',
//             image: dashboardIcon1,
//             link: '/template-2',
//           },
//           {
//             title: 'Time Tracking',
//             description: 'View and report on time tracking metrics.',
//             image: dashboardIcon2,
//             link: '/template-3',
//           },
//           {
//             title: 'Project Management',
//             description: 'Deep-dive on detailed projects from a central place.',
//             image: dashboardIcon3,
//             link: '/template-4',
//           },
//           {
//             title: 'Client Portal',
//             description: 'Chat and collaborate with clients on tasks and projects.',
//             image: dashboardIcon4,
//             link: '/template-5',
//           },
//   ];

//   const createDashboard = () => {
//     setIsDashboardCreated(true);
//     setIsPopupVisible(false);
//   };

//   if (isDashboardCreated) {
//     return <DashboardContent />;
//   }

//   return (
//     <div className="p-6">
//       {/* Existing code to display templates */}
//       {isPopupVisible && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">What data do you want to visualize?</h2>
//             <p className="text-gray-600 mb-4">
//               ClickUp Dashboards help you visualize data from your tasks. Select a location(s) to source your data from.
//             </p>
//             <label className="block text-gray-700 mb-2">Location (Data source)</label>
//             <select className="w-full p-2 border border-gray-300 rounded mb-4">
//               <option>Project 1</option>
//               {/* Add more projects as needed */}
//             </select>
//             <div className="flex justify-between">
//               <button onClick={() => setIsPopupVisible(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
//                 Cancel
//               </button>
//               <button onClick={createDashboard} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                 Create Dashboard
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboards;


import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Make sure to include this for chart.js

// Example image import
import dashboardIcon from '../images/simple.png'; 
import dashboardIcon1 from '../images/team-report.png'; 
import dashboardIcon2 from '../images/time-track.png'; 
import dashboardIcon3 from '../images/project-mgmt.png'; 
import dashboardIcon4 from '../images/client-port.png'; 

const Dashboards = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDashboardCreated, setIsDashboardCreated] = useState(false);

  const templates = [
    {
      title: 'Simple Dashboard',
      description: 'Easily manage and prioritize daily tasks',
      image: dashboardIcon,
      link: '/simple-dashboard',
      onClick: () => setIsPopupVisible(true),
    },
    {
      title: 'Team Reporting',
      description: 'Encourage collaboration by viewing progress across team.',
      image: dashboardIcon1,
      link: '/template-2',
    },
    {
      title: 'Time Tracking',
      description: 'View and report on time tracking metrics.',
      image: dashboardIcon2,
      link: '/template-3',
    },
    {
      title: 'Project Management',
      description: 'Deep-dive on detailed projects from a central place.',
      image: dashboardIcon3,
      link: '/template-4',
    },
    {
      title: 'Client Portal',
      description: 'Chat and collaborate with clients on tasks and projects.',
      image: dashboardIcon4,
      link: '/template-5',
    },
  ];

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const createDashboard = () => {
    setIsDashboardCreated(true);
    setIsPopupVisible(false);
  };

  if (isDashboardCreated) {
    return (
      <div className="p-6">
        {/* Full-width container */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold">Welcome to Workflow Dashboards</h1>
          <p className="text-gray-600 mt-4">
            Hey there! 👋<br />
            Dashboards can work as your personal headquarters, client portal, and more. Click on <span className="font-bold">[Add card]</span> at the top right to customize and visualize what's in your Workspace.
          </p>
        </div>

        {/* Three containers in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">Unassigned</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">In Progress</h3>
            <p className="text-3xl font-bold">10</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">Completed</h3>
            <p className="text-3xl font-bold">5</p>
          </div>
        </div>

        {/* Two long containers in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Total tasks by Assignee</h3>
            <Pie
              data={{
                labels: ['Unassigned'],
                datasets: [{
                  data: [100],
                  backgroundColor: ['#6B7280'],
                }]
              }}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: () => 'Unassigned: 100%',
                    }
                  }
                }
              }}
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Open Tasks by Assignee</h3>
            <Bar
              data={{
                labels: ['Unassigned'],
                datasets: [{
                  label: 'Open Tasks',
                  data: [0],
                  backgroundColor: '#6B7280',
                }]
              }}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: () => 'Unassigned: 0',
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Choose a dashboard template</h1>
        <p className="text-gray-500 text-sm">
          Get started with a Dashboard template or create a custom Dashboard to fit your exact needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {templates.map((template, index) => (
          <div
            key={index}
            onClick={template.onClick}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ width: '300px', height: '250px' }}
          >
            <img src={template.image} alt={`${template.title} icon`} className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold">{template.title}</h3>
            <p className="text-gray-600 mt-2">{template.description}</p>
          </div>
        ))}
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">What data do you want to visualize?</h2>
            <p className="text-gray-600 mb-4">
              ClickUp Dashboards help you visualize data from your tasks. Select a location(s) to source your data from.
            </p>
            <label className="block text-gray-700 mb-2">Location (Data source)</label>
            <select className="w-full p-2 border border-gray-300 rounded mb-4">
              <option>Project 1</option>
              <option>Project 2</option>
              {/* Add more projects as needed */}
            </select>
            <div className="flex justify-between">
              <button onClick={closePopup} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={createDashboard} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Create Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboards;
