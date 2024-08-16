import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowBackIos, ArrowForwardIos, Menu as MenuIcon, Check } from '@mui/icons-material';
import logo from './logo.png';
import manageProjectsImg from './manageProjects.png';  
import trackTasksImg from './trackTasks.png';
import viewReportsImg from './viewReports.png';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const cards = [
    {
      title: "Manage Projects",
      description: "Create and manage your projects effectively.",
      path: "/projects",
      color: "#FFFFFF",
      image: manageProjectsImg,
    },
    {
      title: "Track Tasks",
      description: "Keep track of your tasks and progress.",
      path: "/tasks",
      color: "#FFFFFF",
      image: trackTasksImg,
    },
    {
      title: "View Reports",
      description: "Generate and view detailed reports.",
      path: "/reports",
      color: "#FFFFFF",
      image: viewReportsImg,
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/auth');
    handleMenuClose();
  };

  return (
    <div className="homepage">
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Management
          </Typography>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onMouseLeave: handleMenuClose }}
            PaperProps={{
              sx: {
                '& .MuiMenuItem-root': {
                  width: '250px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 20px',
                  '&:hover': {
                    backgroundColor: '#f1f1f1',
                  },
                },
              },
            }}
          >
            <MenuItem component={Link} to="/contact">
              Contact
              <ListItemIcon>
                <Check fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleProfileClick}>
              Profile
              <ListItemIcon>
                <Check fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem component={Link} to="/about">
              About Us
              <ListItemIcon>
                <Check fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem component={Link} to="/help">
              Help
              <ListItemIcon>
                <Check fontSize="small" />
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Welcome to Workflow Manager
          </Typography>
          <Typography variant="body1" gutterBottom>
            Manage your tasks efficiently and stay organized. Get started by logging in or registering an account.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/auth">
            Get Started
          </Button>
        </Box>

        {/* Option Cards Section */}
        <Box sx={{ my: 4, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0 }}>
            <ArrowBackIos />
          </IconButton>
          <Paper
            sx={{
              padding: 4,
              backgroundColor: cards[currentCard].color,
              minWidth: '300px',
              maxWidth: '400px',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' },
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onClick={() => handleCardClick(cards[currentCard].path)}
          >
            <img src={cards[currentCard].image} alt={cards[currentCard].title} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
            <Typography variant="h6" gutterBottom>
              {cards[currentCard].title}
            </Typography>
            <Typography variant="body1">
              {cards[currentCard].description}
            </Typography>
          </Paper>
          <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0 }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>

        {/* Features Section */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Features
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="h6" gutterBottom>
                  Easy Task Management
                </Typography>
                <Typography variant="body1">
                  Organize your tasks with ease and improve your productivity.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="h6" gutterBottom>
                  Collaboration
                </Typography>
                <Typography variant="body1">
                  Work together with your team and manage projects efficiently.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="h6" gutterBottom>
                  Real-time Updates
                </Typography>
                <Typography variant="body1">
                  Stay up-to-date with real-time task tracking and notifications.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Testimonials
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="body1" gutterBottom>
                  "This tool has transformed the way we manage our projects. Highly recommend!"
                </Typography>
                <Typography variant="body2" align="right">
                  - Alex
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="body1" gutterBottom>
                  "A fantastic tool that keeps our team organized and on track."
                </Typography>
                <Typography variant="body2" align="right">
                  - Taylor
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Typography variant="body1" gutterBottom>
                  "The real-time updates and notifications are a game-changer for our workflow."
                </Typography>
                <Typography variant="body2" align="right">
                  - Jordan
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 3, textAlign: 'center', backgroundColor: '#3f51b5', color: 'white' }}>
        <Typography variant="body2">
          © 2024 Task Management. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default HomePage;

// import React from 'react';
// // import './App.css';

