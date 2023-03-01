import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Main />
        <p>
          Hello Melanie Alzugray!
        </p>
      </header>
    </div>
  );
}

export default App;
