import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Stack from "react-bootstrap/Stack";

const BarValues = () => {
  const [minBarValue, setMinBarValue] = useState(99);
  const [maxBarValue, setMaxBarValue] = useState(100);
  const [showAlert, setShowAlert] = useState(false);

  const handleMinValue = (e) => {
    parseInt(e.target.value) < parseInt(maxBarValue)
      ? setMinBarValue(parseInt(e.target.value))
      : setShowAlert(true);
  };

  const handleMaxValue = (e) => {
    parseInt(e.target.value) > parseInt(minBarValue)
      ? setMaxBarValue(parseInt(e.target.value))
      : setShowAlert(true);
    // console.log("max value is", e.target.value);
  };

  if (showAlert) {
    return (
      <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
        <p>min value cannot be greater than max value</p>
      </Alert>
    );
  }

  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <Stack>
          <p className="footer-text">Min Value </p>
          <input
            type="number"
            className="bar-value"
            min="1"
            value={minBarValue}
            onChange={handleMinValue}
          />
        </Stack>
        <Stack>
          <p className="footer-text">Max Value </p>
          <input
            type="number"
            className="bar-value"
            max="200"
            value={maxBarValue}
            onChange={handleMaxValue}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default BarValues;
