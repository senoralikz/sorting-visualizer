import React from "react";
import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import NewBars from "./NewBars";
import BarSlider from "./BarSlider";
import BarValues from "./BarValues";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import InsertionSort from "./InsertionSort";
import Timer from "./Timer";
import Alerts from "./Alerts";

const Footer = ({ grabBarQuant }) => {
  const [minBarValue, setMinBarValue] = useState(1);
  const [maxBarValue, setMaxBarValue] = useState(200);
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
  };

  return (
    <>
      <Stack>
        <Alerts showAlert={showAlert} setShowAlert={setShowAlert} />
        <footer className="d-flex justify-content-between">
          <NewBars />
          <BarSlider grabBarQuant={grabBarQuant} />
          <BarValues
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
