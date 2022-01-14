import react, { useState } from 'react';
import CatViewer from '../ApiViewer';
import CatFact from '../FactViewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome Cat Lovers!!</h1>
      <CatViewer />
      <CatFact />
    </div>
  );
}

export default App;
