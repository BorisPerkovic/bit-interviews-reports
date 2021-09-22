import React, { useEffect, useState } from "react";
import classes from './SearchBar.module.css';

/* SearchBar component includes in MainPage component */
const SearchBar = ({ getSearchValue, searchBarTitle }) => {
  const [searchValue, setSearchValue] = useState("");
  const [title, setTitle] = useState("");

  const inputHandler = (event) => {
    getSearchValue(event.target.value);
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setTitle(searchBarTitle);
  }, [searchBarTitle]);

  return (
    <div className={`container-fluid ${classes.navBar}`}>
      <nav className={`container ${classes["navbar-container"]}`}>
        <div className="w-100  py-4">
          <div className="row w-100 mx-0">
            <div className={`col-sm-6 col-md-8 px-3 ${classes.title}`}>
              <h2>{title}</h2>
            </div>
            <div className="col-sm-6 col-md-4 px-3">
              <input
                className={`ms-auto form-control me-0 rounded ${classes.searchInput}`}
                value={searchValue}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={inputHandler}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
