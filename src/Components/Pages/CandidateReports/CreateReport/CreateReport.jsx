import React, { useState } from "react";
import CreateReportSideBar from "./components/CreateReportSideBar/CreateReportSideBar";
import SearchBar from "../../../SearchBar/SearchBar";
import SelectCandidate from "./components/SelectCandidate/SelectCandidate";
import SelectCompany from "./components/SelectCompany/SelectCompany";
import FillReportDetails from "./components/FillReportDetails/FillReportDetails";
import { SearchBarService } from "../../../SearchBar/SearchBar.service";

export const CreateReport = () => {
  const [searchValue, setSearchValue] = useState("");
  const [switchValue, setSwitchValue] = useState(1);
  const [newReport, setNewReport] = useState({
    candidateId: null,
    candidateName: null,
    companyId: null,
    companyName: null,
    interviewDate: new Date(),
    phase: null,
    status: null,
    note: null,
  });

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
        return <SelectCompany searchValue={searchValue} />;
      case 3:
        return <FillReportDetails searchValue={searchValue} />;
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

  const nextPage = () => {
    setSwitchValue(switchValue + 1);
  };

  return (
    <div className="container-fluid main-mb">
      <div className="container">
        <SearchBar getSearchValue={getSearchValue} />
        <div className="row">
          <div className="col-md-4 px-2 my-4 border-end border-dark">
            <CreateReportSideBar />
          </div>
          <div className="col-md-8 px-2 my-4">{renderSwitch()}</div>
        </div>
      </div>
    </div>
  );
};
export default CreateReport;
