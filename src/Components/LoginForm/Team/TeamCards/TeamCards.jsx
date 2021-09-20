import React, { useState, Fragment } from 'react';
import ModalDeveloper from "../../../Modal/ModalDeveloper/ModalDeveloper.jsx";

import classes from "./TeamCards.module.css";


const TeamCards = ( { developer } ) => {

  const [displayDeveloperModal, setDisplayReportModal] = useState(false);
  const [detailsDeveloperModal, setDetailsReportModal] = useState({});
    
    
  const reportModalHandler = (param) => {
      setDetailsReportModal(param);
      setDisplayReportModal(true);
  };
  
  const reportModalClose = (param) => {
  setDisplayReportModal(param);
  };

  return (
    <Fragment>
        {displayDeveloperModal && (
              <ModalDeveloper developer={detailsDeveloperModal} onClose={reportModalClose} />
          )}
          <div className="col-md-5 col-12 my-3">
              <div className={classes["team-img"]}>
                <img src={developer.image} alt={developer.name} onClick={() => { reportModalHandler(developer) }} />
              </div>
              <h2 className="text-center">{developer.name}</h2>
          </div>
    </Fragment>
    
  );
};

export default TeamCards;
