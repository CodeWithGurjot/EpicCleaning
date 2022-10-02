import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Box minH='100vh' bgColor={useColorModeValue('gray.100')}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
