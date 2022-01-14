import React, { useState, useEffect } from 'react';
import './FactViewer.css';

function CatFact() {
  let [catFact, setCatFact] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts/random')
      .then((response) => response.json())

      .then((data) => setCatFact(data.text));
  }, []);

  function getFact() {
    window.location.reload(true);
  }

  return (
    <>
      <div className="FactViewer">
        <p>{catFact}</p>
      </div>
      <div>
        <button onClick={getFact}>Get a random cat Fact!!</button>
      </div>
    </>
  );
}

export default CatFact;
