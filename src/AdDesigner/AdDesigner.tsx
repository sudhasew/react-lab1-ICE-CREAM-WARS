import { useState } from "react";
export function AdDesigner() {
  const [whatToSupport, setWhatToSupport] = useState("Chocolate");
  const [fontSize, setFontSize] = useState(18);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const styles = { fontSize: fontSize + "px" };
  return (
    <div>
      <h1>Ad Designer</h1>
      <div className={isLightTheme ? "ad light" : "ad dark"}>
        Vote For
        <h2 style={styles}>{whatToSupport}</h2>
      </div>

      <h3>What To Support</h3>
      <button onClick={() => setWhatToSupport("Chocolate")}>Chocolate</button>
      <button onClick={() => setWhatToSupport("Vanilla")}>Vanilla</button>
      <button onClick={() => setWhatToSupport("Strawberry")}>Strawberry</button>

      <h3>Color Theme</h3>
      <button onClick={() => setIsLightTheme(true)}>Light</button>
      <button onClick={() => setIsLightTheme(false)}>Dark</button>

      <h3>Font Size</h3>
      <button onClick={() => setFontSize(fontSize - 1)}>DOWN</button>
      <label>{fontSize}</label>
      <button onClick={() => setFontSize(fontSize + 1)}>UP</button>
    </div>
  );
}
