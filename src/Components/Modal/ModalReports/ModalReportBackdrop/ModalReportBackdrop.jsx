import React from "react";

import classes from "./ModalReportBackdrop.module.css";

const ModalReportBackdrop = ({ onClose }) => {

  /* 
    -function for closing developer and report modal on click black background
    -onClose function is passed as props from conponents and triggered here but state is changing in TeamCard, single Candidate Report and Report components
  */
  const onCloseReportModal = () => {
    onClose(false);
    return false;
  };

  return <div className={classes.backdrop} onClick={onCloseReportModal}></div>;
};

export default ModalReportBackdrop;