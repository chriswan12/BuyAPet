import Homepage from "./Pages/Homepage/Homepage";
import Store from "./Pages/Store/Store";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "./App.css"; 
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="store" element={<Store />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-us" element={<About />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

