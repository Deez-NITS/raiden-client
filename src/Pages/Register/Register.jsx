import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../Components";

import "./Register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dob: "",
    email: "",
  });

  const handleFormInput = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="regPage">
      <img src={"src/Resources/Images/background.svg"} className="background" />
      <form>
        <h1>
          <img src={"src/Resources/Images/logo.png"} />
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
          Last Name
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
        <Button className="login-button" label="Sign up" primary={true} />
        <span>
          already have an account?<Link to="/login"> Log in</Link>
        </span>
      </form>
    </section>
  );
};

export default Register;