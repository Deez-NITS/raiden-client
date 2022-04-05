import "./Auth.scss";
import background from '../../Resources/Images/background.svg';
import logo from '../../Resources/Images/logo.png';
import {Button} from '../../Components';
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Auth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
  <section>
    <img src={background} className="background"/>
    <form>
      <h1><img src={logo}/>Raiden</h1>
      <label>Email</label>
      <input 
      placeholder="example@exp.com"
      required
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
      />
      <label>Password</label>
      <input 
      type="password"
      required
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      />
      <Button className="login-button" label="Login" primary={true}/>
      <span>not registered yet? <Link to="#">Sign up</Link></span>  
    </form>
  </section>
)
};

export default Auth;
