import { Link } from "react-router-dom";
import classes from "./ModalDeveloperOverlay.module.css";

const ModalDeveloperOverlay = ({ developer, onClose }) => {
  
  const onCloseReportModal = () => {
    onClose(false);
    return false;
  };
  
  return (
    <div className={`col-md-6 p-5 ${classes.modal}`}>
      <div className="d-flex justify-content-between align-items-center border-bottom border-dark">
        <h2>{developer.name}</h2>
        <p>
          <i className="fas fa-times-circle" onClick={onCloseReportModal}></i>
        </p>
      </div>
      <div className="py-3">
          <p className="fw-bolder fs-5">A Few Words About Me...</p>
          <p>{developer.summary.text} {developer.summary.loader && <i className="fas fa-spinner"></i>}</p>
          <p className="mt-4">
            {developer.github && <Link to={{  pathname: developer.github }} target="_blank"><i className="fab fa-github me-3"></i></Link> }
            {developer.linkedin && <Link to={{  pathname: developer.linkedin }} target="_blank"><i class="fab fa-linkedin me-3"></i></Link> }
            {developer.website && <Link to={{  pathname: developer.website }} target="_blank"><i class="fas fa-link"></i></Link> }
          </p>
      </div>
    </div>
  );
};

export default ModalDeveloperOverlay;