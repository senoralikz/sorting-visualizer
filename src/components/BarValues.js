import React from "react";
import Stack from "react-bootstrap/Stack";

const BarValues = ({
  minBarValue,
  maxBarValue,
  handleMinValue,
  handleMaxValue,
}) => {
  return (
    <div className="align-self-center">
      <Stack direction="horizontal" gap={3}>
        <Stack>
          <p className="footer-text">Min Value </p>
          <input
            type="number"
            className="min-max-value"
            min="20"
            value={minBarValue}
            onChange={handleMinValue}
          />
        </Stack>
        <Stack>
          <p className="footer-text">Max Value </p>
          <input
            type="number"
            className="min-max-value"
            max="500"
            value={maxBarValue}
            onChange={handleMaxValue}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default BarValues;
