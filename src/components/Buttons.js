import React from "react";
import Button from "react-bootstrap/Button";

const Buttons = () => {
  const quickSortButton = () => {
    console.log("quick sort button");
  };

  const mergeSortButton = () => {
    console.log("merge sort button");
  };

  const insertionSortButton = () => {
    console.log("insertion sort button");
  };

  return (
    <>
      <Button onClick={quickSortButton}>Quick Sort</Button>
      <Button onClick={mergeSortButton}>Merge Sort</Button>
      <Button onClick={insertionSortButton}>Insertion Sort</Button>
    </>
  );
};

export default Buttons;
