import React,{useState,useEffect} from "react";
import classes from './CandidateReports.module.css';
import { AuthService } from "../../../services/auth.service";
import Spinner from "../../Spinner/Spinner";


const CandidateReports=(props)=>{

const [candidate, setCandidate] = useState({});
const [isLoading, setIsLoading] = useState(true); 
const [logIn, setLogIn] = useState(false);
const [reports, setReports] = useState([]);
// const [singleCandidateID,setSingleCandidateID]=useState('');



 /* creating instance for AuthServices */
const auth = new AuthService();



/* function for checking if user is Logged In, if user is not Logged In redirect user to LogIn page */
const isLogedIn = () => {
  const token = auth.getToken();
  if (!token) {
    window.location.assign("http://localhost:3000/login");
    return false;
  }
  setLogIn(true);
  // setSingleCandidateID(props.match.params.id);
  return true;
};

const getCandidate = () => {
  const singleCandidateID=props.match.params.id;
  const fetchCandidates = async () => {
    const candidatesResponse = await auth.getSingleCandidate(singleCandidateID); 
    setCandidate(candidatesResponse);
    setIsLoading(false);
  }
  fetchCandidates();
}

const getReport = () => {
  const singleCandidateID=parseInt(props.match.params.id);
  const fetchReports = async () => {
    const reportsResponse = await auth.getCandidatesReport(); 
    console.log(reportsResponse);
    const filteredReport= reportsResponse.filter(item=>item.candidateId===singleCandidateID);
    console.log(filteredReport);
    setReports(filteredReport);
    setIsLoading(false);
  }
  fetchReports();
}




/* creating useEffect on mounting CandidatesReports  component for isLogedIn and getCandidate functions */
useEffect(isLogedIn, []);
useEffect(getCandidate, []);
useEffect(getReport, []);

// {isLoading && <Spinner />}
  let date = new Date(candidate.birthday);
  let month = date.toLocaleString("en-US", {month: "2-digit"});
  let day = date.toLocaleString("en-US", {day: "2-digit"});
  let year = date.getFullYear();

return(

    <div className = "container-fluid main-mb">
        <div className = "container container-info d-flex row">
            <div className = {`col ${classes.picture}`}><img className = "img-fluid" src = "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"></img></div>
            <div className = "container col">
              <div className = "row h-50 py-2">
                <div className = "col"><span>Name:</span><p className = "px-3">{candidate.name}</p></div>
                <div className = "col"><span>Date of birth: </span><p className = "px-3">{month}.{day}.{year}</p></div>
              </div>
              <div className = "row h-50">
                <div className = "col"><span>Email: </span><p className = "px-3">{candidate.email}</p></div>
                <div className = "col"><span>Education: </span><p className = "px-3">{candidate.education}</p></div>
              </div>
            </div>

        </div>
        <div className = "reports container">
            <h3>Reports</h3>

            <div>
              <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Company</th>
                      <th scope="col">Interview Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map(report=>
                      <tr>

                      <td>{report.companyName}</td>
                      <td>{report.interviewDate}</td>
                      <td className = "d-flex justify-content-between"><span>{report.status}</span><span className = "me-2"><i class="far fa-eye"></i></span></td>
                      
                    </tr>
                      
                      
                      )}
                    
                   
                  </tbody>
                </table>

            </div>

        </div>
    </div>

)



}


export default CandidateReports;