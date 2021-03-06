import { tokenService } from "./Token.service";
import { LOGIN_URL, BASE_URL } from "../constants/endpoints";

class AuthService {
  async requestLogin(
    setIsLoading,
    setErrorMessage,
    enteredEmail,
    enteredPassword
  ) {
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
    };

    setIsLoading(true);
    const response = await fetch(BASE_URL + LOGIN_URL, requestOptions);
    if (tokenService.isTokenExpired(response)) {
      return;
    }
    const data = await response.json();
    if (data === "Cannot find user" || data === "Incorrect password") {
      setIsLoading(false);
      setErrorMessage("Email or password are not correct!");
    } else {
      setIsLoading(false);
      localStorage.setItem("token", data);
      window.location.assign("https://borisperkovic.github.io/bit-interviews-reports/");
    }
  }
}

export const authService = new AuthService();
