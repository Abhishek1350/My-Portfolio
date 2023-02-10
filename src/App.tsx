import './App.css';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home, Work, Blogs, BlogPage, Contact } from "./containers"
import { Navbar } from './components';

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
