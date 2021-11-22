import React from "react";
import Stack from "react-bootstrap/Stack";
import NewBars from "./NewBars";
import BarSlider from "./BarSlider";
import BarValues from "./BarValues";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import InsertionSort from "./InsertionSort";
import BubbleSort from "./BubbleSort";
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
  createBarArray,
  bars,
  setBars,
}) => {
  return (
    <>
      <Stack>
        <Alerts showAlert={showAlert} setShowAlert={setShowAlert} />
        <footer className="d-flex justify-content-evenly pt-2 pb-2">
          <NewBars createBarArray={createBarArray} />
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
          {/* <Stack> */}
          <MergeSort />
          <QuickSort bars={bars} setBars={setBars} />
          {/* </Stack> */}
          {/* <Stack> */}
          <InsertionSort />
          <BubbleSort />
          {/* </Stack> */}
          <div className="v-divider align-self-center"></div>
          <Timer />
        </footer>
      </Stack>
    </>
  );
};

export default Footer;
