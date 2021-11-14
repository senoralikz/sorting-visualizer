import React from "react";
import { useState } from "react";
import Stack from "react-bootstrap/Stack";

const BarValues = () => {
  const [minBarValue, setMinBarValue] = useState(1);
  const [maxBarValue, setMaxBarValue] = useState(200);

  const handleMinValue = (e) => {
    setMinBarValue(e.target.value);
    console.log("min value is", e.target.value);
  };

  const handleMaxValue = (e) => {
    setMaxBarValue(e.target.value);
    console.log("max value is", e.target.value);
  };

  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <Stack>
          <p className="footer-text">Min Value </p>
          <input
            type="number"
            className="bar-value"
            value={minBarValue}
            onChange={handleMinValue}
          />
        </Stack>
        <Stack>
          <p className="footer-text">Max Value </p>
          <input
            type="number"
            className="bar-value"
            value={maxBarValue}
            onChange={handleMaxValue}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default BarValues;
