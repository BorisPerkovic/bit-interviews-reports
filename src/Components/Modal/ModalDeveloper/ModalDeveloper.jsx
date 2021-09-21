import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ModalDeveloperOverlay from "./ModalDeveloperOverlay/ModalDeveloperOverlay";
import ModalReportBackdrop from "../ModalReports/ModalReportBackdrop/ModalReportBackdrop";


const ModalDeveloper = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalReportBackdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalDeveloperOverlay
          developer={props.developer}
          onClose={props.onClose}
        />,
        document.getElementById("modal-overlay")
      )}
    </Fragment>
  );
};

export default ModalDeveloper;