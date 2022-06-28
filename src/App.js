import React from "react";
import "./App.css";
import Header from "./components/navbar/Header"
import Spinner from "./components/spinner/Spinner"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Spinner/>}/>
      </Routes>

    </Router>
    )
};

export default App;
