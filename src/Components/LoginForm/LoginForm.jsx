import React, { useState } from "react";
import './LoginForm.module.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        console.log(password);
    }

    return(
        <div className = 'container'>
            <div className = 'row'>
                <h1 className = "text-center">Login</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange = {emailHandler} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange = {passwordHandler} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>

        </div>
    )
};
export default LoginForm;