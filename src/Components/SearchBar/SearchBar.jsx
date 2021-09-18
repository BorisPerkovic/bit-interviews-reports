import React, { } from "react";

/* SearchBar component includes in MainPage component */
const SearchBar = ({ getSearchValue, }) => {

  const inputHandler = (event) => {
    getSearchValue(event.target.value);
  };

  return (
    <nav className="navbar navbar-light bg-light border-bottom border-dark">
      <div className="container  py-4">
        <div className="row w-100">
          <div className="col-md-9">
            <h2>Navbar</h2>
          </div>
          <div className="col-md-3 px-0">
            <input
              className="ms-auto form-control me-0 rounded"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={inputHandler}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
