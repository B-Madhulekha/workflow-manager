// import React, { useState } from 'react';
// import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';

// const projectDomains = [
//   'Web Development',
//   'Mobile Development',
//   'Data Science',
//   'AI and Machine Learning',
//   'Cloud Computing',
//   'Cyber Security',
//   'Game Development',
//   'Internet of Things (IoT)',
//   'AR/VR',
//   'Blockchain',
//   // Add more domains if needed
// ];

// const AddProject = () => {
//   const [selectedDomain, setSelectedDomain] = useState('');
//   const [projectName, setProjectName] = useState('');

//   const handleDomainChange = (event) => {
//     setSelectedDomain(event.target.value);
//   };

//   const handleProjectNameChange = (event) => {
//     setProjectName(event.target.value);
//   };

//   const handleCreateProject = () => {
//     if (selectedDomain && projectName) {
//       // Handle project creation logic here
//       console.log(`Project Created: ${projectName} in ${selectedDomain}`);
//       setProjectName('');
//       setSelectedDomain('');
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Add New Project
//       </Typography>
//       <FormControl fullWidth sx={{ mt: 2 }}>
//         <InputLabel>Project Domain</InputLabel>
//         <Select value={selectedDomain} onChange={handleDomainChange} label="Project Domain">
//           {projectDomains.map((domain, index) => (
//             <MenuItem key={index} value={domain}>
//               {domain}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <TextField
//         label="Project Name"
//         fullWidth
//         margin="normal"
//         value={projectName}
//         onChange={handleProjectNameChange}
//       />
//       <Button variant="contained" color="primary" onClick={handleCreateProject}>
//         Create Project
//       </Button>
//     </Box>
//   );
// };

// export default AddProject;

import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';

const projectDomains = [
 'Web Development',
  'Mobile Development',
  'Data Science',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'DevOps',
  'UI/UX Design',
  'Blockchain',
  'Internet of Things',
  'Augmented Reality',
  'Virtual Reality',
  'Game Development',
  'E-commerce',
  'Digital Marketing',
  'Business Intelligence',
  'Healthcare IT',
  'Financial Technology',
  'Network Administration',
  'Embedded Systems',
];

const AddProject = () => {
  const [selectedDomain, setSelectedDomain] = useState('');
  const [projectName, setProjectName] = useState('');

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleCreateProject = () => {
    if (selectedDomain && projectName) {
      // Handle project creation logic here
      console.log(`Project Created: ${projectName} in ${selectedDomain}`);
      setProjectName('');
      setSelectedDomain('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '2rem'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          p: 3,
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: '#fff'
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Add New Project
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Project Domain</InputLabel>
          <Select
            value={selectedDomain}
            onChange={handleDomainChange}
            label="Project Domain"
          >
            {projectDomains.map((domain, index) => (
              <MenuItem key={index} value={domain}>
                {domain}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Project Name"
          fullWidth
          margin="normal"
          value={projectName}
          onChange={handleProjectNameChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateProject}
          fullWidth
        >
          Create Project
        </Button>
      </Box>
    </Box>
  );
};

export default AddProject;
