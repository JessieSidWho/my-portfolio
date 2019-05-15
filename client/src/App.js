import React from 'react';
import NavBar from './components/NavBar';
import Name from './components/Name';
import './App.css';

function App() {
  return (
    <>
      <div className="row">
          <NavBar />   
      </div>

      <Name/>

      <div className="row bg-dark">
        <div className="col-md-12">
          
        </div>
      </div>

    </>
  );
}

export default App;
