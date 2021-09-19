
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
    if(dateValid) {
      return true;
    }
    return false;
  };

  /* check if phase select has been selected */
  phaseIsValid () {
    const phaseValid = this.phase !== "0";
    if(phaseValid) {
      return true;
    }
    return false;
  };

  /* check if status select has been selected */
  statusIsValid () {
    const statusValid = this.status !== "0";
    if(statusValid) {
      return true;
    }
    return false;
  };

  /* check if notes textarea is valid */
  notesIsValid () {
    const notesValid = this.notes.trim() !== ""; 
    if(notesValid) {
      return true;
    }
    return false;
  };

  /* check if form is valid - date, phase, status, textarea are required */
  formIsValid () {
    if(this.dateIsValid() && this.phaseIsValid() && this.statusIsValid() && this.notesIsValid()) {
      return true;
    }
    return false;
  };

};

export default NewReportFormValidation;