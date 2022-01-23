import React, { useState } from "react";
import "./css/global.css";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Service/Services";
import Testimonial from "./Pages/Testimonial/Testimonial";

const App = () => {
  const [open, setOpen] = useState(false);

  const openIcon = () => {
    setOpen(!open);
  };

  return (
    <Router>
      {open === true ? (
        <div className="Header">
          <div onClick={openIcon}>
            <img
              style={{ padding: "30px" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAmUlEQVRoge3ZsQ0CMRAFUYseOEH/lRAh0JFwAeXMBTggIMEE+2XNq+CPtNm2JikesAAP4FK9ZViP2Hi7Ve8ZAhyBZ494AafqTT8zIoURKYxIYUQKI1IYkcKIFEakmCKitdaAtUdswFK951A9oNyX0zpXbxpmTCpjUhmTyphUxqQyJpUxqYxJNVvM53v6Xr3nLz1mBa7VW6RZ7bzrwTlVIX5gAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
          <div className={"menu"}>
            <Link to={"/"} style={{ textDecoration: "none", color: "#EFFFFA" }}>
              <div className={"menu-item"}>
                <h3>Home</h3>
              </div>
            </Link>
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "#EFFFFA" }}
            >
              <div className={"menu-item"}>
                <h3>About</h3>
              </div>
            </Link>
            <Link
              to={"/service"}
              style={{ textDecoration: "none", color: "#EFFFFA" }}
            >
              <div className={"menu-item"}>
                <h3>Services</h3>
              </div>
            </Link>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "#EFFFFA" }}
            >
              <div className={"menu-item"}>
                <h3>Contact</h3>
              </div>
            </Link>
            <Link
              to={"/testimonial"}
              style={{ textDecoration: "none", color: "#EFFFFA" }}
            >
              <div className={"menu-item"}>
                <h3>Testimonial</h3>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div onClick={openIcon}>
          <img
            style={{ padding: "30px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAANUlEQVRoge3WwQ0AIAzEsML+Ox9LIFoke4I8UwUA1EqS7ogbdncAAAA8Y+MBAOA7Nh4AGOgAzbgL/m6MRWgAAAAASUVORK5CYII="
            alt={""}
          />
        </div>
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </Router>
  );
};

export default App;
