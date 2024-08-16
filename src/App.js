// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import Contact from './components/Contact';
import Profile from './components/Profile';
import DashboardPage from './components/DashBoard';
// import UploadedFiles from './components/UploadedFiles';
import AboutUs from './components/AboutUs';
import './index.css'
import HelpPage from './components/HelpPage';
import DownloadClip from './components/DownloadClip';
import AddProject from './components/AddProject';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/download-clip" element={<DownloadClip />} />
        {/* <Route path="/sidebar" */}
        {/* <Route path="projects" element={<ProjectsList />} />
        <Route path="settings" element={<DashboardSettings />} /> */}
        {/* <Route path="/dashboard/add-project" element={<AddProject />} /> */}
        {/* <Route path="/uploaded-files" element={<UploadedFiles />} /> */}
        {/* <Route path="/dashboard" element={<DashboardPage />}/> */}
     
    </Routes>
  </Router>
  // document.getElementById('root')
  );
};

export default App;

