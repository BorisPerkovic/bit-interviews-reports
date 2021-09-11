import { CANDIDATES } from "../constants/endpoints";

export class AuthService {
  getToken() {
    const tokenObj = localStorage.getItem("token");
    if (tokenObj) {
      return tokenObj;
    }
    return false;
  }

  async getCandidates() {
    const tokenObj = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${tokenObj}` },
    };
    const response = await fetch(CANDIDATES, requestOptions);
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
    const response = await fetch(CANDIDATES + "/" + id, requestOptions);
    const data = await response.json();
    return data;
  }
}
