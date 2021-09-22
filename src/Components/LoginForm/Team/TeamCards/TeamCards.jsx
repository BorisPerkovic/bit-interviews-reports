import React, { useState, Fragment } from 'react';
import ModalDeveloper from "../../../Modal/ModalDeveloper/ModalDeveloper.jsx";

import classes from "./TeamCards.module.css";

/* Developer Team Cards JSX component */
const TeamCards = ( { developer } ) => {

  /* creating state for modal window  */
  const [displayDeveloperModal, setDisplayReportModal] = useState(false);
  const [detailsDeveloperModal, setDetailsReportModal] = useState({});
    
  /* function for sending data to ModalDeveloperOverlay on click Developer image using Lifting State Up and also changing state to modal be visible */
  const developerModalHandler = (param) => {
      setDetailsReportModal(param);
      setDisplayReportModal(true);
  };
  
  /* function for changing modal state to be hidden on click X button in modal and backdrop overlay using Lifting State Up */
  const reportModalClose = (param) => {
  setDisplayReportModal(param);
  };

  return (
    <Fragment>
        {displayDeveloperModal && (
              <ModalDeveloper developer={detailsDeveloperModal} onClose={reportModalClose} />
          )}
          <div className="col-sm-11 col-md-5 col-lg-5 col-xl-5 my-3">
              <div className={classes["team-img"]}>
                <img src={developer.image} alt={developer.name} onClick={() => { developerModalHandler(developer) }} />
              </div>
              <h2 className="text-center">{developer.name}</h2>
          </div>
    </Fragment>
    
  );
};

export default TeamCards;
