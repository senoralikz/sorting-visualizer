import React from "react";
import Button from "react-bootstrap/Button";

const NewBars = ({ createBarArray }) => {
  // const newBarsButton = () => {
  //   console.log("generating new bars");
  // };

  return (
    <Button className="sort-button align-self-center" onClick={createBarArray}>
      Generate New Bars
    </Button>
  );
};

export default NewBars;
