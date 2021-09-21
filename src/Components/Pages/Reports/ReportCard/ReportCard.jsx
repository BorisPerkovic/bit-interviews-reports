import React, { Fragment, useState } from "react";
import { formateDate } from "../../../../utils/date-function.js";
import ModalReports from "../../../Modal/ModalReports/ModalReports.jsx";
import { dataService } from "../../../../services/data.service.js";

import classes from "./ReportCard.module.css";

const ReportCard = ({ report, setDeletedReport, deletedReport }) => {
  const [displayReportModal, setDisplayReportModal] = useState(false);
  const [detailsReportModal, setDetailsReportModal] = useState({});

  const reportModalHandler = (report) => {
    setDetailsReportModal(report);
    setDisplayReportModal(true);
  };

  const reportModalClose = (param) => {
    setDisplayReportModal(param);
  };

  const deleteOneReport = (report) => {
    dataService.deleteReport(report.id);
    setDeletedReport(!deletedReport);
  };

  return (
    <Fragment>
      {displayReportModal && (
        <ModalReports report={detailsReportModal} onClose={reportModalClose} />
      )}
      <div className={`row my-4 py-2 rounded shadow ${classes.bgColorReport}`}>
        <div className="col-sm-3 py-2 px-3 border-end border-dark">
          <h5>{report.companyName}</h5>
          <span>Company</span>
        </div>
        <div className="col-sm-3 py-2 px-3 border-end border-dark">
          <h5>{report.candidateName}</h5>
          <span>Candidate</span>
        </div>
        <div className="col-sm-2 py-2 px-3 border-end border-dark">
          <h5>{formateDate(report.interviewDate)}</h5>
          <span>Interview Date</span>
        </div>
        <div className="col-sm-2 py-2 px-3 border-end border-dark">
          <h5>{report.status}</h5>
          <span>Status</span>
        </div>
        <div
          className={`col-sm-2 p-2 d-flex justify-content-center align-items-center ${classes.reportsIcons}`}
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
