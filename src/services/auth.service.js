import { CANDIDATES_URL, LOGIN_URL, REPORTS_URL, BASE_URL} from "../constants/endpoints";

class AuthService {
  getToken() {
    const tokenObj = localStorage.getItem("token");
    if (tokenObj) {
      return tokenObj;
    }
    return false;
  }
  isTokenExpired(response){
    if (response.statusText === "Unauthorized") {
      alert("Your access token has expired, please log in.");
      window.location.assign("http://localhost:3000/login");
      return true;
    };
  };

  async getCandidates() {
    const tokenObj = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${tokenObj}` },
    };
    const response = await fetch(CANDIDATES_URL, requestOptions);
    if (response.statusText === "Unauthorized") {
      alert("Your access token has expired, please log in.");
      window.location.assign("http://localhost:3000/login");
      return;
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  }
  async getSingleCandidate(id) {
    const tokenObj = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${tokenObj}` },
    };
    const response = await fetch(CANDIDATES_URL + "/" + id, requestOptions);
    const data = await response.json();
    return data;
  }
  async getCandidatesReport() {
    const tokenObj = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${tokenObj}` },
    };
    const response = await fetch(REPORTS_URL, requestOptions);
    const data = await response.json();
    return data;
  }

  async requestLogin(setIsLoading, setErrorMessage, enteredEmail, enteredPassword) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword
      })}
    setIsLoading(true);
      const response = await fetch(LOGIN_URL, requestOptions);
        if(this.isTokenExpired(response)){
          return;
        }
            const data = await response.json();
            if(data === "Cannot find user" || data === "Incorrect password") {
              setIsLoading(false);
              setErrorMessage("Email or password are not correct!");
          } else {
              setIsLoading(false);
              localStorage.setItem("token", data.accessToken);
              window.location.assign(BASE_URL);
          }  
  }  
}

export const authService = new AuthService();
