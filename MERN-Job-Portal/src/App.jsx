import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import PostJobForm from './components/PostJobForm';
import JobDetail from './components/JobDetail.jsx';
import Login from './components/Login';
import { isAuthenticated } from './auth/auth.js'; 
import SignUp from './components/SignUp.jsx';
import Profile from './components/Profile.jsx';
import Salary from './components/Salary.jsx';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authenticatedUser = isAuthenticated();
    setAuthenticated(authenticatedUser);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('/login') && navigate('/signup');
    }
  }, [authenticated, navigate]);

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    if(localStorage.removeItem){
      navigate('/login');
    }
    else{
      localStorage.setItem('token', token);
      navigate('/')
    }
  };

  return (
    <>
      <Navbar authenticated={authenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/postjob" element={<PostJobForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createprofile" element={<Profile />} />
        <Route path="/salary-estimate" element={<Salary />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
