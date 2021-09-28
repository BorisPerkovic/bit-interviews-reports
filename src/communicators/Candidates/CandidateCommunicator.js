import { httpParams } from "../../services/HttpParams.service";
import { tokenService } from "../../services/Token.service";
import { BASE_URL, CANDIDATES_URL, SINGLE_CANDIDATES_URL } from "../../constants/endpoints";

class CandidateCommunicator {
  async getCandidates() {
    const header = httpParams.headerGET();
    const response = await fetch(BASE_URL + CANDIDATES_URL, header);
    tokenService.isTokenExpired(response);
    const data = await response.json();
    return data;
  }

  async getSingleCandidate(props) {
    const singleCandidateID = props.match.params.id;
    const header = httpParams.headerGET();
    const response = await fetch(
      BASE_URL + SINGLE_CANDIDATES_URL + singleCandidateID,
      header
    );
    tokenService.isTokenExpired(response);
    const data = await response.json();
    return data[0];
  }
}

export const candidateCommunicator = new CandidateCommunicator();
