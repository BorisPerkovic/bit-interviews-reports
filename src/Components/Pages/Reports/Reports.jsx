import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router";
import ReportCard from "./ReportCard/ReportCard";
import SearchBar from "../../SearchBar/SearchBar";
import Spinner from "../../Spinner/Spinner";

import { searchBarService } from "../../SearchBar/SearchBar.service";
import { reportsCommunicator } from "../../../communicators/Reports/ReportsCommunicator";
import { reportsMapper } from "../../../communicators/Reports/ReportsMapper";
import { tokenService } from "../../../services/Token.service";
import { Link } from "react-router-dom";

import classes from "./Reports.module.css";

const Reports = () => {

  const [reports, setReports] = useState([]);
  const [searchedReports, setSearchedReports] = useState([]);
  const [logIn, setLogIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [deletedReport, setDeletedReport] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchBarTitle = "Reports";
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

  const getReports = async () => {
    const response = await reportsCommunicator.getReports();
    const reportsArray = reportsMapper
      .filterReports(response)
      .map((obj) => reportsMapper.createReport(obj));
    setReports(reportsArray);
    setSearchedReports(reports);
    setIsLoading(false);
  };

  /* function to get value from child component SearchBar */
  const getSearchValue = (input) => {
    setSearchValue(input);
  };

  /* function to set searched candidates and display resoults */
  const searchReports = () => {
    const filteredReports = searchBarService.filterReports(
      reports,
      searchValue
    );
    setSearchedReports(filteredReports);
  };

  useEffect(() => {
    isLogedIn();
    getReports();
  }, [deletedReport]);
  
  useEffect(searchReports, [reports, searchValue]);
  return (
    <Fragment>
      {logIn && (
        <div className="container-fluid main-mb g-0">
          <SearchBar
            getSearchValue={getSearchValue}
            searchBarTitle={searchBarTitle}
          />
          <main className= {`container pb-5 px-3 mt-5 ${classes["report-container"]}`}>
            {isLoading && <Spinner />}
            {searchedReports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                setDeletedReport={setDeletedReport}
                deletedReport={deletedReport}
              />
            ))}
            <Link to="/bit-interviews-reports/reports/create-report">
              <i className={`far fa-plus-square fa-4x ${classes["add"]}`}></i>
            </Link>
          </main>
        </div>
      )}
    </Fragment>
  );
};

export default Reports;
