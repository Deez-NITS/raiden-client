import './Register.scss';
import {Button} from '../../Components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = ()=>{
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');



    return (
        <section className='regPage'>
            <img src={'src/Resources/Images/background.svg'} className="background"/>
            <form>
                <h1><img src={'src/Resources/Images/logo.png'}/>Raiden</h1>
                <label>First Name
                    <input
                    placeholder='Your first name'
                    value = {fname}
                    onChange={(e)=>setFname(e.target.value)}
                    required
                    />
                </label>
                <label>Last Name
                    <input
                    placeholder='Your last name'
                    value = {lname}
                    onChange={(e)=>setLname(e.target.value)}
                    required
                    />
                </label>
                <label>Email
                    <input
                    placeholder='Your email Id'
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                </label>
                <label>Phone Number
                    <input
                    placeholder='Your cellphone number'
                    value = {phoneNo}
                    onChange={(e)=>setPhoneNo(e.target.value)}
                    required
                    />
                </label>  
                <label>Password
                    <input
                    placeholder='Your password'
                    value = {password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    required
                    />
                </label>           
                <label>Confirm Password
                    <input
                    placeholder='Confirm your password'
                    value = {passwordConfirm}
                    onChange={(e)=>setPasswordConfirm(e.target.value)}
                    type="password"
                    required
                    />
                </label>           
                <Button className="login-button" label="Sign up" primary={true}/>
                <span>already have an account?<Link to="#"> Log in</Link></span>  
            </form>
        </section>
    );
};

export default Register;