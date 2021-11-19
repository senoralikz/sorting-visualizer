import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Bars from "./components/Bars";
import Footer from "./components/Footer";

function App() {
  const [bars, setBars] = useState();

  const grabBarQuant = (barAmount) => {
    console.log("number of bars", barAmount);
    setBars(barAmount);
  };

  return (
    <>
      <header>Sorting Visualizer</header>
      <Bars idk={bars} />
      <Footer grabBarQuant={grabBarQuant} />
    </>
  );
}

export default App;
