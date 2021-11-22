import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useCallback } from "react";
import Bars from "./components/Bars";
import Footer from "./components/Footer";

function App() {
  const [bars, setBars] = useState([]);
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

  const randomNumsFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const createBarArray = useCallback(() => {
    let array = [];

    for (let i = 0; i < numBars; i++) {
      array.push(randomNumsFromRange(minBarValue, maxBarValue));
    }
    setBars(array);
  }, [maxBarValue, minBarValue, numBars]);

  useEffect(() => {
    console.log("min val is", minBarValue);
  }, [minBarValue]);

  useEffect(() => {
    console.log("min val is", maxBarValue);
  }, [maxBarValue]);

  return (
    <>
      <Footer
        bars={bars}
        setBars={setBars}
        createBarArray={createBarArray}
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
          createBarArray={createBarArray}
          bars={bars}
          setBars={setBars}
          numBars={numBars}
          minBarValue={minBarValue}
          maxBarValue={maxBarValue}
        />
      </div>
    </>
  );
}

export default App;
