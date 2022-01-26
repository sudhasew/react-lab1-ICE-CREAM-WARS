import { useState } from "react";
import "./AdDesigner.css";
export function AdDesigner() {
  //   const [flavors] = useState(["Cherry", "Chocolate", "Venilla"]);
  const [flavor, setFlavor] = useState("Cherry");
  const [color, setColor] = useState(true);
  const [pixel, setPixel] = useState(0);

  function addToCounter() {
    let setflavor = setFlavor("Chocolate");
    console.log(setflavor);
    //   setColor(true);
  }

  function colorTheme() {
    if (color) {
      setColor(true);
    }
  }

  //   let countUp = 0;
  //   function upButton() {
  //     countUp++;
  //   }
  function updateFontUp() {
    setPixel(pixel + 1);
  }

  function updateFontDown() {
    setPixel(pixel - 1);
  }

  //   const styles = {
  //     Up: pixel + "px",
  //     Down: pixel + "px",
  //   };

  return (
    <div>
      <h1>Ad Designer</h1>
      <p>Vote For</p>
      <h3 className="flav">{flavor}</h3>
      <h4>What to Support</h4>
      <div>
        <button onClick={addToCounter}>{flavor}</button>
      </div>
      <div className="colorTheme">
        <button onClick={colorTheme}>{color}</button>
      </div>
      <h2 className="fontSize">Font Size</h2>
      <button className="updownBtn up" onClick={updateFontUp}>
        UP
      </button>
      <input
        className="pix"
        type="number"
        value={pixel}
        onChange={updateFontUp}
      />
      <button className="updownBtn down" onClick={updateFontDown}>
        DOWN
      </button>
      {/* <h2>{color}</h2> */}
      {/* <button onClick={addToCounter}>Cherry</button> */}
    </div>
  );
}
