import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { loginUser } from "../../Global/Redux/Actions";
import { Button } from "../../Components";

import "./Auth.scss";

const Auth = ({ auth, login }) => {

  const [loginType, setLoginType] = useState('user');
  const handleSelectUser = (e)=>{
      e.preventDefault();
      setLoginType('user');
  }
  const handleSelectProvider = (e)=>{
      e.preventDefault();
      setLoginType('provider');
  }

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
    await login({ ...formData, type: loginType });
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
        <div className="selectLoginType">
          <button className="selectUser" name={loginType=='user'?'active':''} onClick={(e)=>handleSelectUser(e)}>User</button>
          <button className="selectProvider" name={loginType=='provider'?'active':''} onClick={(e)=>handleSelectProvider(e)}>Provider</button>
        </div>

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
