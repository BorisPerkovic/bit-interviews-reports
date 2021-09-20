import React, { useEffect, useState, Fragment } from "react";
import ReportCard from "./ReportCard/ReportCard";
import SearchBar from "../../SearchBar/SearchBar";
import { searchBarService } from "../../SearchBar/SearchBar.service";
import Spinner from "../../Spinner/Spinner";
import classes from "./Reports.module.css";
import { dataService } from "../../../services/data.service";
import { authService } from "../../../services/auth.service";
import { Link } from "react-router-dom";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [searchedReports, setSearchedReports] = useState([]);
  const [logIn, setLogIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [deletedReport, setDeletedReport] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  /* function for checking if user is Logged In, if user is not Logged In redirect user to LogIn page */
  const isLogedIn = () => {
    const token = authService.getToken();
    if (!token) {
      window.location.assign("http://localhost:3000/login");
      return false;
    }
    setLogIn(true);
    return true;
  };

  const getReports = async () => {
    const response = await dataService.getReports();
    console.log(response);
    setReports(response);
    console.log("Reports", reports);
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
        <div className="container main-mb">
          <SearchBar getSearchValue={getSearchValue} />
          <main className="container py-5">
            {isLoading && <Spinner />}
            {searchedReports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                setDeletedReport={setDeletedReport}
                deletedReport={deletedReport}
              />
            ))}
            <Link to="/reports/create-report">
              <i className={`far fa-plus-square fa-4x ${classes["add"]}`}></i>
            </Link>
          </main>
        </div>
      )}
    </Fragment>
  );
};

export default Reports;
