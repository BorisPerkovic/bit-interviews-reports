
/* login form validation class */
class LogInFormValidation {
  constructor( email, password){
    this.email = email;
    this.password = password;
  }

  /*============= 
    METHODS
  =============*/
  
  /* check if entered email input field is valid */
  emailIsValid () {
    const emailValid = this.email.trim() !== "" && this.email.includes("@");
    return emailValid;
  };

  /* check if entered password input field is valid */
  passwordIsValid () {
    const passwordValid = this.password.trim() !== "";
    return passwordValid;
  };

  /* check if form is valid - email and password are required */
  formIsValid () {
    const validForm = this.emailIsValid() && this.passwordIsValid();
    return validForm;
  }

};

export default LogInFormValidation;