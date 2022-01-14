// 1. Import *useState* and *useEffect*
import React, { useState, useEffect } from 'react';
import './ApiViewer.css';

function CatViewer() {
  let [catImage, setCatImage] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      // 4. Setting *catimage* to the image url that we received from the response above
      .then((data) => setCatImage(data[0].url));
  }, []);

  function getCat() {
    window.location.reload(true);
  }

  return (
    <>
      <div className="ApiViewer">
        {catImage && <img className="photo" src={catImage}></img>}
      </div>
      <div>
        <button onClick={getCat}>Get a random cat picture!!</button>
      </div>
    </>
  );
}

export default CatViewer;
