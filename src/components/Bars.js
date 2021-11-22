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
  // const [bars, setBars] = useState([]);

  // const randomNumsFromRange = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };

  // const createBarArray = () => {
  //   let array = [];

  //   for (let i = 0; i < numBars; i++) {
  //     array.push(randomNumsFromRange(minBarValue, maxBarValue));
  //   }
  //   setBars(array);
  // };

  useEffect(() => {
    createBarArray();
    // console.log("this is the bars to be rendered", bars);
  }, [numBars]);

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
