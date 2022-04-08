import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { verifyOtp } from "../../Global/Redux/Actions";
import { Button } from "../../Components";

import "./Verify.scss";
import { useEffect, useState } from "react";

const Verify = ({ auth, verify }) => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //! SET TYPE
    verify({ email: auth.user.email, otp, type: "user" });
  };

  const handleResendOTP = () => {};

  useEffect(() => {
    if (!auth.user?.email || auth.otpVerified) {
      navigate("/login");
    }
    if (auth.isAuthenticated) {
      navigate("/home");
    }
  }, [auth]);

  return (
    <section className="verifyPage">
      <img src={"src/Resources/Images/background.svg"} className="background" />
      <form onSubmit={handleFormSubmit}>
        <h1>
          <img src={"src/Resources/Images/logo.png"} />
          Raiden
        </h1>
        <label>
          A OTP has been sent to <br />
          {auth.user?.email}
        </label>
        <input
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          minLength={"8"}
          maxLength="20"
        />
        <Button className="login-button" label="Verify" primary={true} />
        <span>
          Did not recieve an OTP?{" "}
          <p
            style={{
              fontStyle: "italic",
              display: "inline",
              cursor: "pointer",
              color: "#4D8EF0",
            }}
            onClick={handleResendOTP}>
            click here
          </p>{" "}
          to resend OTP in 2:30
        </span>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  verify: (data) => dispatch(verifyOtp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
