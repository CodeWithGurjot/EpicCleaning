import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Services from './pages/services';
import SingleService from './pages/services/components/SingleService';

const App = () => {
  return (
    <Box minH='100vh' w='100%' bgColor={useColorModeValue('gray.100')}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/services/:id' element={<SingleService />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
