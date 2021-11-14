import React from "react";
import Button from "react-bootstrap/Button";

const QuickSort = () => {
  const quickSortButton = () => {
    console.log("quick sort button");
  };

  return <Button onClick={quickSortButton}>Quick Sort</Button>;
};

export default QuickSort;
