import React, {useState} from "react";
import "./css/global.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import About from './Pages/About/About';
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Service/Services";
import Testimonial from "./Pages/Testimonial/Testimonial";

const App = () => {
  const [open, setOpen] = useState(false)

  const openIcon = () => {
    setOpen(!open)
  }

  return (
      <Router>
        <div onClick={openIcon} style={{animationDuration: "30s"}}>
          <img
          style={{padding: "30px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAANUlEQVRoge3WwQ0AIAzEsML+Ox9LIFoke4I8UwUA1EqS7ogbdncAAAA8Y+MBAOA7Nh4AGOgAzbgL/m6MRWgAAAAASUVORK5CYII=" />
        </div>

        {(open == true) ? 
        <header className="Header">

          <div className="bar" style={{
            
          }}>
            <Link to={"/"} style={{textDecoration: "none", color: "#EFFFFA"}}>
              <h3>Home</h3>
            </Link>
          </div>

        </header> 
        : null }

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/testimonial" element={<Testimonial />} />

        </Routes>
      </Router>
  );
}

export default App;
