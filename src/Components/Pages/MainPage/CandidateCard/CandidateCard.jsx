import React from "react";

import classes from "./CandidateCard.module.css";

/* CandidateCard component */
const CandidateCard = ({ candidate }) => {
  return (
    <div className="col">
      <div className="card shadow">
        <div className="imgHolder">
          <img src={candidate.image} className="card-img-top  " alt="Avatar" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{candidate.name}</h5>
          <p className="card-text text-center">{candidate.email}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
