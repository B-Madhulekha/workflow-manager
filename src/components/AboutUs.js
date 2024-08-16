// import React from 'react';
// import { Container, Box, Typography, Grid, Paper } from '@mui/material';
// import aboutUsImage1 from './our mission.png';
// import aboutUsImage2 from './our vision.png';
// import aboutUsImage3 from './our value.png';
// // import './AboutUs.css';

// const AboutUs = () => {
//   const sections = [
//     {
//       title: "Our Mission",
//       description: "At Task Management, our mission is to empower teams to work more efficiently and achieve their goals. We believe in creating tools that are intuitive, reliable, and help streamline workflows.",
//       image: aboutUsImage1,
//       alignLeft: true,
//     },
//     {
//       title: "Our Vision",
//       description: "We envision a world where project management is seamless and enjoyable. Our vision is to provide a platform where users can easily collaborate, track progress, and celebrate success together.",
//       image: aboutUsImage2,
//       alignLeft: false,
//     },
//     {
//       title: "Our Values",
//       description: "Integrity, innovation, and customer satisfaction are at the core of our values. We are committed to delivering high-quality solutions that meet the evolving needs of our users.",
//       image: aboutUsImage3,
//       alignLeft: true,
//     },
//   ];

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom align="center">
//         About Us
//       </Typography>
//       {sections.map((section, index) => (
//         <Grid container spacing={4} key={index} className="about-us-section">
//           {section.alignLeft ? (
//             <>
//               <Grid item xs={12} md={6}>
//                 <Box display="flex" justifyContent="center">
//                   <img src={section.image} alt={section.title} className="about-us-image" />
//                 </Box>
//               </Grid>
//               <Grid item xs={12} md={6} className="about-us-content">
//                 <Paper elevation={3} sx={{ padding: 2 }}>
//                   <Typography variant="h5" gutterBottom>
//                     {section.title}
//                   </Typography>
//                   <Typography variant="body1">{section.description}</Typography>
//                 </Paper>
//               </Grid>
//             </>
//           ) : (
//             <>
//               <Grid item xs={12} md={6} className="about-us-content">
//                 <Paper elevation={3} sx={{ padding: 2 }}>
//                   <Typography variant="h5" gutterBottom>
//                     {section.title}
//                   </Typography>
//                   <Typography variant="body1">{section.description}</Typography>
//                 </Paper>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Box display="flex" justifyContent="center">
//                   <img src={section.image} alt={section.title} className="about-us-image" />
//                 </Box>
//               </Grid>
//             </>
//           )}
//         </Grid>
//       ))}
//     </Container>
//   );
// };

// export default AboutUs;

import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import aboutUsImage1 from './our mission.png';
import aboutUsImage2 from './our vision.png';
import aboutUsImage3 from './our value.png';

const AboutUs = () => {
  const sections = [
    {
      title: "Our Mission",
      description: "At Task Management, our mission is to empower teams to work more efficiently and achieve their goals. We believe in creating tools that are intuitive, reliable, and help streamline workflows.",
      image: aboutUsImage1,
      alignLeft: true,
    },
    {
      title: "Our Vision",
      description: "We envision a world where project management is seamless and enjoyable. Our vision is to provide a platform where users can easily collaborate, track progress, and celebrate success together.",
      image: aboutUsImage2,
      alignLeft: false,
    },
    {
      title: "Our Values",
      description: "Integrity, innovation, and customer satisfaction are at the core of our values. We are committed to delivering high-quality solutions that meet the evolving needs of our users.",
      image: aboutUsImage3,
      alignLeft: true,
    },
  ];

  return (
    <Container sx={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom align="center">
        About Us
      </Typography>
      {sections.map((section, index) => (
        <Grid container spacing={4} key={index} sx={{ marginY: 4, alignItems: 'center' }}>
          {section.alignLeft ? (
            <>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <img src={section.image} alt={section.title} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1">{section.description}</Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1">{section.description}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <img src={section.image} alt={section.title} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      ))}
    </Container>
  );
};

export default AboutUs;
