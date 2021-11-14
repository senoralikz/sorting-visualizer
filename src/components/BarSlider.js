import React from "react";
import { useState } from "react";

const BarSlider = () => {
  const [bars, setBars] = useState(25);

  const handleChange = (e) => {
    setBars(e.target.value);
    console.log("range value is", e.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="1"
        max="50"
        value={bars}
        onChange={handleChange}
      />
      <p className="bar-range-value">{bars}</p>
    </div>
  );
};

export default BarSlider;
