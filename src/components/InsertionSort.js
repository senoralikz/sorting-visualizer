import React from "react";
import Button from "react-bootstrap/Button";

const InsertionSort = () => {
  const insertionSortButton = () => {
    console.log("insertion sort button");
  };

  return <Button onClick={insertionSortButton}>Insertion Sort</Button>;
};

export default InsertionSort;
