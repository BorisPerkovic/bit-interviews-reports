import React,{useState,useEffect, Fragment} from "react";
import classes from './CandidateReports.module.css';
import { AuthService } from "../../../services/auth.service";
import Spinner from "../../Spinner/Spinner";
import ModalReports from "../../Modal/ModalReports/ModalReports";


const CandidateReports=(props)=>{

const [candidate, setCandidate] = useState({});
const [isLoading, setIsLoading] = useState(true); 
const [logIn, setLogIn] = useState(false);
const [reports, setReports] = useState([]);
const [displayReportModal, setDisplayReportModal] = useState(false);
const [detailsReportModal, setDetailsReportModal] = useState({});
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
  }
  fetchCandidates();
}

const getReport = () => {
  const singleCandidateID=parseInt(props.match.params.id);
  const fetchReports = async () => {
    const reportsResponse = await auth.getCandidatesReport();
    const filteredReport= reportsResponse.filter(item=>item.candidateId===singleCandidateID);
    setReports(filteredReport);
    setIsLoading(false);
  }
  fetchReports();
}

const reportModalHandler = (id) => {
  const companyReport = reports.filter( item => item.id === id);
  setDetailsReportModal(companyReport);
  setDisplayReportModal(true);
}

const reportModalClose = (param) => {
  setDisplayReportModal(param);
};

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

  <Fragment>
    {displayReportModal && <ModalReports report={detailsReportModal} onClose={reportModalClose} />}
    {isLoading && <Spinner />}
    {!isLoading && (<div className = "container main-mb">
        <div className = "row pt-4">
            <div className = "col-md-5">
              <img className = "img-fluid" src = "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt="Avatar"></img>
            </div>
            <div className = "col-md-7">
              <div className = "row h-50 py-2">
                <div className = "col-md-6">
                  <span>Name:</span><h4 className = "p-3">{candidate.name}</h4>
                </div>
                <div className = "col-md-6">
                  <span>Date of birth: </span><h4 className = "p-3">{month}.{day}.{year}</h4>
                </div>
              </div>
              <div className = "row h-50 py-2">
                <div className = "col-md-6">
                  <span>Email: </span><h4 className = "p-3">{candidate.email}</h4>
                </div>
                <div className = "col-md-6">
                  <span>Education: </span><h4 className = "p-3">{candidate.education}</h4>
                </div>
              </div>
            </div>
        </div>
        <div className = "reports container py-5">
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
                      <tr key={report.id}>

                      <td>{report.companyName}</td>
                      <td>{report.interviewDate}</td>
                      <td className = "d-flex justify-content-between"><span>{report.status}</span><span className = {`me-2 ${classes.eye}`} onClick={() =>{reportModalHandler(report.id)}}><i className="far fa-eye"></i></span></td>
                      
                    </tr>
                      
                      
                      )}
                    
                   
                  </tbody>
                </table>

            </div>

        </div>
    </div>)}
  </Fragment>
    

)



}


export default CandidateReports;