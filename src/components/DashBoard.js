// import React, { useState, useEffect } from 'react';
// import { Box, Button, Typography, Container, Paper, TextField, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { Edit, Delete } from '@mui/icons-material';
// import axios from 'axios';
// import './DashBoard.css';
// import SidebarMenu from './SidebarMenu';

// const DashboardPage = () => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);
//   const [taskName, setTaskName] = useState('');
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const [deadline, setDeadline] = useState('');
//   const [file, setFile] = useState(null);
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   useEffect(() => {
//     fetchTasks();
//     fetchUploadedFiles();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get('http://localhost:2022/tasks');
//       setTasks(response.data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const fetchUploadedFiles = async () => {
//     try {
//       const response = await axios.get('http://localhost:2022/upload/files');
//       setUploadedFiles(response.data);
//     } catch (error) {
//       console.error('Error fetching uploaded files:', error);
//     }
//   };

//   const handleAddTask = async () => {
//     if (taskName.trim() !== '') {
//       const newTask = { name: taskName, deadline };
//       try {
//         if (editingTaskId !== null) {
//           await axios.put(`http://localhost:2022/tasks/${editingTaskId}`, newTask);
//           setEditingTaskId(null);
//         } else {
//           await axios.post('http://localhost:2022/tasks', newTask);
//         }
//         fetchTasks();
//         setTaskName('');
//         setDeadline('');
//       } catch (error) {
//         console.error('Error adding/updating task:', error);
//       }
//     }
//   };

//   const handleEditTask = (task) => {
//     setTaskName(task.name);
//     setDeadline(task.deadline);
//     setEditingTaskId(task.id);
//   };

//   const handleDeleteTask = async (id) => {
//     try {
//       await axios.delete(`http://localhost:2022/tasks/${id}`);
//       fetchTasks();
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFileUpload = async () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const response = await axios.post('http://localhost:2022/upload', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         alert(`File ${file.name} uploaded successfully!`);
//         setFile(null);
//         fetchUploadedFiles();
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         alert('Error uploading file');
//       }
//     } else {
//       alert('Please select a file to upload.');
//     }
//   };

//   const handleFileDelete = async (fileName) => {
//     try {
//       await axios.delete(`http://localhost:2022/upload/files`, { params: { fileName } });
//       alert(`File ${fileName} deleted successfully!`);
//       fetchUploadedFiles();
//     } catch (error) {
//       console.error('Error deleting file:', error);
//       alert('Error deleting file');
//     }
//   };

//   const handleLogout = () => {
//     navigate('/');
//   };

//   return (
//     <Container className="dashboard-container">
//       <Typography variant="h4" gutterBottom>
//         Project Dashboard
//       </Typography>
//       <Box className="dashboard-content">
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <input type="file" onChange={handleFileChange} />
//           <Button variant="contained" color="secondary" onClick={handleFileUpload} sx={{ mt: 2 }}>
//             Upload File
//           </Button>
//         </Box>
//         <Box sx={{ display: 'flex', mt: 4 }}>
//           <Paper className="progress-chart" sx={{ flex: 1, mr: 2 }}>
//             <Typography variant="h6" className="chart-title">Project Progress Chart</Typography>
//             <Box className="chart-container">
//               <Box className="chart">
//                 <Typography className="chart-placeholder">Chart will be here</Typography>
//               </Box>
//             </Box>
//           </Paper>
//           <Paper className="task-list" sx={{ flex: 1, ml: 2 }}>
//             <Typography variant="h6">Task List</Typography>
//             <List>
//               {tasks.map((task) => (
//                 <ListItem key={task.id} secondaryAction={
//                   <Box>
//                     <IconButton edge="end" aria-label="edit" onClick={() => handleEditTask(task)}>
//                       <Edit />
//                     </IconButton>
//                     <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
//                       <Delete />
//                     </IconButton>
//                   </Box>
//                 }>
//                   <ListItemText
//                     primary={task.name}
//                     secondary={`Deadline: ${task.deadline}`}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//             <Divider />
//             <Box className="task-input">
//               <TextField
//                 label="Task Name"
//                 value={taskName}
//                 onChange={(e) => setTaskName(e.target.value)}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="Deadline"
//                 type="date"
//                 value={deadline}
//                 onChange={(e) => setDeadline(e.target.value)}
//                 fullWidth
//                 margin="normal"
//                 InputLabelProps={{ shrink: true }}
//               />
//               <Button variant="contained" color="primary" onClick={handleAddTask}>
//                 {editingTaskId !== null ? 'Update Task' : 'Add Task'}
//               </Button>
//             </Box>
//           </Paper>
//         </Box>
//         <Box sx={{ display: 'flex', mt: 4, flexDirection: 'column', alignItems: 'center' }}>
//           <Typography variant="h6">Uploaded Files</Typography>
//           <List>
//             {uploadedFiles.map((file, index) => (
//               <ListItem key={index} secondaryAction={
//                 <IconButton edge="end" aria-label="delete" onClick={() => handleFileDelete(file.fileName)}>
//                   <Delete />
//                 </IconButton>
//               }>
//                 <ListItemText
//                   primary={file.fileName}
//                   secondary={`Uploaded on: ${new Date(file.uploadTime).toLocaleString()}`}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Box>
//       <Button variant="outlined" color="secondary" onClick={handleLogout} sx={{ mt: 4 }}>
//         Logout
//       </Button>
//     </Container>
//   );
// };

// export default DashboardPage;
// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import SidebarMenu from './SidebarMenu'; // Import the SidebarMenu component
// // import './DashboardPage.css'; 

// const DashboardPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* Sidebar Menu */}
//       <SidebarMenu open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="sticky">
//           <Toolbar>
//             <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" sx={{ flexGrow: 1 }}>
//               Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>
        
//         <Box component="main" sx={{ p: 3 }}>
//           <Container>
//             <Typography variant="h4" gutterBottom>
//               Dashboard Content
//             </Typography>
//             {/* Add your dashboard content here */}
//           </Container>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardPage;

// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
//   Container,
//   Grid,
//   Paper,
//   Button,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import SidebarMenu from './SidebarMenu';

// const projectDomains = [
//   'Web Development',
//   'Mobile Development',
//   'Data Science',
//   'AI & Machine Learning',
//   'Cybersecurity',
//   'Cloud Computing',
//   'DevOps',
//   'UI/UX Design',
//   'Blockchain',
//   'Internet of Things',
//   'Augmented Reality',
//   'Virtual Reality',
//   'Game Development',
//   'E-commerce',
//   'Digital Marketing',
//   'Business Intelligence',
//   'Healthcare IT',
//   'Financial Technology',
//   'Network Administration',
//   'Embedded Systems',
// ];

// const DashboardPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [projects, setProjects] = useState([]);
//   const [selectedDomain, setSelectedDomain] = useState('');
//   const [showAddProjectForm, setShowAddProjectForm] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleAddProject = () => {
//     setShowAddProjectForm(true);
//   };

//   const handleSelectDomain = (event) => {
//     setSelectedDomain(event.target.value);
//   };

//   const handleCreateProject = () => {
//     if (selectedDomain) {
//       setProjects([...projects, { domain: selectedDomain, tasks: [] }]);
//       setSelectedDomain('');
//       setShowAddProjectForm(false);
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* Sidebar Menu */}
//       <SidebarMenu
//         open={sidebarOpen}
//         onClose={() => setSidebarOpen(false)}
//         onAddProject={handleAddProject} // Trigger the "Add Project" form
//       />

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="sticky">
//           <Toolbar>
//             <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" sx={{ flexGrow: 1 }}>
//               Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>

//         <Box component="main" sx={{ p: 3 }}>
//           <Container>
//             <Typography variant="h4" gutterBottom>
//               Dashboard Content
//             </Typography>

//             {/* Show Add Project Form */}
//             {showAddProjectForm && (
//               <Paper sx={{ p: 3, mb: 3 }}>
//                 <Typography variant="h6">Add New Project</Typography>
//                 <FormControl fullWidth sx={{ mt: 2 }}>
//                   <InputLabel>Project Domain</InputLabel>
//                   <Select
//                     value={selectedDomain}
//                     onChange={handleSelectDomain}
//                     label="Project Domain"
//                   >
//                     {projectDomains.map((domain, index) => (
//                       <MenuItem key={index} value={domain}>
//                         {domain}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2 }}
//                   onClick={handleCreateProject}
//                 >
//                   Create Project
//                 </Button>
//               </Paper>
//             )}

//             {/* Project List */}
//             <Grid container spacing={2}>
//               {projects.map((project, index) => (
//                 <Grid item xs={12} sm={6} key={index}>
//                   <Paper
//                     sx={{
//                       p: 2,
//                       ':hover': {
//                         boxShadow: 6,
//                         cursor: 'pointer',
//                       },
//                     }}
//                   >
//                     <Typography variant="h6">{project.domain}</Typography>
//                     {/* You can add task details or other project-specific content here */}
//                   </Paper>
//                 </Grid>
//               ))}
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardPage;

// import React, { useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import SidebarMenu from './SidebarMenu'; // Ensure this import is correct
// import AddProject from './AddProject';   // Ensure this import is correct

// const DashboardPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate(); // Use useNavigate hook

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Function to handle navigation
//   const handleNavigate = (path) => {
//     navigate(path);  
//     setSidebarOpen(false); 
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* Sidebar Menu */}
//       <SidebarMenu
//         open={sidebarOpen}
//         onClose={toggleSidebar} // Close sidebar
//         handleNavigate={handleNavigate} // Pass navigation handler
//       />

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="sticky">
//           <Toolbar>
//             <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" sx={{ flexGrow: 1 }}>
//               Dashboard
//             </Typography>
//           </Toolbar>
//         </AppBar>

//         <Box component="main" sx={{ p: 3 }}>
//           <Container>
//             <Routes>
//               <Route path="/" element={<div>Dashboard Home Content</div>} />
//               <Route path="add-project" element={<AddProject />} />
//               {/* Add more routes as needed */}
//             </Routes>
//           </Container>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DashboardPage;
// DashboardPage.js
// DashboardPage.js
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faInbox, faFileAlt, faChartBar, faVideo, faStopwatch, faFolder, faChevronDown, faFolderOpen, faList
// } from '@fortawesome/free-solid-svg-icons';
// import Divider from '@mui/material/Divider';
import Home from './Home';
import Docs from './Docs';
import Inbox from './Inbox';
import Clips from './Clips';
import Dashboards from './Dashboards';


// const DashboardPage = () => {
//   const [selectedMenu, setSelectedMenu] = useState('home');

//   const renderContent = () => {
//     switch (selectedMenu) {
//       case 'home':
//         return <Home />;
//       case 'inbox':
//         return <Inbox />;
//       case 'docs':
//         return <Docs />;
//       case 'dashboards':
//         return <Dashboards />;
//       case 'clips':
//         return <Clips />;
//       // case 'settings':
//       //   return <Settings />;
//       // case 'reports':
//       //   return <Reports />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="bg-gray-500 text-white w-1/4 p-4">
//         <h2 className="text-2xl font-bold mb-4">Menu</h2>
//         <ul>
//           <li
//             className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'home' ? 'bg-gray-700' : ''}`}
//             onClick={() => setSelectedMenu('home')}
//           >
//             <FontAwesomeIcon icon={faHome} className="mr-2 text-white" /> 
//             <span>Home</span>
//           </li>
//           <li
//             className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'inbox' ? 'bg-gray-700' : ''}`}
//             onClick={() => setSelectedMenu('inbox')}
//           >
//             <FontAwesomeIcon icon={faInbox} className="mr-2 text-white" /> 
//             <span>Inbox</span>
//           </li>
//           <li
//             className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'docs' ? 'bg-gray-700' : ''}`}
//             onClick={() => setSelectedMenu('docs')}
//           >
//             <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-white" /> 
//             <span>Docs</span>
//           </li>
//           <li
//             className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'dashboards' ? 'bg-gray-700' : ''}`}
//             onClick={() => setSelectedMenu('dashboards')}
//           >
//             <FontAwesomeIcon icon={faChartBar} className="mr-2 text-white" /> 
//             <span>Dashboards</span>
//           </li>
//           <li
//             className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'clips' ? 'bg-gray-700' : ''}`}
//             onClick={() => setSelectedMenu('clips')}
//           >
//             <FontAwesomeIcon icon={faVideo} className="mr-2 text-white" /> 
//             <span>Clips</span>
//           </li>
//           <li
//             className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'timesheets' ? 'bg-gray-700' : ''}`}
//             onClick={() => setSelectedMenu('timesheets')}
//           >
//             <FontAwesomeIcon icon={faStopwatch} className="mr-2 text-white" /> 
//             <span>Timesheets</span>
//           </li>
//           <Divider className="bg-gray-600 my-2" />
//           {/* <li
//             className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'reports' ? 'bg-gray-700' : ''}`}
//             onClick={() => setSelectedMenu('reports')}
//           >
//             <FontAwesomeIcon icon={faChartLine} className="mr-2 text-white" /> 
//             <span>Reports</span>
//           </li> */}
//          <h3 className="text-sm font-bold uppercase mb-2">Spaces</h3>
//         <ul>
//           <li
//             className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'everything' ? 'bg-gray-700' : ''}`}
//             onClick={() => setSelectedMenu('everything')}
//           >
//             <FontAwesomeIcon icon={faFolderOpen} className="mr-2 text-white" />
//             <span>Everything</span>
//           </li>
//           <li
//             className="p-2 flex items-center cursor-pointer"
//             onClick={() => setIsTeamSpaceOpen(!isTeamSpaceOpen)}
//           >
//             <FontAwesomeIcon icon={faFolder} className="mr-2 text-white" />
//             <span>Team Space</span>
//             <FontAwesomeIcon icon={faChevronDown} className="ml-auto text-white" />
//           </li>
//           {isTeamSpaceOpen && (
//             <ul className="pl-6">
//               <li className="p-2 flex items-center cursor-pointer">
//                 <FontAwesomeIcon icon={faFolderOpen} className="mr-2 text-white" />
//                 <span>Project 1</span>
//               </li>
//               <li className="p-2 flex items-center cursor-pointer">
//                 <FontAwesomeIcon icon={faFolderOpen} className="mr-2 text-white" />
//                 <span>Project 2</span>
//               </li>
//             </ul>
//           )}
//           <li className="p-2 flex items-center cursor-pointer">
//             <FontAwesomeIcon icon={faFolder} className="mr-2 text-white" />
//             <span>View All Spaces</span>
//           </li>
//         </ul>
//         </ul>
//       </div>
      

//       {/* Content Area */}
//       <div className="flex-1 p-4 overflow-auto">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faFileAlt, faTachometerAlt, faStopwatch, faFolder, faChevronDown, faFolderOpen, faList, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';
import { FaTimes } from 'react-icons/fa';

const DashboardPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [isTeamSpaceOpen, setIsTeamSpaceOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spaceName, setSpaceName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'home':
        return <Home />;
      case 'inbox':
        return <Inbox />;
      case 'docs':
        return <Docs />;
      case 'dashboards':
        return <Dashboards />;
      case 'clips':
        return <Clips />;
      // case 'settings':
      //   return <Settings />;
      // case 'reports':
      //   return <Reports />;
      default:
        return <Home />;
    }
  };

  const handleCreateSpace = () => {
    // Handle creating the space here
    console.log({ spaceName, description, isPrivate });
    // Close the modal after creation
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-500 text-white w-1/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          <li
            className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'home' ? 'bg-gray-700' : ''}`}
            onClick={() => setSelectedMenu('home')}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2 text-white" />
            <span>Home</span>
          </li>
          <li
            className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'inbox' ? 'bg-gray-700' : ''}`}
            onClick={() => setSelectedMenu('inbox')}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white" />
            <span>Inbox</span>
          </li>
          <li
            className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'docs' ? 'bg-gray-700' : ''}`}
            onClick={() => setSelectedMenu('docs')}
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-white" />
            <span>Docs</span>
          </li>
          <li
            className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'dashboards' ? 'bg-gray-700' : ''}`}
            onClick={() => setSelectedMenu('dashboards')}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2 text-white" />
            <span>Dashboards</span>
          </li>
          <li
            className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'clips' ? 'bg-gray-700' : ''}`}
            onClick={() => setSelectedMenu('clips')}
          >
            <FontAwesomeIcon icon={faList} className="mr-2 text-white" />
            <span>Clips</span>
          </li>
          <li
            className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'timer' ? 'bg-gray-700' : ''}`}
            onClick={() => setSelectedMenu('timer')}
          >
            <FontAwesomeIcon icon={faStopwatch} className="mr-2 text-white" />
            <span>Timesheets</span>
          </li>
        </ul>

        {/* Divider */}
        <hr className="my-4 border-gray-600" />

        {/* Spaces Subheading */}
        <h3 className="text-sm font-bold uppercase mb-2">Spaces</h3>
        <ul>
          <li
            className={`p-2 flex items-center cursor-pointer ${selectedMenu === 'everything' ? 'bg-gray-700' : ''}`}
            onClick={() => setSelectedMenu('everything')}
          >
            <FontAwesomeIcon icon={faFolderOpen} className="mr-2 text-white" />
            <span>Everything</span>
          </li>
          <li
            className="p-2 flex items-center cursor-pointer"
            onClick={() => setIsTeamSpaceOpen(!isTeamSpaceOpen)}
          >
            <FontAwesomeIcon icon={faFolder} className="mr-2 text-white" />
            <span>Team Space</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto text-white" />
          </li>
          {isTeamSpaceOpen && (
            <ul className="pl-6">
              <li className="p-2 flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faFolderOpen} className="mr-2 text-white" />
                <span>Project 1</span>
              </li>
              <li className="p-2 flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faFolderOpen} className="mr-2 text-white" />
                <span>Project 2</span>
              </li>
            </ul>
          )}
          <li className="p-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faFolder} className="mr-2 text-white" />
            <span>View All Spaces</span>
          </li>
          <li
            className="p-2 flex items-center cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2 text-white"/>
            <span>Create Space</span>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 overflow-auto">
        {renderContent()}
      </div>

      {/* Modal for Creating Space */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create a Space</h2>
              <FaTimes className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
            </div>
            <p>A Space represents teams, departments, or groups, each with its own Lists, workflows, and settings.</p>
            <div className="mt-4">
              <h3 className="text-sm font-bold mb-2">Icon & Name</h3>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                value={spaceName}
                onChange={(e) => setSpaceName(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="e.g., Marketing, Engineering, HR"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm mb-1">Description (Optional)</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="Description of the space"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <label className="block text-sm">Make Private</label>
              <Switch
                onChange={() => setIsPrivate(!isPrivate)}
                checked={isPrivate}
                className="react-switch"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCreateSpace}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;









