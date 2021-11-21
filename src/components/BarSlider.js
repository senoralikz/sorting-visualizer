import React from "react";
// import { useState, useEffect } from "react";

const BarSlider = ({ numBars, handleBarSliderChange }) => {
  // const [numBars, setNumBars] = useState(25);

  // const handleBarSliderChange = (e) => {
  //   setNumBars(parseInt(e.target.value));
  // };

  // useEffect(() => {
  //   grabBarQuant(numBars);
  // }, [grabBarQuant, numBars]);

  // grabBarQuant(numBars);

  return (
    <div>
      <input
        type="range"
        min="5"
        max="50"
        value={numBars}
        onChange={handleBarSliderChange}
      />
      <p className="footer-text">Number of Bars: {numBars}</p>
    </div>
  );
};

export default BarSlider;
