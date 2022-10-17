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
import data from './data/services.json';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Box minH='100vh' w='100%' bgColor={useColorModeValue('gray.100')}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/services' element={<Services />} />

        {/*Single Service Routes */}
        <Route
          exact
          path='/services/flood-restoration'
          element={
            <SingleService
              title={data[0].title}
              content={data[0].content}
              title2={data[0]['title-2']}
              content2={data[0]['content-2']}
              title3={data[0]['title-3']}
              content3={data[0]['content-3']}
              cardTitle={data[0]['card-title']}
              cardContent={data[0]['card-content']}
              title4={data[0]['title-4']}
              content4={data[0]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/window-cleaning'
          element={
            <SingleService
              title={data[1].title}
              content={data[1].content}
              title2={data[1]['title-2']}
              content2={data[1]['content-2']}
              title3={data[1]['title-3']}
              content3={data[1]['content-3']}
              cardTitle={data[1]['card-title']}
              cardContent={data[1]['card-content']}
              title4={data[1]['title-4']}
              content4={data[1]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/builder-cleaning'
          element={
            <SingleService
              title={data[2].title}
              content={data[2].content}
              title2={data[2]['title-2']}
              content2={data[2]['content-2']}
              title3={data[2]['title-3']}
              content3={data[2]['content-3']}
              cardTitle={data[2]['card-title']}
              cardContent={data[2]['card-content']}
              title4={data[2]['title-4']}
              content4={data[2]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/commercial-cleaning'
          element={
            <SingleService
              title={data[3].title}
              content={data[3].content}
              title2={data[3]['title-2']}
              content2={data[3]['content-2']}
              title3={data[3]['title-3']}
              content3={data[3]['content-3']}
              cardTitle={data[3]['card-title']}
              cardContent={data[3]['card-content']}
              title4={data[3]['title-4']}
              content4={data[3]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/office-cleaning'
          element={
            <SingleService
              title={data[4].title}
              content={data[4].content}
              title2={data[4]['title-2']}
              content2={data[4]['content-2']}
              title3={data[4]['title-3']}
              content3={data[4]['content-3']}
              cardTitle={data[4]['card-title']}
              cardContent={data[4]['card-content']}
              title4={data[4]['title-4']}
              content4={data[4]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/house-cleaning'
          element={<SingleService />}
          title={data[5].title}
          content={data[5].content}
          title2={data[5]['title-2']}
          content2={data[5]['content-2']}
          title3={data[5]['title-3']}
          content3={data[5]['content-3']}
          cardTitle={data[5]['card-title']}
          cardContent={data[5]['card-content']}
          title4={data[5]['title-4']}
          content4={data[5]['title-4']}
        />
        <Route
          exact
          path='/services/carpet-cleaning'
          element={
            <SingleService
              title={data[6].title}
              content={data[6].content}
              title2={data[6]['title-2']}
              content2={data[6]['content-2']}
              title3={data[6]['title-3']}
              content3={data[6]['content-3']}
              cardTitle={data[6]['card-title']}
              cardContent={data[6]['card-content']}
              title4={data[6]['title-4']}
              content4={data[6]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/spring-cleaning'
          element={
            <SingleService
              title={data[7].title}
              content={data[7].content}
              title2={data[7]['title-2']}
              content2={data[7]['content-2']}
              title3={data[7]['title-3']}
              content3={data[7]['content-3']}
              cardTitle={data[7]['card-title']}
              cardContent={data[7]['card-content']}
              title4={data[7]['title-4']}
              content4={data[7]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/oven-cleaning'
          element={
            <SingleService
              title={data[8].title}
              content={data[8].content}
              title2={data[8]['title-2']}
              content2={data[8]['content-2']}
              title3={data[8]['title-3']}
              content3={data[8]['content-3']}
              cardTitle={data[8]['card-title']}
              cardContent={data[8]['card-content']}
              title4={data[8]['title-4']}
              content4={data[8]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/vinyl-floor-stripping'
          element={
            <SingleService
              title={data[9].title}
              content={data[9].content}
              title2={data[9]['title-2']}
              content2={data[9]['content-2']}
              title3={data[9]['title-3']}
              content3={data[9]['content-3']}
              cardTitle={data[9]['card-title']}
              cardContent={data[9]['card-content']}
              title4={data[9]['title-4']}
              content4={data[9]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/end-of-tenancy-cleaning'
          element={
            <SingleService
              title={data[10].title}
              content={data[10].content}
              title2={data[10]['title-2']}
              content2={data[10]['content-2']}
              title3={data[10]['title-3']}
              content3={data[10]['content-3']}
              cardTitle={data[10]['card-title']}
              cardContent={data[10]['card-content']}
              title4={data[10]['title-4']}
              content4={data[10]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/industrial-cleaning'
          element={
            <SingleService
              title={data[11].title}
              content={data[11].content}
              title2={data[11]['title-2']}
              content2={data[11]['content-2']}
              title3={data[11]['title-3']}
              content3={data[11]['content-3']}
              cardTitle={data[11]['card-title']}
              cardContent={data[11]['card-content']}
              title4={data[11]['title-4']}
              content4={data[11]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/floor-tiles-cleaning'
          element={
            <SingleService
              title={data[12].title}
              content={data[12].content}
              title2={data[12]['title-2']}
              content2={data[12]['content-2']}
              title3={data[12]['title-3']}
              content3={data[12]['content-3']}
              cardTitle={data[12]['card-title']}
              cardContent={data[12]['card-content']}
              title4={data[12]['title-4']}
              content4={data[12]['title-4']}
            />
          }
        />
        <Route
          exact
          path='/services/upholstery-cleaning'
          element={
            <SingleService
              title={data[13].title}
              content={data[13].content}
              title2={data[13]['title-2']}
              content2={data[13]['content-2']}
              title3={data[13]['title-3']}
              content3={data[13]['content-3']}
              cardTitle={data[13]['card-title']}
              cardContent={data[13]['card-content']}
              title4={data[13]['title-4']}
              content4={data[13]['title-4']}
            />
          }
        />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
