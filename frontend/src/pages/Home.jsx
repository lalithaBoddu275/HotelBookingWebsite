import React from 'react';
import Search from '../components/Search';   // go up one level
import Navbar from '../components/Navbar';   // go up one level
import FeaturedDestination from '../components/FeaturedDestination';
import Offers from '../components/Offers';
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <>
      
     
      <div className='mt-24 flex justify-center'>
      <Search />
      </div>
      <FeaturedDestination/>
      <Offers/>
      <Testimonial/>
      <NewsLetter/>
      
    </>
  );
};

export default Home;
