import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import {connect} from "react-redux"
import {loginUser, registerUser} from "../../Global/Redux/Actions"

import { Button } from "../../Components";
import "./Landing.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs"

const Landing = ({auth, login}) => {
  
  const [figures, setFigures] = useState({
    Happycustomers: 0,
    States: 0,
    Store: 0,
    App: 0,
  });

  const sponsors = ["","",""];

  const navigate = useNavigate();

  const redirectSignIn = () => {
    return navigate("/auth")
  }

  const redirectLogin = () => {
    return navigate("/auth")
  }

  return (  
    <section id="landingSection">
      <h1 id="heading">Raiden</h1>

      <div id = "authButtons">
        <Button onclickFunction = {redirectSignIn} primary = {true} label = {"SignUp"} />
        <Button onclickFunction={redirectLogin} primary = {false} label = {"login"} />
      </div>

      <div id="upperSection">
        <img src={'src/Resources/Images/background.svg'} id="background"/>
        <div id="subHeading">
          Make your meals wait for you
        </div>
        
        <div id="figuresContainer">
          {
            Object.keys(figures).map((key) => (
              <div id="figure">
                <div>{figures[key]}</div>
                <div>{key}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div id="lowerSection">
        <img src={'src/Resources/Images/background.svg'} id="background"/>

        <div id="sponsorsContainer">
          {
            sponsors.map((elem) => (
              <div className="sponsor">
                <a href={elem}>
                  <img src={elem} alt="" />
                </a>
              </div>
            ))
          }
        </div>

        <div id="contacts">
          <div id="contactHeading">Contact us</div>
          <a href="#" target="_blank" rel={"noreferrer"}>
            <img className="contactIcons" src="/src/Resources/Images/gmailLogo.png" alt="" />
          </a>
          <a href="#" target="_blank" rel={"noreferrer"}>
            <FaPhoneAlt id="phone" className="contactIcons"/>
          </a>
          <a href="#" target="_blank" rel={"noreferrer"}>
            <BsGithub className="contactIcons"/>
          </a>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(loginUser(data)),
  register: (data) => dispatch(registerUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);