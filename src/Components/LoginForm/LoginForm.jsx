import React, { useState } from "react";
import './LoginForm.module.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [form, setForm] = useState(false);

    const emailHandler = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        console.log(password);
    }
    
    const validEmail = email.trim() !== '' && email.includes('@');
    const validPassword = password.trim();

    const onSubmitHandler = (event) => {
        event.preventDefault();
            if(!validEmail){
                setForm(false)
                    return;
            }
            if(!validPassword){
                setForm(false)
                    return;
            }
        setForm(true);
        console.log(form);
    }

    return(
        <div className = 'container'>
            <div className = 'row'>
                <h1 className = "text-center">Login</h1>
            <form onSubmit = {onSubmitHandler}>
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