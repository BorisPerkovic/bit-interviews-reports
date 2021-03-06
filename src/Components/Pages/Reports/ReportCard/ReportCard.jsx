import React, { Fragment, useState  } from "react";
import {formateDate} from '../../../../utils/date-function.js';
import ModalReports from "../../../Modal/ModalReports/ModalReports.jsx";
import { reportsCommunicator } from "../../../../communicators/Reports/ReportsCommunicator";

import classes from "./ReportCard.module.css";

const ReportCard = ({ report, setDeletedReport, deletedReport }) => {

  /* creating state for modal window  */
  const [displayReportModal, setDisplayReportModal] = useState(false);
  const [detailsReportModal, setDetailsReportModal] = useState({});

  /* function for sending data to ModalReportOverlay on click eye icon using Lifting State Up and also changing state to modal be visible */
  const reportModalHandler = (report) => {
    setDetailsReportModal(report);
    setDisplayReportModal(true);
  };

  /* function for changing modal state to be hidden on click X button in modal and backdrop overlay using Lifting State Up */
  const reportModalClose = (param) => {
    setDisplayReportModal(param);
  };

  const deleteOneReport = (report) => {
    reportsCommunicator.deleteReport(report.id);
    setDeletedReport(!deletedReport);
  };

  return (
    <Fragment>
      {displayReportModal && (
        <ModalReports report={detailsReportModal} onClose={reportModalClose} />
      )}
      <div className={`row my-4 py-2 rounded shadow ${classes.bgColorReport}`}>
        <div className="col-10 col-sm-10 mx-auto col-md-3 mt-2 py-2 px-3 border-end border-dark">
          <h5>{report.companyName}</h5>
          <span>Company</span>
        </div>
        <div className="col-10 col-sm-10 mx-auto col-md-3 mt-2 py-2 px-3 border-end border-dark">
          <h5>{report.candidateName}</h5>
          <span>Candidate</span>
        </div>
        <div className="col-10 col-sm-10 mx-auto col-md-2 mt-2 py-2 px-3 border-end border-dark">
          <h5>{formateDate(report.interviewDate)}</h5>
          <span>Interview Date</span>
        </div>
        <div className="col-10 col-sm-10 mx-auto col-md-2 mt-2 py-2 px-3 border-end border-dark">
          <h5>{report.status}</h5>
          <span>Status</span>
        </div>
        <div
          className={`col-10 col-sm-10 mx-auto col-md-2 mt-2 p-2 d-flex justify-content-center align-items-center ${classes.reportsIcons}`}
        >
          <span
            className="me-5"
            onClick={() => {
              reportModalHandler(report);
            }}
          >
            {" "}
            <i className={`far fa-eye ${classes.eyeSign}`}></i>{" "}
          </span>
          <span>
            {" "}
            <i
              className= {`fas fa-times ${classes.timesSign}`}
              onClick={() => deleteOneReport(report)}
            ></i>{" "}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ReportCard;
