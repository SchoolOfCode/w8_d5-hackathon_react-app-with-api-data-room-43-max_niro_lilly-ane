import React, { useState, useEffect } from 'react';

function CatViewer() {
  const [cat, setCat] = useState();
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search`
      );
      const data = await response.json();
      setCat(data);
      console.log(data);
    }
    if (CatViewer !== undefined) {
      getData();
    }
  }, []);
  return (
    <div className="cat-viewer">
      <h1>Random cat picture for your enjoyment</h1>
      {cat && <img src={cat.data[0].url}></img>}
    </div>
  );
}

export default CatViewer;
