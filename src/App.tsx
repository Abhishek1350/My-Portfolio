import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from "./containers"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
