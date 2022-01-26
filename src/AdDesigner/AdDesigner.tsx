import { useState } from "react";
import "./AdDesigner.css";
export function AdDesigner() {
  const [flavor, setFlavor] = useState("Chocolate");
  const [color, setColor] = useState(false);
  const [pixel, setPixel] = useState(0);

  function addToFlavor() {
    setFlavor("Cherry");
    setColor(true);
  }

  function colorTheme() {
    if (color) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  function updateFontUp() {
    setPixel(pixel + 1);
  }

  function updateFontDown() {
    setPixel(pixel - 1);
  }

  //   const styles = {
  //     dark: pixel + "px",
  //     light: pixel + "px",
  //   };

  return (
    <div>
      <h1>Ad Designer</h1>
      <div className="para">
        <p onClick={addToFlavor}>Vote For</p>
        <h3 className="flav">{flavor}</h3>
      </div>

      <h2>What to Support</h2>
      <div className="flavorBtns">
        <button className="flavorBtn1" onClick={addToFlavor}>
          Chocolate
        </button>
        <button className="flavorBtn2" onClick={addToFlavor}>
          Venilla
        </button>
        <button className="flavorBtn3" onClick={addToFlavor}>
          Cherry
        </button>
      </div>

      <div>
        <h2>Color Theme</h2>
        <button className="light" onClick={colorTheme}>
          Light
        </button>
        <button className="dark" onClick={colorTheme}>
          Dark
        </button>
      </div>

      <h2 className="fontSize">Font Size</h2>
      <button className="updownBtn down" onClick={updateFontDown}>
        DOWN
      </button>
      <input
        className="pix"
        type="number"
        value={pixel}
        onChange={updateFontUp}
      />
      <button className="updownBtn up" onClick={updateFontUp}>
        UP
      </button>
      <div>
        <h1>Vote Here</h1>
        <button className="flavorBtn1" onClick={addToFlavor}>
          Chocolate
        </button>
        <button className="flavorBtn2" onClick={addToFlavor}>
          Venilla
        </button>
        <button className="flavorBtn3" onClick={addToFlavor}>
          Cherry
        </button>
      </div>
    </div>
  );
}
