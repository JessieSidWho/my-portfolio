import React from 'react';
import NavBar from './components/NavBar';
import PagesContainer from './components/PagesContainer';
import './App.css';

function App() {
  return (
    <>
      <NavBar/>
      <div className="row">
        <div className="col-md-12">
          <PagesContainer/>
        </div>
      </div>
      
    </>
  );
}

export default App;
