import "./Navbar.scss";
import { Link } from "react-router-dom";
import { MdMenuOpen, MdMenu } from "react-icons/md";
import {BiLogOut} from "react-icons/bi";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMen =  ()=> {setOpen(false)};
  const openMen =  ()=> {setOpen(true)};

  return (
  <nav className={open?'nav-open':'nav-closed'}>
    {open && <MdMenuOpen className="ham-icon" onClick={()=>{closeMen()}}/>}
    {!open && <MdMenu className="ham-icon" onClick={()=>{openMen()}}/>}
    <Link to="#">Orders</Link>
    <Link to="#">Profile</Link>
    <Link to="#">Contact Us</Link>
    <Link to="#" name="logout"><BiLogOut/> &ensp; Log out</Link>
    {open && <div className="nav-back" onClick={()=>{closeMen()}}></div>}
  </nav>
  );
};

export default Navbar;
