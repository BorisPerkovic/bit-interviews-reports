import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ModalReportOverlay from "./ModalReportOverlay/ModalReportOverlay";
import ModalReportBackdrop from "./ModalReportBackdrop/ModalReportBackdrop";


const ModalReports = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalReportBackdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalReportOverlay
          report={props.report}
          onClose={props.onClose}
        />,
        document.getElementById("modal-overlay")
      )}
    </Fragment>
  );
};

export default ModalReports;
