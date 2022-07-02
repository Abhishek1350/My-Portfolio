import React from "react";
import "./App.css";
import Header from "./components/navbar/Header"
import Home from "./components/home/Home"
import Spinner from "./components/spinner/Spinner"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/contact" element={<Spinner />} />
      </Routes>

    </Router>
  )
};

export default App;
