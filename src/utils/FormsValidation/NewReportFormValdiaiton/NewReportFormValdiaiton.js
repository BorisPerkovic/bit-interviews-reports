
/* create new report form validation class */
class NewReportFormValidation {
  constructor(date, phase, status, notes) {
    this.date = date;
    this.phase = phase;
    this.status = status;
    this.notes = notes;
  };

  /*============= 
    METHODS
  =============*/

  /* check if chosen date is in valid time - cannot be in future */
  dateIsValid () {
    const dateValid = new Date(this.date).getDate() <= new Date().getDate();
    return dateValid;
  };

  /* check if phase select has been selected */
  phaseIsValid () {
    const phaseValid = this.phase !== "0";
    return phaseValid;
  };

  /* check if status select has been selected */
  statusIsValid () {
    const statusValid = this.status !== "0";
    return statusValid;
  };

  /* check if notes textarea is valid */
  notesIsValid () {
    const notesValid = this.notes.trim() !== "";
    return notesValid;
  };

  /* check if form is valid - date, phase, status, textarea are required */
  formIsValid () {
    const vaildForm = this.dateIsValid() && this.phaseIsValid() && this.statusIsValid() && this.notesIsValid();
    return vaildForm;
  };

};

export default NewReportFormValidation;