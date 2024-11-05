

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [counts, setCounts] = useState({ total: 0, unplaced: 0, placed: 0 });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/students/counts'); 
        setCounts(response.data);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empower your future with cutting-edge skills
              <br /> Embrace innovation, master technology, & shape the digital world
              <br /> Your journey to success starts here.
            </h1>
          </div>
          <div className="md:w-1/3 space-y-4">
            <p className="text-lg text-gray-300">
              Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.
            </p>
          </div>
       </div>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <span className="px-4 py-2 bg-lime-500 rounded-full font-semibold text-black">Total Students</span>
            <span className="text-4xl font-bold mt-2">{counts.total}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="px-4 py-2 bg-lime-500 rounded-full font-semibold text-black">Placed Students</span>
            <span className="text-4xl font-bold mt-2">{counts.placed}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="px-4 py-2 bg-lime-500 rounded-full font-semibold text-black">Unplaced Students</span>
            <span className="text-4xl font-bold mt-2">{counts.unplaced}</span>
          </div>
        </div> 
        <footer className="flex justify-between items-center mt-16 text-gray-500 text-sm">
          <div className="font-bold text-lime-500 text-2xl">LearnHub</div>
          <p>© 2022 Tailwind Labs Inc. All rights reserved.</p>
          <div className="flex space-x-4">

          </div>
        </footer>
      </div>
    </div>
  );
};

export default HeroSection;
