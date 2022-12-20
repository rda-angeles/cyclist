import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const menuClicked = () => {
    setClick(!click);
  };

  const closeNav = () => {
    setClick(false);
  };

  return (
    <nav className="nav-wrapper ">
      {/* Nav Logo */}
      <div className="logo-wrapper">
        <Link to="/" className="nav-logo" onClick={closeNav}>
          CycList
        </Link>
      </div>

      {/* Burger Menu */}
      <div className="burger-menu-wrapper" onClick={menuClicked}>
        {click ? (
          <FaTimes color="white" size={25} />
        ) : (
          <FaBars color="white" size={25} />
        )}
      </div>
      {/* Nav Menus */}
      <ul className={click ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/about" className="nav-link" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-link" onClick={closeNav}>
            Service
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link" onClick={closeNav}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={closeNav}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
