import React from "react";
import Button from "react-bootstrap/Button";

const MergeSort = () => {
  const mergeSortButton = () => {
    console.log("merge sort button");
  };
  return (
    <Button className="sort-button" onClick={mergeSortButton}>
      Merge Sort
    </Button>
  );
};

export default MergeSort;
