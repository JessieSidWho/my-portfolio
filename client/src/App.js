import React from 'react';
import NavBar from './components/NavBar';
import Name from './components/Name';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <NavBar />   
     <Name/>
     <About/>
     <Projects/>
     <Footer/>
    </>
  );
}

export default App;
