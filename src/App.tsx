import React from "react";
import logo from "./assets/images/logo.svg";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react-typescript-seed-app</h1>
        <p>React Seed App Configured for TypeScript</p>
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          Installed Libraries: Material UI, TSLint, Prettier, node-sass
        </span>
        <br />
        <span>Setup done to use SCCS instead of CSS</span>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/reactjsexample"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore ReactJSExample at Github
        </a>
      </header>
    </div>
  );
};

export default App;
