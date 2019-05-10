import React from 'react';
import NavBar from './components/NavBar';
import PagesContainer from './components/PagesContainer';
import './App.css';

function App() {
  return (
    <>
      <div className="row bg-dark">
        <div className="col-md-12">
          <NavBar />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <PagesContainer />
        </div>
      </div>

    </>
  );
}

export default App;