// function HomePage() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-2xl font-bold text-pink-500">
//             TASK <span className="text-blue-600">TRACKER</span>
//           </div>
//           <nav className="space-x-8 text-gray-600">
//             <a href="#" className="hover:text-pink-500">Home</a>
//             <a href="#" className="hover:text-pink-500">Features</a>
//             <a href="#" className="hover:text-pink-500">Pricing</a>
//             <a href="#" className="hover:text-pink-500">Clients</a>
//             <a href="#" className="hover:text-pink-500">Contact</a>
//             <a href="#" className="hover:text-pink-500">Sales Tracker</a>
//           </nav>
//           <div>
//             <select className="border-none text-gray-600">
//               <option>English</option>
//               {/* Add other languages as needed */}
//             </select>
//             <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded ml-4">Sign up</a>
//             <a href="#" className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded ml-2">Log in</a>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-12 flex justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-md w-2/3 flex justify-between">
//           <div className="w-1/2">
//             <h2 className="text-2xl font-semibold mb-4">Create Your Company Account</h2>
//             <form className="space-y-4">
//               <div className="flex space-x-4">
//                 <input type="text" placeholder="Company Name" className="w-1/2 p-2 border rounded" />
//                 <input type="email" placeholder="Email" className="w-1/2 p-2 border rounded" />
//               </div>
//               <div className="flex space-x-4">
//                 <input type="text" placeholder="First Name" className="w-1/2 p-2 border rounded" />
//                 <input type="text" placeholder="Last Name" className="w-1/2 p-2 border rounded" />
//               </div>
//               <div className="flex space-x-4">
//                 <select className="w-1/2 p-2 border rounded">
//                   <option value="+91">(+91) India</option>
//                   {/* Add other country options as needed */}
//                 </select>
//                 <input type="text" placeholder="Phone" className="w-1/2 p-2 border rounded" />
//               </div>
//               <div className="flex space-x-4">
//                 <input type="password" placeholder="Password" className="w-1/2 p-2 border rounded" />
//                 <select className="w-1/2 p-2 border rounded">
//                   <option>India Standard Time</option>
//                   {/* Add other timezone options as needed */}
//                 </select>
//               </div>
//               <div className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 <label>
//                   I agree to the <a href="#" className="text-blue-600">Terms and Conditions</a>
//                 </label>
//               </div>
//               <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4">Sign up for free</button>
//             </form>
//             <p className="mt-4">
//               Already have an account? <a href="#" className="text-pink-500">Log in</a>
//             </p>
//           </div>
//           <div className="w-1/2 flex items-center justify-center">
//             <div className="text-center">
//               <img src="https://placehold.co/150x150" alt="Illustration of creating an account" className="mb-4" />
//               <p className="text-gray-600 mb-2">Create a Company Account. This will be your main Admin Account.</p>
//               <p className="text-gray-600">Log in to your Company Account and add your team members.</p>
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer className="bg-blue-900 text-white py-8">
//         <div className="container mx-auto px-4 flex justify-between">
//           <div>
//             <div className="text-pink-500 text-xl font-bold">TASK TRACKER</div>
//             <div className="flex space-x-4 mt-4">
//               <i className="fab fa-facebook-f"></i>
//               <i className="fab fa-x-twitter"></i>
//               <i className="fab fa-instagram"></i>
//               <i className="fab fa-linkedin-in"></i>
//               <i className="fab fa-youtube"></i>
//             </div>
//             <div className="mt-4 flex space-x-4">
//               <a href="#"><img src="https://placehold.co/150x50" alt="Google Play Store" /></a>
//               <a href="#"><img src="https://placehold.co/150x50" alt="Apple App Store" /></a>
//             </div>
//           </div>
//           <div className="flex space-x-16">
//             <div>
//               <h5 className="font-semibold mb-2">Company</h5>
//               <ul>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Connect</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="font-semibold mb-2">Community</h5>
//               <ul>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Webinar</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Clients</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Become A Partner</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Help</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Refund & Cancellation</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="font-semibold mb-2">Contact</h5>
//               <ul>
//                 <li className="text-gray-400">Email: support@tasktracker.io</li>
//                 <li className="text-gray-400">Phone: +91 9318978470, +971 50 3894014</li>
//                 <li className="text-gray-400">Registered Office: Task Tracker, 4th F, NH-15, Pratap Nagar, Mayur Vihar Phase-1, East Delhi, Delhi, 110091 India</li>
//                 <li className="text-gray-400">CIN: U72900DL2021PTC366563</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;

// HomePage.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, TextField, Checkbox, FormControlLabel } from '@mui/material';
// import { Link } from 'react-router-dom';
// import './HomePage.css'; // Import the CSS file

// const HomePage = () => {
//   return (
//     <div>
//       <AppBar position="static" className="appBar">
//         <Toolbar className="toolbar">
//           <Typography variant="h6" className="workflowManager">
//             Workflow Manager
//           </Typography>
//           <div className="navLinks">
//             <Button component={Link} to="/" className="navButton">
//               Home
//             </Button>
//             <Button component={Link} to="/features" className="navButton">
//               Features
//             </Button>
//             <Button component={Link} to="/pricing" className="navButton">
//               Pricing
//             </Button>
//             <Button component={Link} to="/clients" className="navButton">
//               Clients
//             </Button>
//             <Button component={Link} to="/contact" className="navButton">
//               Contact
//             </Button>
//             <Button component={Link} to="/auth" className="navButton">
//               Sign In
//             </Button>
//             <Button component={Link} to="/signup" className="navButton">
//               Sign Up
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Container className="container">
//         <Grid container spacing={4} className="gridContainer">
//           <Grid item xs={12} md={6}>
//             <div className="form">
//               <Typography variant="h4" gutterBottom>
//                 Create Your Company Account
//               </Typography>
//               <TextField label="Company Name" fullWidth margin="normal" variant="outlined" />
//               <TextField label="Email" fullWidth margin="normal" variant="outlined" />
//               <TextField label="First Name" fullWidth margin="normal" variant="outlined" />
//               <TextField label="Last Name" fullWidth margin="normal" variant="outlined" />
//               <TextField label="Country" fullWidth margin="normal" variant="outlined" />
//               <TextField label="Phone" fullWidth margin="normal" variant="outlined" />
//               <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" />
//               <TextField label="Time Zone" fullWidth margin="normal" variant="outlined" />
//               <FormControlLabel
//                 control={<Checkbox color="primary" />}
//                 label="I agree to the Terms and Conditions"
//               />
//               <Button variant="contained" color="primary" fullWidth>
//                 Sign Up
//               </Button>
//               <Box textAlign="center" marginTop="20px">
//                 <Typography variant="body2">
//                   Already have an account? <Link to="/login">Log in</Link>
//                 </Typography>
//               </Box>
//             </div>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <div className="rightContent">
//               <Typography variant="h4" gutterBottom>
//                 Sign UpCreate a Company Account.
//               </Typography>
//               <Typography variant="body1" gutterBottom>
//                 This will be your main Admin Account. Log in to your Company Account and add your team members.
//               </Typography>
//               <Typography variant="body1" gutterBottom>
//                 If your company is already using Task Tracker, ask your manager to add you from the main Admin Account in Task Tracker.
//               </Typography>
//             </div>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;

