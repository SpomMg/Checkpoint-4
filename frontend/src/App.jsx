import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Creation from "./pages/Creation";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Creation" element={<Creation />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
