import React, { useEffect, useState } from "react";

/* SearchBar component includes in MainPage component */
const SearchBar = ({ getSearchValue, reset}) => {

  const [searchValue, setSearchValue] = useState("");

  const inputHandler = (event) => {
    getSearchValue(event.target.value);
    setSearchValue(event.target.value);
    console.log("event. target", event.target.value);
  };

  const resetInputView = () => {
    if(reset){
      setSearchValue("");
    }
  }

  useEffect(resetInputView, [reset]);
  

  console.log("iy komponente", searchValue)

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
  );
};

export default SearchBar;
