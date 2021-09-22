class TokenService {
  getToken() {
    const tokenObj = localStorage.getItem("token");
    if (tokenObj) {
      return tokenObj;
    }
    return false;
  }

  isTokenExpired(response) {
    if (response.statusText === "Unauthorized") {
      alert("Your access token has expired, please log in.");
      window.location.assign("http://localhost:3000/login");
      return true;
    }
  }
}

export const tokenService = new TokenService();
