import React from 'react';
import Intro from './components/Intro';
import AboutCard from './components/AboutCard';
import Philosophy from './components/Philosophy';
import QuoteForm from '../../components/QuoteForm';
import Announcement from '../../components/Announcement';

const About = ({ quoteRef }) => {
  return (
    <>
      <Intro />
      <AboutCard />
      <Philosophy />
      <QuoteForm quoteRef={quoteRef} />
      <Announcement />
    </>
  );
};

export default About;
