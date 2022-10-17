import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Services from './pages/services';
import SingleService from './pages/services/components/SingleService';
import data from './data/services.json';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Box minH='100vh' w='100%' bgColor='gray.100'>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/services' element={<Services />} />

        {/*Single Service Routes */}
        {data.map((d) => (
          <Route
            key={d.id}
            exact
            path={`services/${d.link}`}
            element={
              <SingleService
                title={d.title}
                content={d.content}
                title2={d['title-2']}
                content2={d['content-2']}
                title3={d['title-3']}
                content3={d['content-3']}
                cardTitle={d['card-title']}
                cardContent={d['card-content']}
                title4={d['title-4']}
                content4={d['title-4']}
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
