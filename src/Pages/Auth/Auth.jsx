import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { loginUser } from "../../Global/Redux/Actions";
import { Button } from "../../Components";

import "./Auth.scss";

const Auth = ({ auth, login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleFormInput = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //! SET TYPE
    await login({ ...formData, type: "user" });
    navigate("/verify");
  };

  return (
    <section className="authPage">
      <img src={"src/Resources/Images/background.svg"} className="background" />
      <form onSubmit={handleFormSubmit}>
        <h1>
          <img src={"src/Resources/Images/logo.png"} />
          Raiden
        </h1>
        <label>Email</label>
        <input
          placeholder="example@exp.com"
          required
          value={formData.email}
          onChange={handleFormInput}
          name="email"
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={formData.password}
          onChange={handleFormInput}
          name="password"
        />
        <Button className="login-button" label="Login" primary={true} />
        <span>
          not registered yet? <Link to="/register">Sign up</Link>
        </span>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
