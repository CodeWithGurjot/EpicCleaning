import React, { useRef } from 'react';
import HowItWorks from '../components/HowItWorks';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import QuoteForm from '../components/QuoteForm';
import ReviewSlider from '../components/ReviewSlider';
import ServiceSlider from '../components/SeviceSlider';

const Home = () => {
  const quoteRef = useRef(null);
  return (
    <>
      <Navbar quoteRef={quoteRef} />
      <Landing quoteRef={quoteRef} />
      <HowItWorks />
      <ServiceSlider />
      <ReviewSlider />
      <QuoteForm quoteRef={quoteRef} />
    </>
  );
};

export default Home;
