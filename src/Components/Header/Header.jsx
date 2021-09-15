import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname !== "/login";

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.assign("/login");
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
