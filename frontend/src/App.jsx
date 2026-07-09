import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useColorModeValue } from "@chakra-ui/react";

import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthStore } from './store/auth';

function App() {
    const { user } = useAuthStore();
    const bg = useColorModeValue("gray.50", "gray.900");

    return (
        <Router>
            <Box height="100vh" display="flex" flexDirection="column" bg={bg}>
                <Navbar />
                {user ? (
                    <Flex flex="1" overflow="hidden">
                        <Sidebar />
                        <Box flex="1" overflow="auto">
                            <Routes>
                                <Route path="/" element={<DashboardPage />} />
                                <Route path="/products" element={<HomePage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </Box>
                    </Flex>
                ) : (
                    <Box flex="1">
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </Routes>
                    </Box>
                )}
            </Box>
        </Router>
    );
}

export default App;
