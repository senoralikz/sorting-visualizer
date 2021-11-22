import React from "react";
import Button from "react-bootstrap/Button";

const NewBars = ({ createBarArray }) => {
  return (
    <Button className="sort-button align-self-center" onClick={createBarArray}>
      Generate New Bars
    </Button>
  );
};

export default NewBars;
