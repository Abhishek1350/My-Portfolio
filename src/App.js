import React from "react";
import "./App.css";
import Header from "./components/navbar/Header"
import Home from "./components/home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import BlogPage from "./components/blogs/BlogPage";
import Contact from "./components/contact/Contact";
import Spinner from "./components/spinner/Spinner";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blogs/:slug" element={<BlogPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Spinner text="Page Not Found" hidden="hidden" show="show" />} />
      </Routes>

    </Router>
  )
};

export default App;
