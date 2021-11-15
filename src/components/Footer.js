import React from "react";
// import Stack from "react-bootstrap/Stack";
import BarSlider from "./BarSlider";
import BarValues from "./BarValues";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import InsertionSort from "./InsertionSort";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between">
      {/* <Stack direction="horizontal" gap={3}> */}
      <BarSlider />
      <BarValues />
      <MergeSort />
      <QuickSort />
      <InsertionSort />
      <div className="v-divider align-self-center"></div>
      <div className="footer-text">Time Elapsed</div>
      {/* </Stack> */}
    </footer>
  );
};

export default Footer;
