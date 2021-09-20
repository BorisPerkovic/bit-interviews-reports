import React, { useState, useEffect, Fragment } from "react";
import Spinner from "../../Spinner/Spinner";
import ModalReports from "../../Modal/ModalReports/ModalReports";
import { authService } from "../../../services/auth.service";
import { dataService } from "../../../services/data.service";
import { formateDate } from "../../../utils/date-function";
import { candidateService } from "../MainPage/services/candidate.service";
import classes from "./CandidateReports.module.css";
const CandidateReports = (props) => {
  const [candidate, setCandidate] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [logIn, setLogIn] = useState(false);
  const [reports, setReports] = useState([]);
  const [displayReportModal, setDisplayReportModal] = useState(false);
  const [detailsReportModal, setDetailsReportModal] = useState({});

  /* function for checking if user is Logged In, if user is not Logged In redirect user to LogIn page */
  const isLogedIn = () => {
    const token = authService.getToken();
    if (!token) {
      window.location.assign("http://localhost:3000/login");
      return false;
    }
    setLogIn(true);
    // setSingleCandidateID(props.match.params.id);
    return true;
  };

  const getCandidate = async () => {
    const candidatesResponse = await dataService.getSingleCandidate(props);
    setCandidate(candidateService.createCandidate(candidatesResponse));
  };

  const getReport = async () => {
    const reportResponse = await dataService.getCandidatesReport(props);
    setReports(reportResponse);
    setIsLoading(false);
  };

  const reportModalHandler = (id) => {
    const companyReport = reports.filter((item) => item.id === id);
    setDetailsReportModal(companyReport);
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
      {!isLoading && (
        <div className="container main-mb">
          <div className="row pt-4">
            <div className="col-md-5">
              <img
                className="img-fluid"
                src={candidate.image}
                alt="Avatar"
              ></img>
            </div>
            <div className="col-md-7">
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
                  <h4 className="p-3">{candidate.email}</h4>
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
