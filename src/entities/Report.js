export class Report {

  constructor(id, candidateId, candidateName, companyName, companyId, interviewDate, phase, status, note) {
    this.id = id;
    this.candidateId = candidateId;
    this.companyName = companyName;
    this.companyId = companyId;
    this.candidateName = candidateName;
    this.interviewDate = interviewDate;
    this.phase = phase;
    this.status = status;
    this.note = note;
  };

};