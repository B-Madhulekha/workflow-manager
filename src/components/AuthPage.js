
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from 'axios';
import './AuthPage.css';

const API_URL = process.env.REACT_APP_API_URL;

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:2022/auth/login", { email, password });
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post("http://localhost:2022/auth/register", { name, email, password });
      setOpen(true);
    } catch (error) {
      setError('Registration failed');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setIsLogin(true);
    setEmail('');
    setPassword('');
    setName('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <Container className="auth-container">
      <Box className="content-wrapper">
        <Card className="card-container left-section">
          <CardContent className="auth-paper">
            <Typography variant="h4" gutterBottom>
              Welcome to Workflow Manager!
            </Typography>
            <Typography variant="body1" paragraph>
              Manage your tasks effortlessly with our user-friendly interface.
              Our tool helps you stay organized, prioritize your tasks, and boost
              your productivity.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you are working alone or collaborating with a team, our
              task manager provides the features you need to manage your workload
              efficiently.
            </Typography>
            <Typography variant="body1">
              Join us today and take the first step towards a more organized and
              productive you.
            </Typography>
            {/* <img src="G:\workflow-manager\frontend\src\components\5024147.jpg" alt="Description" style={{ width: '100%', height: 'auto' }} /> */}
            
          </CardContent>
        </Card>
        <Card className="card-container right-section">
          <CardContent className="auth-paper">
            <Box className={isLogin ? 'form-container' : 'form-container hidden'}>
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
              <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                Login
              </Button>
              <Button color="secondary" fullWidth onClick={handleFormSwitch}>
                Don't have an account? Register
              </Button>
            </Box>
            <Box className={!isLogin ? 'form-container' : 'form-container hidden'}>
              <Typography variant="h5" gutterBottom>
                Register
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
              <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                Register
              </Button>
              <Button color="secondary" fullWidth onClick={handleFormSwitch}>
                Already have an account? Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h6" className="success-text">
              <CheckCircleOutlineIcon className="success-icon" /> Your registration was
              successful!
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AuthPage;
