import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { login } from '../services/AuthService'; // Adjust path if needed

const Background = styled('div')({
//   backgroundImage: 'url(/path-to-your-background-image.jpg)', // Path to your background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      console.log(response.data);
      // handle successful login, e.g., redirect to a dashboard
    } catch (error) {
      console.error(error);
      // handle error, e.g., show error message
    }
  };

  return (
    <Background>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </Background>
  );
};

export default Login;
