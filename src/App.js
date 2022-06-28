import React from "react";
import "./App.css";
import Header from "./components/navbar/Header"
import Home from "./components/home/Home"
import Spinner from "./components/spinner/Spinner"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Spinner />} />
        <Route exact path="/projects" element={<Spinner />} />
        <Route exact path="/blogs" element={<Spinner />} />
        <Route exact path="/contact" element={<Spinner />} />
      </Routes>

    </Router>
  )
};

export default App;
