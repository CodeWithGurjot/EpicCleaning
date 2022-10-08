import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about/index';
import Home from './pages/home/index';
import Services from './pages/services';
import SingleService from './pages/services/components/SingleService';

const App = () => {
  const quoteRef = useRef(null);
  return (
    <Box minH='100vh' w='100%' bgColor={useColorModeValue('gray.100')}>
      <Navbar quoteRef={quoteRef} />
      <Routes>
        <Route path='/' element={<Home quoteRef={quoteRef} />} />
        <Route exact path='/about' element={<About quoteRef={quoteRef} />} />
        <Route exact path='/services' element={<Services />} />
        <Route path='/services/:id' component={<SingleService />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
