import React from "react";
import "./App.css";

function App() {
  const logoUrl = "https://i.ibb.co/7zgP572/image.png"; // Replace with the URL of the online image

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoUrl} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
