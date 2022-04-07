import "./Auth.scss";
import {Button} from '../../Components';
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Auth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
  <section className="authPage">
    <img src={'src/Resources/Images/background.svg'} className="background"/>
    <form>
      <h1><img src={'src/Resources/Images/logo.png'}/>Raiden</h1>
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
