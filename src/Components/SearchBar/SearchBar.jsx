import React, { useEffect, useState } from "react";

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
    <nav className="navbar navbar-light bg-light border-bottom border-dark">
      <div className="container  py-4">
        <div className="row w-100">
          <div className="col-md-9">
            <h2>{title}</h2>
          </div>
          <div className="col-md-3 px-0">
            <input
              className="ms-auto form-control me-0 rounded"
              defaultValue=""
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
  );
};

export default SearchBar;
