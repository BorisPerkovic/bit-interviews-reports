import { REPORTS_URL, CANDIDATES_URL } from "../constants/endpoints.js";

class DataService {

  headerGET () {
    const tokenObj = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${tokenObj}` },
    };
    return requestOptions;
  }

  async getCandidates() {

    const header = this.headerGET();
    const response = await fetch(CANDIDATES_URL, header);
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


  async getCandidatesReport() {
    const header = this.headerGET();
    const response = await fetch(REPORTS_URL, header);
    const data = await response.json();
    return data;
  }

  async getSingleCandidate(id) {
    const header = this.headerGET();
    const response = await fetch(CANDIDATES_URL + "/" + id, header);
    const data = await response.json();
    return data;
  }
}

export const dataService = new DataService();


