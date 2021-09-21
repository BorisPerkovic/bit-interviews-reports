import React, { Fragment } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {

  /* use Location hook for hiding header in log in component and use History for redirects */
  const location = useLocation();
  const path = location.pathname !== "/login";
  const history = useHistory();

  /* function for logout user on click logout link and redirect to log in component */
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Fragment>
      {path && (
        <header className={`container-fluid d-flex align-items-center p-4 ${classes.header} flex-wrap justify-content-sm-center justify-content-md-between justify-content-center `}>
          <h1>Interview Reports</h1>
          <div className={`d-flex flex-wrap justify-content-sm-center`}>
           <Link to="/" className = {`mx-1 ${classes.link}`}>
            <button type="button" className={`btn ${classes.button}`} >
              Candidates
            </button>
           </Link>
           <Link to="/reports" className = {`mx-1 ${classes.link}`} >
            <button type="button" className={`btn  ${classes.button}`}>
              Reports
            </button>
           </Link>
           <a href="" onClick={logOut} className={`mx-1 ${classes.link}`}> 
           <button  type="button" className={`btn ${classes.button}`}>
            Log Out
           </button>
           </a>
          </div>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
