import React from "react";
import Stack from "react-bootstrap/Stack";

const BarValues = ({
  minBarValue,
  maxBarValue,
  handleMinValue,
  handleMaxValue,
}) => {
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
