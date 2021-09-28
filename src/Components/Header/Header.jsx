import React, { Fragment } from "react";
import { NavLink, useLocation} from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  /* use Location hook for hiding header in log in component and use History for redirects */
  const location = useLocation();
  const path = location.pathname !== "/bit-interviews-reports/login";

  /* function for logout user on click logout link and redirect to log in component */
  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <Fragment>
      {path && (
        <header
          className={`container-fluid d-flex align-items-center p-4 ${classes.header} flex-wrap justify-content-sm-center justify-content-md-between justify-content-center `}
        >
          <h1>Interview Reports</h1>
          <div className={`d-flex flex-wrap justify-content-sm-center`}>
            <NavLink
              activeClassName={classes["active-route"]}
              exact
              to="/bit-interviews-reports"
              className={`mx-1 ${classes.link}`}
            >
              <button type="button" className={`btn ${classes.button}`}>
                Candidates
              </button>
            </NavLink>
            <NavLink
              activeClassName={classes["active-route"]}
              to="/bit-interviews-reports/reports"
              className={`mx-1 ${classes.link}`}
            >
              <button type="button" className={`btn  ${classes.button}`}>
                Reports
              </button>
            </NavLink>
            <NavLink
              activeClassName={classes["active-route"]}
              to="/bit-interviews-reports/login"
              className={`mx-1 ${classes.link}`}
            >
              <button
                onClick={logOut}
                type="button"
                className={`btn ${classes.button}`}
              >
                Log Out
              </button>
            </NavLink>
          </div>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
