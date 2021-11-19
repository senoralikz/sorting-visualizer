import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const BarSlider = ({ grabBarQuant }) => {
  const [numBars, setNumBars] = useState(25);

  const handleChange = (e) => {
    setNumBars(parseInt(e.target.value));
  };

  useEffect(() => {
    grabBarQuant(numBars);
  }, [grabBarQuant, numBars]);

  // grabBarQuant(numBars);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="50"
        value={numBars}
        onChange={handleChange}
      />
      <p className="footer-text">Number of Bars: {numBars}</p>
    </div>
  );
};

export default BarSlider;
