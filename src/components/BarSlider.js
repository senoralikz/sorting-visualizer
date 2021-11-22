import React from "react";

const BarSlider = ({ numBars, handleBarSliderChange }) => {
  return (
    <div className="align-self-center">
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
