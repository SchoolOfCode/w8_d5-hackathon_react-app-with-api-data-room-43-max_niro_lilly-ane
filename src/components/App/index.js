import react, { useState } from 'react';
import CatViewer from '../ApiViewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome Cat Lovers!!</h1>
      <CatViewer />
    </div>
  );
}

export default App;
