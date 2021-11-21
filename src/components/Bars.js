import React from "react";
import { useState, useEffect } from "react";

const Bars = ({ numBars, minBarValue, maxBarValue }) => {
  const [bars, setBars] = useState([]);

  const randomNumsFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const createBarArray = () => {
    let array = [];

    for (let i = 0; i < numBars; i++) {
      array.push(randomNumsFromRange(minBarValue, maxBarValue));
    }
    setBars(array);
  };

  useEffect(() => {
    createBarArray();
    // console.log("this is the bars to be rendered", bars);
  }, [numBars]);

  // console.log(bars);
  return bars.map((value, index) => (
    <div
      style={{ borderLeft: "7px solid grey", height: `${value}px` }}
      key={index}
    >
      {value}
    </div>
  ));

  // return (
  //   <div>
  //     {idk.map((entry) => (
  //       <div>{entry}</div>
  //     ))}
  //   </div>
  // );
};

export default Bars;
