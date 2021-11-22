import React from "react";
import Button from "react-bootstrap/Button";

const BubbleSort = () => {
  const bubbleSortButton = () => {
    console.log("bubble sort button");
  };
  return (
    <Button
      className="sort-button align-self-center"
      onClick={bubbleSortButton}
    >
      Bubble Sort
    </Button>
  );
};

export default BubbleSort;
