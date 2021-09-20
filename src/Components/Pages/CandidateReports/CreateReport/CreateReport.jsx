import React, { useEffect, useState } from "react";
import CreateReportSideBar from "./components/CreateReportSideBar/CreateReportSideBar";
import SearchBar from "../../../SearchBar/SearchBar";
import SelectCandidate from "./components/SelectCandidate/SelectCandidate";
import SelectCompany from "./components/SelectCompany/SelectCompany";
import FillReportDetails from "./components/FillReportDetails/FillReportDetails";

export const CreateReport = () => {
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
  }, [switchValue]);

  return (
    <div className="container-fluid main-mb">
      <div className="container">
        {switchValue !== 3 && (
          <SearchBar
            getSearchValue={getSearchValue}
            searchBarTitle={searchBarTitle}
          />
        )}
        <div className="row">
          <div className="col-md-4 px-2 my-4 border-end border-dark">
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
