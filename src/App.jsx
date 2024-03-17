import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./HomePage";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


