import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React.JS Form</h1>
        <label>Escribe tu nombre</label>
        <input type="text" onChange={(e) => setText(e.target.value)}></input>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
