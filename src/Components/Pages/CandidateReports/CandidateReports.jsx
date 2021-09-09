import React from "react";
import classes from './CandidateReports.module.css';


const CandidateReports=()=>{

return(

    <div className = "container-fluid">
        <div className = "container container-info d-flex row">
            <div className = {`col ${classes.picture}`}><img className = "img-fluid" src = "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"></img></div>
            <div className = "container col">
              <div className = "row h-50 py-2">
                <div className = "col"><span>Name: </span><p className = "px-3">Marina</p></div>
                <div className = "col"><span>Date of birth: </span><p className = "px-3">01.01.2001</p></div>
              </div>
              <div className = "row h-50">
                <div className = "col"><span>Email: </span><p className = "px-3">marina@gmail.com</p></div>
                <div className = "col"><span>Education: </span><p className = "px-3">bitovac</p></div>
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
                    <tr>
                      <td>Google</td>
                      <td>20.12.2017</td>
                      <td>Passed</td>
                    </tr>
                    <tr>
                      <td>Facebook</td>
                      <td>22.12.2017</td>
                      <td>Declined</td>
                    </tr>
                    <tr>
                      <td>Instagram</td>
                      <td>28.12.2017</td>
                      <td>Passed</td>
                    </tr>
                    <tr>
                      <td>Linkedin</td>
                      <td>04.01.2018</td>
                      <td>Passed</td>
                    </tr>
                  </tbody>
                </table>

            </div>

        </div>
    </div>

)



}

export default CandidateReports;