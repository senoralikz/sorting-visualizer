import React from "react";
import Stack from "react-bootstrap/Stack";
import BarSlider from "./BarSlider";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import InsertionSort from "./InsertionSort";

const Footer = () => {
  return (
    <footer>
      <Stack direction="horizontal">
        <BarSlider />
        <MergeSort />
        <QuickSort />
        <InsertionSort />
      </Stack>
    </footer>
  );
};

export default Footer;
