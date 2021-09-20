import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import CandidateCard from "./CandidateCard/CandidateCard";
import Spinner from "../../Spinner/Spinner";
import { authService } from "../../../services/auth.service";
import SearchBar from "../../SearchBar/SearchBar";
import { searchBarService } from "../../SearchBar/SearchBar.service";
import { dataService } from "../../../services/data.service";
import { candidateService } from "./services/candidate.service";
/* MainPage component */
const MainPage = () => {
  /* creating necessary states */
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [logIn, setLogIn] = useState(false);
  const [searchedCandidates, setSearchedCandidates] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchBarTitle = "Candidates";
  /* function for checking if user is Logged In, if user is not Logged In redirect user to LogIn page */
  const isLogedIn = () => {
    const token = authService.getToken();
    if (!token) {
      window.location.assign("http://localhost:3000/login");
      return false;
    }
    setLogIn(true);
    return true;
  };

  /* function for fetching candidates data from API, put data from API in setCandidates state */
  const getCandidates = async () => {
    const response = await dataService.getCandidates();

    const candidateArray = candidateService
      .filterCandidate(response)
      .map((obj) => candidateService.createCandidate(obj));
    setCandidates(candidateArray);
    setSearchedCandidates(candidates);
    setIsLoading(false);
  };

  /* function to get value from child component SearchBar */
  const getSearchValue = (input) => {
    setSearchValue(input);
  };
  /* function to set searched candidates and display resoults */
  const searchCandidates = () => {
    const filteredCandidates = searchBarService.filterByItemName(
      candidates,
      searchValue
    );
    setSearchedCandidates(filteredCandidates);
  };

  /* creating useEffect on mounting MainPage component for isLogedIn and getCandidates functions */
  useEffect(() => {
    isLogedIn();
    getCandidates();
  }, []);

  useEffect(searchCandidates, [candidates, searchValue]);

  /* returning component to App and display JSX */
  return (
    <Fragment>
      {logIn && (
        <div className="container main-mb">
          <SearchBar
            getSearchValue={getSearchValue}
            searchBarTitle={searchBarTitle}
          />
          <main className="container py-5">
            {isLoading && <Spinner />}
            <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
              {searchedCandidates.map((candidate) => (
                <Link
                  key={candidate.id}
                  to={`/single-candidate/${candidate.id}`}
                >
                  <CandidateCard candidate={candidate} />
                </Link>
              ))}
            </div>
          </main>
        </div>
      )}
    </Fragment>
  );
};

export default MainPage;
