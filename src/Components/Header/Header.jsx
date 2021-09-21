import React, { Fragment } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

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
        <header className="container d-flex justify-content-between align-items-center p-4">
          <h1>Interview Reports</h1>
          <Link to="/">
            <button type="button" className="btn btn-info">
              Candidates
            </button>
          </Link>
          <Link to="/reports">
            <button type="button" className="btn btn-info">
              Reports
            </button>
          </Link>
          <button onClick={logOut} type="button" className="btn btn-info">
            Log Out
          </button>
        </header>
      )}
    </Fragment>
  );
};

export default Header;
