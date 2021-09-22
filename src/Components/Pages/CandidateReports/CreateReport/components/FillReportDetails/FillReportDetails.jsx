import React, { useState, useRef, Fragment } from "react";
import { useHistory } from "react-router";
import { reportsCommunicator } from "../../../../../../communicators/Reports/ReportsCommunicator";
import {
  OPTIONS_PHASE,
  OPTIONS_STATUS,
} from "../../../../../../constants/endpoints";
import NewReportFormValidation from "../../NewReportFormValdiaiton/NewReportFormValdiaiton";

/* FillReportDetails JSX Component */
const FillReportDetails = ({ prevPage, pickFillReportHandler, newReport }) => {
  const history = useHistory();

  /* form fields states */
  const [formValidaiton, setFormValidation] = useState({
    date: true,
    phase: true,
    status: true,
    notes: true,
  });

  /* getting data from fields using useRef hook */
  const dateInputRef = useRef();
  const phaseInputRef = useRef();
  const statusInputRef = useRef();
  const notesInputRef = useRef();

  /* function that is activate on submit button */
  const onSubmitHandler = () => {
    /* getting data values from refs and creating instance for form valdiation */
    const enteredDate = dateInputRef.current.value;
    const enteredPhase = phaseInputRef.current.value;
    const enteredStatus = statusInputRef.current.value;
    const enteredNotes = notesInputRef.current.value;
    const formValid = new NewReportFormValidation(
      enteredDate,
      enteredPhase,
      enteredStatus,
      enteredNotes
    );

    /* setting new states for input fields */
    setFormValidation({
      date: formValid.dateIsValid(),
      phase: formValid.phaseIsValid(),
      status: formValid.statusIsValid(),
      notes: formValid.notesIsValid(),
    });

    /* check if form is valid - if it is not, display messages and stop script */
    if (!formValid.formIsValid()) {
      return;
    }

    /* sending data values to body - payload object, send report to database, redirect user to landing page */
    pickFillReportHandler(
      enteredDate,
      enteredPhase,
      enteredStatus,
      enteredNotes
    );
    createReport();
    history.push("/");
  };

  const createReport = async () => {
    const report = await reportsCommunicator.createNewReport(newReport);
    return report;
  };

  return (
    <Fragment>
      <div className="container select-wrapper">
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="date-picker">Interview date</label>
            <input
              type="date"
              id="date-picker"
              className="form-control"
              ref={dateInputRef}
            />
            {!formValidaiton.date && (
              <div id="emailHelp" className="form-text text-danger">
                Date can not be in future!
              </div>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="phase-select">Phase</label>
            <select
              className="form-select"
              id="phase-select"
              ref={phaseInputRef}
            >
              <option value="0"> Select phase </option>
              {OPTIONS_PHASE.map((option, index) => (
                <option value={option} key={index}>
                  {" "}
                  {option}
                </option>
              ))}
            </select>
            {!formValidaiton.phase && (
              <div id="emailHelp" className="form-text text-danger">
                Please select valid phase!
              </div>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="status-select">Status</label>
            <select
              className="form-select"
              id="status-select"
              ref={statusInputRef}
            >
              <option value="0"> Select status </option>
              {OPTIONS_STATUS.map((option, index) => (
                <option value={option} key={index}>
                  {" "}
                  {option}
                </option>
              ))}
            </select>
            {!formValidaiton.status && (
              <div id="emailHelp" className="form-text text-danger">
                Please select valid status!
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-12 mt-4">
          <label htmlFor="text-area">Notes</label>
          <textarea
            name=""
            id="text-area"
            cols="30"
            rows="10"
            className="form-control"
            ref={notesInputRef}
          ></textarea>
          {!formValidaiton.notes && (
            <div id="emailHelp" className="form-text text-danger">
              Please insert notes!
            </div>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button onClick={prevPage} className="btn btn-secondary mt-3 ms-2">
          Back
        </button>
        <button onClick={onSubmitHandler} className="btn btn-success mt-3 me-2">
          Save
        </button>
      </div>
    </Fragment>
  );
};

export default FillReportDetails;
