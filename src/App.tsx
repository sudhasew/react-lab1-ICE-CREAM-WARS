import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { AdDesigner } from "./AdDesigner/AdDesigner";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <AdDesigner></AdDesigner>
    </div>
  );
}

export default App;
