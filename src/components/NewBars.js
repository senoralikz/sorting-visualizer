import React from "react";
import Button from "react-bootstrap/Button";

const NewBars = () => {
  const newBarsButton = () => {
    console.log("generating new bars");
  };

  return (
    <Button className="sort-button align-self-center" onClick={newBarsButton}>
      Generate New Bars
    </Button>
  );
};

export default NewBars;
