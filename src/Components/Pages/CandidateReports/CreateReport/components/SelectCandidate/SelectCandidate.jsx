import React, { Fragment, useEffect, useState } from "react";
import { candidateCommunicator } from "../../../../../../communicators/Candidates/CandidateCommunicator";
import { candidateMapper } from "../../../../../../communicators/Candidates/CandidateMapper";
import CandidateSelectItem from "./CandidateSelectItem";
import { searchBarService } from "../../../../../SearchBar/SearchBar.service";

const SelectCandidate = ({ pickUserHandler, nextPage, searchValue }) => {
  const [candidateList, setCandidateList] = useState([]);
  const [filterCandidateList, setFilterCandidateList] = useState([]);
  const [activeCandidate, setActiveCandidate] = useState(null);

  const getCandidates = async () => {
    const response = await candidateCommunicator.getCandidates();
    const candidateArray = candidateMapper
      .filterCandidate(response)
      .map((obj) => candidateMapper.createCandidate(obj));
    setCandidateList(candidateArray);
    setFilterCandidateList(candidateList);
  };

  const searchCandidates = () => {
    const filteredCandidates = searchBarService.filterByItemName(
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
      <div className="row px-4 py-2 gx-3 gy-3 select-wrapper">
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
