import React from "react";

import classes from './CandidateCard.module.css';

/* CandidateCard component */
const CandidateCard = ({ candidate }) =>{

  return(
      <div className="col">
        <div className="card shadow">
          <div className={classes.imgHolder}>
          <img src={candidate.avatar || "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"} className="card-img-top  " alt="Avatar"/>
          </div>
            <div className="card-body">
              <h5 className="card-title text-center">{candidate.name}</h5>
              <p className="card-text text-center">{candidate.email}</p>
            </div>
        </div>
      </div>
    );

};

export default CandidateCard ;