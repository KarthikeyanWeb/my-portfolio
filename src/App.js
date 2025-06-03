import React from 'react';
import './index.css';
import './App.css';

import Home from './Components/Home/Home.js';
import Header from './Components/Home/Header.js';
import Footer from './Components/Home/Footer.js';
import About from './Components/Home/About.js';
import Skills from './Components/Home/Skills.js';
import Projects from './Components/Home/Projects.js';
import Contact from './Components/Home/Contact.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';



import { Routes, Route } from 'react-router-dom';





function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more pages like this */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
