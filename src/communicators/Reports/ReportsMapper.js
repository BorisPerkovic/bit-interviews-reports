import { Report } from "../../entities/Report";

class ReportsMapper {

  createReport(obj) {

    let validationCounter = 0;

    const getReportId = () => {
      if (obj.id) {
        return obj.id;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getCandidateId = () => {
      if (obj.candidateId) {
        return obj.candidateId;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getCompanyId = () => {
      if (obj.companyId) {
        return obj.companyId;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getCandidateName = () => {
      if (obj.candidateName) {
        return obj.candidateName;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getCompanyName = () => {
      if (obj.companyName) {
        return obj.companyName;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getInterviewDate = () => {
      if (obj.interviewDate) {
        return obj.interviewDate;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getPhase = () => {
      if (obj.phase) {
        return obj.phase;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getStatus = () => {
      if (obj.status) {
        return obj.status;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getNote= () => {
      if (obj.note) {
        return obj.note;
      } else {
        validationCounter++;
        return null;
      }
    };

    if (validationCounter === 0) {
      return new Report(
        getReportId(),
        getCandidateId(),
        getCandidateName(),
        getCompanyName(),
        getCompanyId(),
        getInterviewDate(),
        getPhase(),
        getStatus(),
        getNote(),
      );
    }
  }

}

export const reportsMapper = new ReportsMapper();
