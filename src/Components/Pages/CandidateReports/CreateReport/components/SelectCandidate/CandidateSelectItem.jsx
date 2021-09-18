import React, { useState, useCallback } from "react";

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
        className={`candidate-report-item ${
          isActive
            ? "border border-primary bg-info"
            : "border border-light bg-light"
        }`}
      >
        <div className="imgHolder">
          <img src={candidate.image} alt={candidate.name} />
        </div>
        <div className="text-wrapper">
          <p>{candidate.name}</p>
          <p>{candidate.email}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSelectItem;
