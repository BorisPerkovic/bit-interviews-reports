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
    <div
      className={`col-11 col-sm-11 col-md-11 col-lg-11 col-xl-6 p-5 ${classes.modal}`}
    >
      <div className="d-flex justify-content-between align-items-center border-bottom border-dark">
        <h2>{report.candidateName || "Unknown"}</h2>
        <p>
          <i
            className={`fas fa-times-circle ${classes.timesCircle}`}
            onClick={onCloseReportModal}
          ></i>
        </p>
      </div>
      <div className="row py-3">
        <div className="col-md-5">
          <p>Company</p>
          <h4>{report.companyName || "Unknown"}</h4>
          <p>Interview Date</p>
          <h4>
            {report.interviewDate
              ? formateDate(report.interviewDate)
              : "Unknown"}
          </h4>
          <p>Phase</p>
          <h4>{report.phase || "Unknown"}</h4>
          <p>Status</p>
          <h4>{report.status || "Unknown"}</h4>
        </div>
        <div className="col-md-7">
          <p>Notes</p>
          <p>{report.notes || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalReportsOverlay;
