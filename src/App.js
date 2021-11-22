import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Bars from "./components/Bars";
import Footer from "./components/Footer";

function App() {
  // const [bars, setBars] = useState([]);
  const [numBars, setNumBars] = useState(25);
  const [minBarValue, setMinBarValue] = useState(20);
  const [maxBarValue, setMaxBarValue] = useState(500);
  const [showAlert, setShowAlert] = useState(false);

  const handleBarSliderChange = (e) => {
    setNumBars(parseInt(e.target.value));
    // console.log("number of bars", numBars);
  };

  const handleMinValue = (e) => {
    parseInt(e.target.value) < parseInt(maxBarValue)
      ? setMinBarValue(parseInt(e.target.value))
      : // console.log("min val is", minBarValue)
        setShowAlert(true);
  };

  const handleMaxValue = (e) => {
    parseInt(e.target.value) > parseInt(minBarValue)
      ? setMaxBarValue(parseInt(e.target.value))
      : // console.log("min val is", maxBarValue)
        setShowAlert(true);
  };

  // useEffect(() => {
  //   console.log("number of bars", numBars);
  // }, [numBars]);

  useEffect(() => {
    console.log("min val is", minBarValue);
  }, [minBarValue]);

  useEffect(() => {
    console.log("min val is", maxBarValue);
  }, [maxBarValue]);

  // const grabBarQuant = (barAmount) => {
  //   console.log("number of bars", barAmount);
  //   return barAmount;
  // };

  // const grabMaxValue = (maxVal) => {
  //   console.log("max val is", maxVal);
  // return maxVal;
  // };

  // const createBarArray = () => {};

  return (
    <>
      <Footer
        numBars={numBars}
        minBarValue={minBarValue}
        maxBarValue={maxBarValue}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        handleBarSliderChange={handleBarSliderChange}
        handleMinValue={handleMinValue}
        handleMaxValue={handleMaxValue}
      />
      <header>Sorting Visualizer</header>
      <div className="bars d-flex justify-content-center align-items-end">
        <Bars
          numBars={numBars}
          minBarValue={minBarValue}
          maxBarValue={maxBarValue}
        />
      </div>
    </>
  );
}

export default App;
