import React, { Fragment, useEffect, useState } from "react";
import { dataService } from "../../../../../../services/data.service";
import { candidateService } from "../../../../MainPage/services/candidate.service";
import CandidateSelectItem from "./CandidateSelectItem";
import { searchBarService } from "../../../../MainPage/SearchBar/SearchBar.service";

const SelectCandidate = ({ pickUserHandler, nextPage, searchValue }) => {
  const [candidateList, setCandidateList] = useState([]);
  const [filterCandidateList, setFilterCandidateList] = useState([]);
  const [activeCandidate, setActiveCandidate] = useState(null);

  const getCandidates = async () => {
    const response = await dataService.getCandidates();
    const candidateArray = candidateService
      .filterCandidate(response)
      .map((obj) => candidateService.createCandidate(obj));
    setCandidateList(candidateArray);
    setFilterCandidateList(candidateList);
  };

  const searchCandidates = () => {
    const filteredCandidates = searchBarService.filterNews(
      candidateList,
      searchValue
    );
    setFilterCandidateList(filteredCandidates);
  };

  const setActive = (id) => {
    setActiveCandidate(id);
  };

  useEffect(() => {
    getCandidates();
  }, []);
  useEffect(searchCandidates, [candidateList, searchValue]);

  return (
    <Fragment>
      <div className="row px-4 gx-3 gy-2 select-wrapper">
        {filterCandidateList.map((candidate) => (
          <CandidateSelectItem
            candidate={candidate}
            key={candidate.id}
            pickUserHandler={pickUserHandler}
            isActive={activeCandidate === candidate.id}
            setActive={setActive}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <button
          disabled={activeCandidate === null}
          onClick={nextPage}
          className="btn btn-success mt-3 me-2"
        >
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default SelectCandidate;
