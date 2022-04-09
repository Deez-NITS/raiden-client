import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MdMenuOpen, MdMenu } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import { logoutUser } from "../../Global/Redux/Actions";

import "./Navbar.scss";

const Navbar = ({ auth, logout }) => {
  const [open, setOpen] = useState(false);
  const closeMen = () => {
    setOpen(false);
  };
  const openMen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={open ? "nav-open" : "nav-closed"}>
      {open && (
        <MdMenuOpen
          className="ham-icon"
          onClick={() => {
            closeMen();
          }}
        />
      )}
      {!open && (
        <MdMenu
          className="ham-icon"
          onClick={() => {
            openMen();
          }}
        />
      )}
      <Link to="#">Orders</Link>
      <Link to="#">Profile</Link>
      <Link to="#">Contact Us</Link>
      {auth.isAuthenticated && (
        <Link to="#" name="logout" onClick={handleLogout}>
          <BiLogOut /> &ensp; Log out
        </Link>
      )}
      {open && (
        <div
          className="nav-back"
          onClick={() => {
            closeMen();
          }}></div>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
