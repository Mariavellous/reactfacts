import React from "react"
import Navbar from "./components/Navbar"
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Melanie Alzugray!
        </p>
      </header>
    </div>
  );
}

export default App;
