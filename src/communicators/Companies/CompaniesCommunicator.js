import { httpParams } from "../../services/HttpParams.service";
import { tokenService } from "../../services/Token.service";
import { BASE_URL, COMPANIES_URL } from "../../constants/endpoints";

class CompaniesCommunicator {
  async getCompanies() {
    const header = httpParams.headerGET();
    const response = await fetch(BASE_URL + COMPANIES_URL, header);
    tokenService.isTokenExpired(response);
    const data = await response.json();
    return data;
  }
}
export const companiesCommunicator = new CompaniesCommunicator();
