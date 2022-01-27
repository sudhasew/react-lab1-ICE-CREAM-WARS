import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header/Header";
import { AdDesigner } from "./AdDesigner/AdDesigner";

import { Votes } from "./Votes/Votes";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <AdDesigner></AdDesigner>
      <Votes></Votes>
    </div>
  );
}

export default App;
