import React, { useCallback } from "react";

import classes from "./CandidateSelectItem.module.css";

const CandidateSelectItem = ({
  candidate,
  pickUserHandler,
  isActive,
  setActive,
}) => {
  return (
    <div
      className="col-md-12 col-lg-6"

      //
    >
      <div
        onClick={useCallback(() => {
          setActive(candidate.id, [candidate.id, setActive]);
          pickUserHandler(candidate.name, candidate.id);
        })}
        className={`d-flex justify-content-start align-items-center rounded ${
          isActive
            ? `${classes.active}`
            : `${classes["candidate-report-item"]}`
        }`}
      >
        <div className={classes["selectCandidate-img"]}>
          <img src={candidate.image} alt={candidate.name} />
        </div>
        <div className="text-wrapper ms-2">
          <p>{candidate.name}</p>
          <p className="text-truncate">{candidate.email}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSelectItem;
