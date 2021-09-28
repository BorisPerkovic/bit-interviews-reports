import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import ModalReports from "../../Modal/ModalReports/ModalReports";

import { tokenService } from "../../../services/Token.service";
import { candidateCommunicator } from "../../../communicators/Candidates/CandidateCommunicator";
import { candidateMapper } from "../../../communicators/Candidates/CandidateMapper";
import { reportsCommunicator } from "../../../communicators/Reports/ReportsCommunicator";
import { reportsMapper } from "../../../communicators/Reports/ReportsMapper";

import { formateDate } from "../../../utils/date-function";

import classes from "./CandidateReports.module.css";
const CandidateReports = (props) => {
  const [candidate, setCandidate] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [logIn, setLogIn] = useState(false);
  const [reports, setReports] = useState([]);
  const [displayReportModal, setDisplayReportModal] = useState(false);
  const [detailsReportModal, setDetailsReportModal] = useState({});
  const history = useHistory();

  /* function for checking if user is Logged In, if user is not Logged In redirect user to LogIn page */
  const isLogedIn = () => {
    const token = tokenService.getToken();
    if (!token) {
      history.push("/bit-interviews-reports/login");
      return false;
    }
    setLogIn(true);
    return true;
  };

  const getCandidate = async () => {
    const candidatesResponse = await candidateCommunicator.getSingleCandidate(
      props
    );
    setCandidate(candidateMapper.createCandidate(candidatesResponse));
  };

  const getReport = async () => {
    const reportResponse = await reportsCommunicator.getCandidatesReport(props);
    const reportArray = reportResponse.map((obj) =>
      reportsMapper.createReport(obj)
    );
    setReports(reportArray);
    setIsLoading(false);
  };

  const reportModalHandler = (id) => {
    const companyReport = reports.filter((item) => item.id === id);
    setDetailsReportModal(companyReport[0]);
    setDisplayReportModal(true);
  };

  const reportModalClose = (param) => {
    setDisplayReportModal(param);
  };

  /* creating useEffect on mounting CandidatesReports  component for isLogedIn and getCandidate functions */
  useEffect(() => {
    isLogedIn();
    getCandidate();
    getReport();
  }, []);

  // {isLoading && <Spinner />}

  return (
    <Fragment>
      {displayReportModal && (
        <ModalReports report={detailsReportModal} onClose={reportModalClose} />
      )}
      {isLoading && <Spinner />}
      {logIn && !isLoading && (
        <div className="container pt-4 main-mb">
          <div className="row pt-4">
            <div className="col-md-2 col-6 mx-auto">
              <img
                className="img-fluid w-100"
                src={candidate.image}
                alt="Avatar"
              ></img>
            </div>
            <div className="col-md-10">
              <div className="row h-50 py-2">
                <div className="col-md-6">
                  <span>Name:</span>
                  <h4 className="p-3">{candidate.name}</h4>
                </div>
                <div className="col-md-6">
                  <span>Date of birth: </span>
                  <h4 className="p-3">{formateDate(candidate.birthday)}</h4>
                </div>
              </div>
              <div className="row h-50 py-2">
                <div className="col-md-6">
                  <span>Email: </span>
                  <h4 className="p-3 text-truncate">{candidate.email}</h4>
                </div>
                <div className="col-md-6">
                  <span>Education: </span>
                  <h4 className="p-3">{candidate.education}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="reports container py-5">
            <h3>Reports</h3>

            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Company</th>
                    <th scope="col">Interview Date</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id}>
                      <td>{report.companyName}</td>
                      <td>{formateDate(report.interviewDate)}</td>
                      <td className="d-flex justify-content-between">
                        <span>{report.status}</span>
                        <span
                          className={`me-2 ${classes.eye}`}
                          onClick={() => {
                            reportModalHandler(report.id);
                          }}
                        >
                          <i className="far fa-eye"></i>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CandidateReports;
