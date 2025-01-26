import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useColorModeValue } from "@chakra-ui/react";

import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Box height="100vh" display="flex" flexDirection="column" bg={useColorModeValue("gray.100", "gray.900")}>
        {/* Navbar always visible */}
        <Navbar />
        {/* Routes to switch between pages */}
        <Box flex="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
