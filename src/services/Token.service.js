
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
      window.location.assign("https://borisperkovic.github.io/bit-interviews-reports/login");
      return true;
    }
  }
}

export const tokenService = new TokenService();
