/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Creation from "./pages/Creation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Creation" element={<Creation />} />
      </Routes>
    </div>
  );
}

export default App;
