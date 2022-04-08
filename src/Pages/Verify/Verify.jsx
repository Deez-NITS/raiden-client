import "./Verify.scss";
import { Button } from "../../Components";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <section className="verifyPage">
      <img src={"src/Resources/Images/background.svg"} className="background" />
      <form>
        <h1>
          <img src={"src/Resources/Images/logo.png"} />
          Raiden
        </h1>
        <label>
          An OTP has been sent to your email
        </label>
        <input placeholder="OTP" required minLength={"8"} maxlength="20" />
        <Button className="login-button" label="Verify" primary={true} />
        <span>
          Did not recieve an OTP? <Link to="#">click here</Link> to resend OTP
          in 2:30
        </span>
      </form>
    </section>
  );
};

export default Verify;
