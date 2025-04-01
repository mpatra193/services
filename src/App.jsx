import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Howitworks from './components/Howitworks';
import Calltoaction from './components/Calltoaction';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar  />
      <Hero  />
      <Feature  /> 
      <Howitworks  />
      <Calltoaction  />
      <Footer  />
    </>
  )
}

export default App
