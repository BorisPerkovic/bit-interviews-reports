import { httpParams } from "../../services/HttpParams.service";
import { tokenService } from "../../services/Token.service";
import { BASE_URL, REPORTS_URL, ADD_REPORT_URL, DELETE_REPORT } from "../../constants/endpoints";

class ReportsCommunicator {
  async getReports() {
    const header = httpParams.headerGET();
    const response = await fetch(BASE_URL + REPORTS_URL, header);
    tokenService.isTokenExpired(response);
    const data = await response.json();
    return data;
  }

  async deleteReport(id) {
    const header = httpParams.headerDELETE();
    const response = await fetch(BASE_URL + DELETE_REPORT + id, header);
    tokenService.isTokenExpired(response);
  }

  async getCandidatesReport(props) {
    const singleCandidateID = parseInt(props.match.params.id);
    const header = httpParams.headerGET();
    const response = await fetch(BASE_URL + REPORTS_URL, header);
    tokenService.isTokenExpired(response);
    const data = await response.json();
    const filteredReport = data.filter(
      (item) => parseInt(item.candidateId) === singleCandidateID
    );
    return filteredReport;
  }
  async createNewReport(props) {
    const payload = JSON.stringify(props);
    const header = httpParams.headerPOST(payload);
    const response = await fetch(BASE_URL + ADD_REPORT_URL, header);
    const data = await response.json();
    return data;
  }
}

export const reportsCommunicator = new ReportsCommunicator();
