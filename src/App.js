import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import About from './About';
import Types from './Types';
import Footer from './Footer';


function App() {
  return ( 
    <div>
      <Navbar />
      <Slider />
      <About />
      <Types />
      <Footer />
    </div>
  );
}

export default App;
