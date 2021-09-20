import { Link } from "react-router-dom";
import classes from "./ModalDeveloperOverlay.module.css";

/* Modal Developer OVerlaz JSX component */
const ModalDeveloperOverlay = ({ developer, onClose }) => {
  
  /* 
    -function for closing developer modal on click X button
    -onClose function is passed as props from TeamCard and triggered here but state is changing in TeamCard component
  */
  const onCloseDeveloperModal = () => {
    onClose(false);
    return false;
  };
  
  return (
    <div className={`col-md-6 p-5 ${classes.modal}`}>
      <div className="d-flex justify-content-between align-items-center border-bottom border-dark">
        <h2>{developer.name}</h2>
        <p>
          <i className="fas fa-times-circle" onClick={onCloseDeveloperModal}></i>
        </p>
      </div>
      <div className="py-3">
          <p className="fw-bolder fs-5">A Few Words About Me...</p>
          <p>{developer.summary.text} {developer.summary.loader && <i className="fas fa-spinner"></i>}</p>
          <p className="mt-4">
            <span className={classes.github}>{developer.github && <Link to={{  pathname: developer.github }} target="_blank"><i className="fab fa-github me-3"></i></Link> }</span>
            <span className={classes.linkedin}>{developer.linkedin && <Link to={{  pathname: developer.linkedin }} target="_blank" ><i className="fab fa-linkedin me-3"></i></Link> }</span>
            <span className={classes.website}>{developer.website && <Link to={{  pathname: developer.website }} target="_blank"><i class="fas fa-link"></i></Link> }</span>
          </p>
      </div>
    </div>
  );
};

export default ModalDeveloperOverlay;