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
          A 4-digit OTp has been sent to <br />
          jo*******@****.com
        </label>
        <input placeholder="OTP" required maxlength="4" />
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
