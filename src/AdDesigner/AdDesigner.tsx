import { useState } from "react";
import "./AdDesigner.css";
export function AdDesigner() {
  const [flavors] = useState(["Cherry", "Chocolate", "Venilla"]);
  const [flavor, setFlavor] = useState("");
  const [color, setColor] = useState(true);
  const [pixel, setPixel] = useState(0);

  function addToFlavor() {
    for (let i = 0; i < flavors.length; i++) {
      setFlavor(flavors[i]);
    }
    // setColor(true);
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
      <div className="flavorBtns">
        <button className="flavorBtn1" onClick={addToFlavor}>
          {flavors[0]}
        </button>
        <button className="flavorBtn2" onClick={addToFlavor}>
          {flavors[1]}
        </button>
        <button className="flavorBtn3" onClick={addToFlavor}>
          {flavors[2]}
        </button>
      </div>
      {/* <div className="colorTheme">
        <button onClick={colorTheme}>{color}</button>
      </div> */}
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
      {/* <button onClick={addToFlavor}>{flavor}</button> */}
    </div>
  );
}
