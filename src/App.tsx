import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <About></About>
      </header>
      <Hero></Hero>
    </div>
  );
}

export default App;
