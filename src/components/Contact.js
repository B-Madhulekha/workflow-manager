import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const teamMembers = [
  { name: 'Java Team', email: 'java-team@example.com', color: '#f57f17' },
  { name: 'Python Team', email: 'python-team@example.com', color: '#388e3c' },
  { name: 'C++ Team', email: 'cpp-team@example.com', color: '#1976d2' },
  { name: 'Web Development Team', email: 'web-dev-team@example.com', color: '#e64a19' },
  { name: 'Database Team', email: 'db-team@example.com', color: '#7b1fa2' },
  { name: 'UI/UX Team', email: 'uiux-team@example.com', color: '#0288d1' },
  { name: 'DevOps Team', email: 'devops-team@example.com', color: '#c2185b' },
  { name: 'QA Team', email: 'qa-team@example.com', color: '#d32f2f' },
];

const StyledPaper = styled(Paper)(({ theme, color }) => ({
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  backgroundColor: color,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0px 8px 16px rgba(0, 0, 0, 0.2)`,
  },
}));

const ContactPage = () => {
  return (
    <Box sx={{ padding: '30px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '30px', color: '#333' }}>
        Contact Our Technical Teams
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledPaper color={member.color}>
              <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
                {member.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff' }}>
                Email: <a href={`mailto:${member.email}`} style={{ color: '#fff', textDecoration: 'underline' }}>{member.email}</a>
              </Typography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactPage;
