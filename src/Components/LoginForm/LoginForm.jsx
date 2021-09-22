import React, { useState, useRef } from "react";
import LogInFormValidation from "./LoginFormValidation/LoginFormValdiation";
import { authService } from "../../services/auth.service";
import Spinner from "../Spinner/Spinner";


import classes from "./LoginForm.module.css";
import Team from "./Team/Team";

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
        const formValid = new LogInFormValidation(enteredEmail, enteredPassword);

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
        <div className = {`container-fluid ${classes["form-bg"]}`}>
            <div className = "row align-items-center">
            <div className={`col-sm-6 col-md-7 col-xl-8 ${classes.bgImage}`}>
                <Team />
            </div>
            <div className="col-12 col-sm-6 col-md-5 col-xl-4 px-5">
                <div className="row">
                    <div className="col-10 col-sm-10 col-md-10 mx-auto pt-5">
                        <h1 className = "text-center text-primary mt-3">Log In</h1>
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
                            <button type="submit" className="btn btn-primary form-control my-3">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default LoginForm;