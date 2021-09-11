import React, { useState, useRef } from "react";
import Spinner from "../Spinner/Spinner";


import classes from "./LoginForm.module.css";

const LoginForm = () => {

    const [formValidaiton, setFormValidaiton] = useState({
        email : true,
        password: true
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setErrorMessage("");
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const emailValid = enteredEmail.trim() !== "" && enteredEmail.includes("@");
        const passwordValid = enteredPassword.trim() !== "";

        setFormValidaiton({
            email: emailValid,
            password: passwordValid
        });

        const formIsValid = emailValid && passwordValid;

        if(!formIsValid) {
            return;
        }

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword
            })
        };

        const logInRequest = async () => {
            setIsLoading(true);
            
            const response = await fetch("http://localhost:3333/login", requestOptions);
            const data = await response.json();
            if(data === "Cannot find user" || data === "Incorrect password") {
                setIsLoading(false);
                setErrorMessage("Email or password are not correct!");
            } else {
                setIsLoading(false);
                localStorage.setItem("token", data.accessToken);
                window.location.assign('http://localhost:3000/');
            }
        }
        logInRequest();
        

    };

    return(
        <div className = "container">
            <div className = {`row ${classes["row-form"]}`}>
            <div className="col-md-5 p-5 border rounded shadow">
                <h1 className = "text-center">Log In</h1>
                <form onSubmit = {onSubmitHandler}>
                    <div className={`my-5 ${!formValidaiton.email ? classes.invalid : ""}`}>
                        <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailInputRef} />
                        {!formValidaiton.email && <div id="emailHelp" className="form-text">Please, provide valid email address</div>}
                    </div>
                    <div className={`my-5 ${!formValidaiton.password ? classes.invalid : ""}`}>
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" ref = {passwordInputRef} />
                        {!formValidaiton.password && <div id="emailHelp" className="form-text">Please, provide valid password</div>}
                    </div>
                    {isLoading && <Spinner />}
                    <div className="py-3"><p className="text-center text-danger">{errorMessage}</p></div>
                    <button type="submit" className="btn btn-primary form-control mt-3">Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
};
export default LoginForm;