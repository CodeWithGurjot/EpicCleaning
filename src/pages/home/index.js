import React from 'react';
import Announcement from '../../components/Announcement';
import HowItWorks from './components/HowItWorks';
import Landing from './components/Landing';
import QuoteForm from '../../components/QuoteForm';
import ReviewSlider from './components/ReviewSlider';
import ServiceSlider from './components/SeviceSlider';
import WhyEpic from './components/WhyEpic';

const Home = ({ quoteRef }) => {
  return (
    <>
      <Landing quoteRef={quoteRef} />
      <HowItWorks />
      <ServiceSlider />
      <ReviewSlider />
      <QuoteForm quoteRef={quoteRef} />
      <Announcement />
      <WhyEpic />
    </>
  );
};

export default Home;
