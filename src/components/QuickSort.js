import React from "react";
import Button from "react-bootstrap/Button";

const QuickSort = ({ bars, setBars }) => {
  const quickSortButton = () => {
    console.log("quick sort button");
  };

  // const quickSort = () => {
  //   if (bars.length <= 1) {
  //     return bars;
  //   }
  //   const pivot = bars[0];

  //   const lessThan = bars.filter((element) => element < pivot);
  //   const greaterThan = bars.filter((element) => element > pivot);
  //   const equalTo = bars.filter((element) => element === pivot);

  //   const lessThanSorted = quickSort(lessThan);
  //   const greaterThanSorted = quickSort(greaterThan);

  //   setBars([...lessThanSorted, ...equalTo, ...greaterThanSorted]);
  // };

  return (
    <Button className="sort-button align-self-center" onClick={quickSortButton}>
      Quick Sort
    </Button>
  );
};

export default QuickSort;
