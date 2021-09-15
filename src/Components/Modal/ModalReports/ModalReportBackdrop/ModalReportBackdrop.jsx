import React from "react";

import classes from "./ModalReportBackdrop.module.css";

const ModalReportBackdrop = ({ onClose }) => {
  const onCloseReportModal = () => {
    onClose(false);
    return false;
  };

  return <div className={classes.backdrop} onClick={onCloseReportModal}></div>;
};

export default ModalReportBackdrop;