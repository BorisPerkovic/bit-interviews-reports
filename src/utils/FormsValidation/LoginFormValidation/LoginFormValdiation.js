
/* login form validation class */
class LogInFormValidaion {
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
    if(emailValid) {
      return true;
    }
    return false;
  };

  /* check if entered password input field is valid */
  passwordIsValid () {
    const passwordValid = this.password.trim() !== "";
    if(passwordValid) {
      return true;
    }
    return false;
  };

  /* check if form is valid - email and password are required */
  formIsValid () {
    if(this.emailIsValid() && this.passwordIsValid()) {
      return true;
    }
    return false;
  }

};

export default LogInFormValidaion;