import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Match from "./Match";
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;