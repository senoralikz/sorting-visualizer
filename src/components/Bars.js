import React from "react";
import { useEffect } from "react";

const Bars = ({
  numBars,
  minBarValue,
  maxBarValue,
  bars,
  setBars,
  createBarArray,
}) => {
  useEffect(() => {
    createBarArray();
    // console.log("this is the bars to be rendered", bars);
  }, [createBarArray]);

  // console.log(bars);
  return bars.map((value, index) => (
    <div
      style={{
        backgroundColor: "grey",
        height: `${value}px`,
        margin: "0 2px",
        padding: "2px",
        width: "75%",
      }}
      key={index}
    >
      <p className="bar-value d-flex justify-content-center">{value}</p>
    </div>
  ));
};

export default Bars;
