import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="./logoLungoTrasp.png" alt="Logo" className="logo-image" />
        </Link>
      <Link to="/" className="logo-text">PIAZZA GRANDE</Link>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
          onClick={toggleMenu}
        >
          Chi Siamo
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
          onClick={toggleMenu}
        >
          Progetti
        </Link>
        <Link
          to="/goals"
          className={location.pathname === "/goals" ? "active" : ""}
          onClick={toggleMenu}
        >
          Obiettivi
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={toggleMenu}
        >
          Contatti
        </Link>
        <Link
          to="/donations"
          className={location.pathname === "/donations" ? "active" : ""}
          onClick={toggleMenu}
        >
          Sostienici
        </Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
