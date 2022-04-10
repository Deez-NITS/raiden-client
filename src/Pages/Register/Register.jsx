import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { registerUser } from "../../Global/Redux/Actions";
import { Button } from "../../Components";

import "./Register.scss";

const Register = ({ auth, register }) => {
  const [registerType, setRegisterType] = useState("user");
  const handleSelectUser = (e) => {
    e.preventDefault();
    setRegisterType("user");
  };
  const handleSelectProvider = (e) => {
    e.preventDefault();
    setRegisterType("provider");
  };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dob: "",
    email: "",
    gstin: "",
    airportCode: "",
  });

  const navigate = useNavigate();

  const handleFormInput = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...data } = formData;
    //! SET USER TYPE
    register({ ...data, type: registerType });
    navigate("/verify");
  };

  return (
    <section className="regPage">
      <img src={"/img/background.svg"} className="background" />
      <form onSubmit={handleFormSubmit}>
        <h1>
          <img src={"/img/logo.png"} />
          Raiden
        </h1>
        <label>
          Name
          <input
            placeholder="Your name"
            value={formData.name}
            onChange={handleFormInput}
            name="name"
          />
        </label>
        <label>
          Date of Birth
          <input
            placeholder="Your DOB"
            type={"date"}
            value={formData.dob}
            onChange={handleFormInput}
            name="dob"
          />
        </label>
        <label>
          Email
          <input
            placeholder="Your email Id"
            value={formData.email}
            onChange={handleFormInput}
            name="email"
          />
        </label>
        <label>
          Phone Number
          <input
            placeholder="Your cellphone number"
            value={formData.phoneNumber}
            onChange={handleFormInput}
            name="phoneNumber"
          />
        </label>
        {registerType === "provider" && (
          <>
            <label>
              GSTIN Number
              <input
                placeholder="GSTIN"
                value={formData.gstin}
                onChange={handleFormInput}
                name="gstin"
              />
            </label>
            <label>
              Airport Code
              <input
                placeholder="Airport Code"
                value={formData.airportCode}
                onChange={handleFormInput}
                name="airportCode"
              />
            </label>
          </>
        )}
        <label>
          Password
          <input
            placeholder="Your password"
            value={formData.password}
            onChange={handleFormInput}
            type="password"
            name="password"
          />
        </label>
        <label>
          Confirm Password
          <input
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleFormInput}
            name="confirmPassword"
            type="password"
          />
        </label>
        <div className="selectRegisterType">
          <button
            className="selectUser"
            name={registerType == "user" ? "active" : ""}
            onClick={(e) => handleSelectUser(e)}>
            User
          </button>
          <button
            className="selectProvider"
            name={registerType == "provider" ? "active" : ""}
            onClick={(e) => handleSelectProvider(e)}>
            Provider
          </button>
        </div>

        <Button className="register-button" label="Sign up" primary={true} />
        <span>
          already have an account?<Link to="/login"> Log in</Link>
        </span>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
