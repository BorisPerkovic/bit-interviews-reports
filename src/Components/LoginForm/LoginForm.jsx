import React, { useState, useRef } from "react";
import LogInFormValidaion from "../../utils/FormsValidation/LoginFormValidation/LoginFormValdiation";
import { authService } from "../../services/auth.service";
import Spinner from "../Spinner/Spinner";


import classes from "./LoginForm.module.css";

/* Log in form JSX Component */
const LoginForm = () => {

    /* setting states */
    const [formValidaiton, setFormValidaiton] = useState({
        email : true,
        password: true
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    /* getting data from input fields using useRef hook */
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    
    /* function that is activate on log in button */
    const onSubmitHandler = (event) => {
        event.preventDefault();
        setErrorMessage("");

        /* getting data values from refs and creating instance for form valdiation */
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const formValid = new LogInFormValidaion(enteredEmail, enteredPassword);

        /* setting new states for input fields */
        setFormValidaiton({
            email: formValid.emailIsValid(),
            password: formValid.passwordIsValid()
        });

        /* check if form is valid - if it is not, display messages and stop script */
        if(!formValid.formIsValid()) {
            return;
        }
        
        /* authentication service for log in: 
            -check if users datas from input are match with database,
            -geting message response if email or password are wrong,
            -creating and set accesToken,
            -redirect user to landing page if everything is good   
        */
       authService.requestLogin(setIsLoading, setErrorMessage, enteredEmail, enteredPassword);

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
                    <button type="submit" className="btn btn-primary form-control mt-3">Log In</button>
                </form>
            </div>
            </div>
        </div>
    );
};
export default LoginForm;