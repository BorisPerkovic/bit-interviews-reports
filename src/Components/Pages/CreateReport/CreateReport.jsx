import React, { useEffect, useState } from "react";
import CreateReportSideBar from "./components/CreateReportSideBar/CreateReportSideBar";
import SearchBar from "../../SearchBar/SearchBar";
import SelectCandidate from "./components/SelectCandidate/SelectCandidate";
import SelectCompany from "./components/SelectCompany/SelectCompany";
import FillReportDetails from "./components/FillReportDetails/FillReportDetails";

import classes from "./CreateReport.module.css";

export const CreateReport = () => {
  const [resetInput, setResetInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [switchValue, setSwitchValue] = useState(1);
  const [newReport, setNewReport] = useState({
    candidateId: null,
    candidateName: null,
    companyId: null,
    companyName: null,
    interviewDate: null,
    phase: null,
    status: null,
    note: null,
  });
  const searchBarTitle = "Create report";

  const renderSwitch = () => {
    switch (switchValue) {
      case 1:
        return (
          <SelectCandidate
            nextPage={nextPage}
            pickUserHandler={pickUserHandler}
            searchValue={searchValue}
          />
        );
      case 2:
        return (
          <SelectCompany
            searchValue={searchValue}
            nextPage={nextPage}
            prevPage={prevPage}
            pickCompanyHandler={pickCompanyHandler}
          />
        );
      case 3:
        return (
          <FillReportDetails
            searchValue={searchValue}
            prevPage={prevPage}
            pickFillReportHandler={pickFillReportHandler}
            newReport={newReport}
          />
        );
      default:
        return "";
    }
  };

  /* function to get value from child component SearchBar */
  const getSearchValue = (input) => {
    setSearchValue(input);
  };
  /* function to take argument from the child component "SearchBar" and sets the "resetInput" state to new value */
  const resetSearchValue = (didReset) => {
    setResetInput(didReset);
  };
  const pickUserHandler = (candidateName, candidateId) => {
    setNewReport({ ...newReport, candidateId, candidateName });
  };

  const pickCompanyHandler = (companyName, companyId) => {
    setNewReport({ ...newReport, companyId, companyName });
  };

  const pickFillReportHandler = (interviewDate, phase, status, note) => {
    setNewReport({
      ...newReport,
      interviewDate: new Date(interviewDate),
      phase,
      status,
      note,
    });
  };

  const nextPage = () => {
    setSwitchValue(switchValue + 1);
  };

  const prevPage = () => {
    setSwitchValue(switchValue - 1);
  };

  useEffect(() => {
    getSearchValue("");
    resetSearchValue(true);
  }, [switchValue]);

  return (
    <div className="container-fluid main-mb">
      {switchValue !== 3 && (
          <SearchBar
            getSearchValue={getSearchValue}
            searchBarTitle={searchBarTitle}
            resetInput={resetInput}
            resetSearchValue={resetSearchValue}
          />
        )}
      <div className="container">
        <div className="row">
          <div className={`col-md-4 px-2 my-4 ${classes["reportsMiddle-border"]}`}>
            <CreateReportSideBar
              switchValue={switchValue}
              candidate={newReport}
            />
          </div>
          <div className="col-md-8 px-2 my-4">{renderSwitch()}</div>
        </div>
      </div>
    </div>
  );
};
export default CreateReport;
