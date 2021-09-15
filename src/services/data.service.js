import { REPORTS_URL, CANDIDATES_URL } from "../constants/endpoints.js";
import { authService } from "./auth.service.js";

class DataService {
  headerGET() {
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
    authService.isTokenExpired(response);
    const data = await response.json();
    return data;
  }

  async getReports() {
    const header = this.headerGET();
    const response = await fetch(REPORTS_URL, header);
    authService.isTokenExpired(response);
    const data = await response.json();
    return data;
  }

  async getCandidatesReport(props) {
    const singleCandidateID = parseInt(props.match.params.id);
    const header = this.headerGET();
    const response = await fetch(REPORTS_URL, header);
    authService.isTokenExpired(response);
    const data = await response.json();
    const filteredReport = data.filter(
      (item) => item.candidateId === singleCandidateID
    );
    return filteredReport;
  }

  async getSingleCandidate(props) {
    const singleCandidateID = props.match.params.id;
    const header = this.headerGET();
    const response = await fetch(
      CANDIDATES_URL + "/" + singleCandidateID,
      header
    );
    authService.isTokenExpired(response);
    const data = await response.json();
    return data;
  }
}

export const dataService = new DataService();
