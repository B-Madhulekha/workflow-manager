// import React, { useState } from 'react';
// import { Container, Typography, TextField, Box, List, ListItem, ListItemText, Link } from '@mui/material';

// const HelpPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const faqs = [
//     { question: "How to reset my password?", answer: "To reset your password, go to the login page and click 'Forgot Password'. Follow the instructions sent to your registered email address." },
//     { question: "How to create a new project?", answer: "To create a new project, navigate to the 'Projects' section and click 'Create Project'. Fill in the required details and save." },
//     { question: "How can I track my task progress?", answer: "You can track your task progress in the 'Tasks' section. Use the progress bar to update your task status." },
//     { question: "How to contact customer support?", answer: "For any assistance, you can contact our customer support at support@example.com." },
//   ];

//   const filteredFaqs = faqs.filter(
//     faq => 
//       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Container sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
//       <Typography variant="h4" gutterBottom align="center">
//         Help & Support
//       </Typography>

//       <Box sx={{ marginBottom: '20px' }}>
//         <TextField
//           label="Search"
//           variant="outlined"
//           fullWidth
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </Box>

//       <List>
//         {filteredFaqs.length > 0 ? (
//           filteredFaqs.map((faq, index) => (
//             <ListItem key={index} sx={{ marginBottom: '10px' }}>
//               <ListItemText
//                 primary={<Typography variant="h6">{faq.question}</Typography>}
//                 secondary={<Typography variant="body1">{faq.answer}</Typography>}
//               />
//             </ListItem>
//           ))
//         ) : (
//           <Typography variant="body1">No results found.</Typography>
//         )}
//       </List>

//       <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
//         <Typography variant="body1">
//           For further queries, please contact us at{' '}
//           <Link href="mailto:support@example.com">support@example.com</Link>.
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default HelpPage;

import React, { useState } from 'react';
import { Typography, TextField, Box, List, ListItem, ListItemText, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  marginBottom: '15px',
  padding: '15px',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    transform: 'scale(1.02)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '20px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
  },
  '& .MuiOutlinedInput-input': {
    padding: '10px',
  },
}));

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    { question: "How to reset my password?", answer: "To reset your password, go to the login page and click 'Forgot Password'. Follow the instructions sent to your registered email address." },
    { question: "How to create a new project?", answer: "To create a new project, navigate to the 'Projects' section and click 'Create Project'. Fill in the required details and save." },
    { question: "How can I track my task progress?", answer: "You can track your task progress in the 'Tasks' section. Use the progress bar to update your task status." },
    { question: "How to contact customer support?", answer: "For any assistance, you can contact our customer support at support@example.com." },
    { question: "What are the system requirements?", answer: "Our tool is web-based and can be accessed from any modern browser. No specific system requirements are needed." },
    { question: "How to invite team members?", answer: "To invite team members, go to the 'Team' section and click 'Invite Members'. Enter their email addresses and send invitations." },
    { question: "How to delete a project?", answer: "To delete a project, navigate to the 'Projects' section, select the project, and click 'Delete'. Confirm the deletion when prompted." },
    { question: "Can I import tasks from a spreadsheet?", answer: "Yes, you can import tasks by going to the 'Tasks' section and using the 'Import' feature to upload a CSV file." },
    { question: "How to set up notifications?", answer: "You can set up notifications in the 'Settings' section under 'Notifications'. Customize your preferences as needed." },
    { question: "How do I update my profile information?", answer: "To update your profile, go to the 'Profile' section and click 'Edit Profile'. Make your changes and save them." },
    { question: "Is there a mobile app available?", answer: "Currently, we only offer a web-based application. Mobile support is planned for future updates." },
    { question: "How to recover a deleted task?", answer: "Once a task is deleted, it cannot be recovered. Please make sure to confirm before deleting any tasks." },
    { question: "How to use the calendar view?", answer: "The calendar view can be accessed from the 'Tasks' section. It provides a visual representation of your tasks and deadlines." },
    { question: "What is the maximum file size for uploads?", answer: "The maximum file size for uploads is 50MB. Larger files will need to be compressed or split." },
    { question: "How to integrate with other tools?", answer: "Integration options can be found in the 'Integrations' section under 'Settings'. Follow the instructions to connect with other tools." },
    { question: "How to view detailed reports?", answer: "Detailed reports are available in the 'Reports' section. You can generate and download reports based on your project data." },
    { question: "How to manage user permissions?", answer: "User permissions can be managed in the 'Team' section. Select a user and adjust their permissions as needed." },
    { question: "How to export data?", answer: "Data can be exported from various sections using the 'Export' button. Choose the desired format and download your data." },
    { question: "Can I customize the dashboard?", answer: "Yes, you can customize the dashboard by adding or removing widgets. Go to the 'Dashboard' section and click 'Customize'." },
    { question: "How to troubleshoot common issues?", answer: "Common troubleshooting steps are available in the 'Help' section. Refer to the guides or contact support if needed." },
    { question: "How to upgrade my plan?", answer: "To upgrade your plan, go to the 'Account' section and select 'Upgrade Plan'. Choose your preferred plan and follow the payment instructions." },
  ];

  const filteredFaqs = faqs.filter(
    faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: '30px', backgroundColor: '#e8f0f2', borderRadius: '12px', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '20px', color: '#333' }}>
        Help & Support
      </Typography>

      <StyledTextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <List>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <StyledListItem key={index}>
              <ListItemText
                primary={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>}
                secondary={<Typography variant="body1">{faq.answer}</Typography>}
              />
            </StyledListItem>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#666' }}>No results found.</Typography>
        )}
      </List>

      <Box sx={{ marginTop: '30px', textAlign: 'center' }}>
        <Typography variant="body1">
          For further queries, please contact us at{' '}
          <a href="mailto:support@example.com" style={{ color: '#1a73e8', textDecoration: 'underline' }}>support@example.com</a>.
        </Typography>
      </Box>
    </Box>
  );
};

export default HelpPage;
