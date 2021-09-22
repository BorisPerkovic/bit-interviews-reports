import React, { useCallback } from "react";

import classes from "./CandidateSelectItem.module.css";

const CandidateSelectItem = ({
  candidate,
  pickUserHandler,
  isActive,
  setActive,
}) => {
  return (
    <div className="col-sm-12 col-lg-6">
      <div
        onClick={useCallback(() => {
          setActive(candidate.id, [candidate.id, setActive]);
          pickUserHandler(candidate.name, candidate.id);
        })}
        className={`col-md-12 d-flex justify-content-between align-items-center rounded ${
          isActive ? `${classes.active}` : `${classes["candidate-report-item"]}`
        }`}
      >
        <div className={`${classes["selectCandidate-img"]} col-sm-2`}>
          <img src={candidate.image} alt={candidate.name} />
        </div>
        <div className="d-flex flex-column col-sm-8">
          <p>{candidate.name}</p>
          <p className="overflow-hidden">{candidate.email}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSelectItem;
