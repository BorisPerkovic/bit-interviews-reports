import React, { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";

/* SearchBar component includes in MainPage component */
const SearchBar = ({
  getSearchValue,
  searchBarTitle,
  resetInput,
  resetSearchValue,
}) => {
  const [searchValue, setSearchValue] = useState("");
  /* const [reset, setReset] => state for reseting input value to "" */
  const [reset, setReset] = useState(false);
  /* const [title, setTitle] => state for setting title of the SearchBar component  */
  const [title, setTitle] = useState("");

  /*inputHandler => function that takes value from input field, and sets searchValue that we use in other component as an filter parametar
                    also, it sets the "reset" state to false, so we don't reset the input field value to "" */

  const inputHandler = (event) => {
    setReset(false);
    //we ask if this arg exists, not all components needs to reset the input field
    if (resetSearchValue) {
      resetSearchValue(false);
    }
    getSearchValue(event.target.value);
    setSearchValue(event.target.value);
  };

  /*resetValue => function that is setting the "reset" state to true, and it resets the input field to ""
                    also, it takes back to parent component TRUE value to parent state*/
  const resetValue = () => {
    if (resetInput) {
      setReset(true);
      if (resetSearchValue) {
        resetSearchValue(true);
      }
      setSearchValue("");
    }
  };

  useEffect(() => {
    setTitle(searchBarTitle);
  }, [searchBarTitle]);

  useEffect(resetValue, [resetInput, resetSearchValue]);

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
                value={reset ? "" : searchValue}
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
