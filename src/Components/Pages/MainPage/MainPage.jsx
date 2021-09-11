import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import CandidateCard from "./CandidateCard/CandidateCard";
import Spinner from "../../Spinner/Spinner";
import { AuthService } from "../../../services/auth.service";
import SearchBar from "./SearchBar/SearchBar";

/* MainPage component */
const MainPage = () => {

  /* creating instance for AuthServices */
  const auth = new AuthService();

  /* creating necessary states */
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [logIn, setLogIn] = useState(false);

  /* function for checking if user is Logged In, if user is not Logged In redirect user to LogIn page */
  const isLogedIn = () => {
    const token = auth.getToken();
    if (!token) {
      window.location.assign("http://localhost:3000/login");
      return false;
    }
    setLogIn(true);
    return true;
  };

  /* function for fetching candidates data from API, put data from API in setCandidates state */
  const getCandidates = () => {
    const fetchCandidates = async () => {
      const candidatesResponse = await auth.getCandidates(); 
      const candidatesFiltered = candidatesResponse.filter(item => item.name);
      setCandidates(candidatesFiltered);
      setIsLoading(false);
    }
    fetchCandidates();
  }

  /* creating useEffect on mounting MainPage component for isLogedIn and getCandidates functions */
  useEffect(isLogedIn, []);
  useEffect(getCandidates, []);

  /* returning component to App and display JSX */
  return (
    <Fragment>
      {logIn && (
        <div className="container">
          <SearchBar />
          <main className="container py-5">
          {isLoading && <Spinner />}
            <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
              {candidates.map(candidate => (
                <Link key={candidate.id} to={`/single-candidate/${candidate.id}`}>
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
