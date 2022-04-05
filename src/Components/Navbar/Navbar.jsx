import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {


  return (
  <nav>
    <FaHamburger className="ham-icon"/>
    <Link to="#">Orders</Link>
    <Link to="#">Profile</Link>
    <Link to="#">Contact Us</Link>
    <Link to="#">Log out</Link>
  </nav>
  );
};

export default Navbar;
