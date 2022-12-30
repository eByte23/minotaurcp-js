import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <button
        onClick={() =>
          Minotaur.Actions.invokeAction("domain-manager.testfn", {
            variable1: "This is a value",
          })
        }
      >
        Run it
      </button>
      
    </div>
  );
}

export default App;
