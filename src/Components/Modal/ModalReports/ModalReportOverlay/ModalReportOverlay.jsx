import React from "react";
import { formateDate } from "../../../../utils/date-function";

import classes from "./ModalReportOverlay.module.css";

const ModalReportsOverlay = ({ report, onClose }) => {
  
  /* 
    -function for closing eport modal on click X button
    -onClose function is passed as props from single Candidate Report and Report  and triggered here but state is changing in single Candidate Report and Report components
  */
  const onCloseReportModal = () => {
    onClose(false);
    return false;
  };
  
  return (
    <div className={`col-md-6 p-5 ${classes.modal}`}>
      <div className="d-flex justify-content-between align-items-center border-bottom border-dark">
        <h2>{report.candidateName || report[0].candidateName }</h2>
        <p>
          <i className={`fas fa-times-circle ${classes.timesCircle}`} onClick={onCloseReportModal}></i>
        </p>
      </div>
      <div className="row py-3">
        <div className="col-md-5">
          <p>Company</p>
          <h4>{report.companyName || report[0].companyName}</h4>
          <p>Interview Date</p>
          <h4>{formateDate(report.interviewDate || report[0].interviewDate)}</h4>
          <p>Phase</p>
          <h4>{report.phase || report[0].phase}</h4>
          <p>Status</p>
          <h4>{report.status || report[0].status}</h4>
        </div>
        <div className="col-md-7">
          <p>Notes</p>
          <p>{report.note || report[0].note}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalReportsOverlay;