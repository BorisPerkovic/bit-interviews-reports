import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { formateDate } from "../../../utils/date-function";

import classes from "./ModalReports.module.css";

const Backdrop = ({ onClose }) => {
  const onCloseReportModal = () => {
    onClose(false);
    return false;
  };

  return <div className={classes.backdrop} onClick={onCloseReportModal}></div>;
};

const ModalReportsOverlay = ({ report, onClose }) => {
  const onCloseReportModal = () => {
    onClose(false);
    return false;
  };

  return (
    <div className={`col-md-6 p-5 ${classes.modal}`}>
      <div className="d-flex justify-content-between align-items-center border-bottom border-dark">
        <h2>{report.candidateName}</h2>
        <p>
          <i className="fas fa-times-circle" onClick={onCloseReportModal}></i>
        </p>
      </div>
      <div className="row py-3">
        <div className="col-md-5">
          <p>Company</p>
          <h4>{report.companyName}</h4>
          <p>Interview Date</p>
          <h4>{formateDate(report.interviewDate)}</h4>
          <p>Phase</p>
          <h4>{report.phase}</h4>
          <p>Status</p>
          <h4>{report.status}</h4>
        </div>
        <div className="col-md-7">
          <p>Notes</p>
          <p>{report.note}</p>
        </div>
      </div>
    </div>
  );
};

const ModalReports = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalReportsOverlay
          report={props.report[0]}
          onClose={props.onClose}
        />,
        document.getElementById("modal-overlay")
      )}
    </Fragment>
  );
};

export default ModalReports;
