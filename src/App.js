
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>

      <div>

        <Navbar>
        </Navbar>
      
      </div>

    </Router>
  );
}

export default App;
