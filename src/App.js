import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/Note/NoteState";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert messages="hi"/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
