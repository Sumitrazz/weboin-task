
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Form from './Form/adminFrom';


const App = () => {

  
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default App;
