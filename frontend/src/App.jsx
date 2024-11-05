
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Form from './Form/adminFrom';
import Navbar from './home/Navbar';


const App = () => {

  
  return (
    <>
<Navbar/>
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/form" element={<Form />} />
    </Routes>

    <footer className="bg-black flex flex-col items-center  text-gray-500 text-sm">
  <div className="font-bold text-lime-500 text-2xl mb-2">LearnHub</div>
  <p className="text-center">© 2024 Tailwind Labs Inc. All rights reserved.</p>
  <div className="flex space-x-4 mt-2">

  </div>
</footer>
    </>
  );
};

export default App;
