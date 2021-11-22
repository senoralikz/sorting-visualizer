import React from "react";
import Stack from "react-bootstrap/Stack";
import NewBars from "./NewBars";
import BarSlider from "./BarSlider";
import BarValues from "./BarValues";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import InsertionSort from "./InsertionSort";
import Timer from "./Timer";
import Alerts from "./Alerts";

const Footer = ({
  minBarValue,
  maxBarValue,
  numBars,
  handleBarSliderChange,
  handleMinValue,
  handleMaxValue,
  showAlert,
  setShowAlert,
}) => {
  return (
    <>
      <Stack>
        <Alerts showAlert={showAlert} setShowAlert={setShowAlert} />
        <footer className="d-flex justify-content-evenly">
          <NewBars />
          <BarSlider
            numBars={numBars}
            handleBarSliderChange={handleBarSliderChange}
          />
          <BarValues
            numBars={numBars}
            minBarValue={minBarValue}
            maxBarValue={maxBarValue}
            handleMinValue={handleMinValue}
            handleMaxValue={handleMaxValue}
          />
          <MergeSort />
          <QuickSort />
          <InsertionSort />
          <div className="v-divider align-self-center"></div>
          <Timer />
        </footer>
      </Stack>
    </>
  );
};

export default Footer;
