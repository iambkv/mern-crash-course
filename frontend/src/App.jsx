import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useColorModeValue } from "@chakra-ui/react";

import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';
import { useAuthStore } from './store/auth';

function App() {
  const { user } = useAuthStore();

  return (
    <Router>
      <Box height="100vh" display="flex" flexDirection="column" bg={useColorModeValue("gray.100", "gray.900")}>
        {/* Navbar always visible */}
        <Navbar />
        {/* Routes to switch between pages */}
        <Box flex="1">
          <Routes>
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />
            <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/create" element={user ? <CreatePage /> : <Navigate to="/login" />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
