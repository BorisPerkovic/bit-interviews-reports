import React from "react";
<<<<<<< HEAD:src/Components/Pages/CreateReport/components/CreateReportSideBar/CreateReportSideBar.jsx
import { CREATE_REPORT_SIDE_BAR } from "../../../../../constants/endpoints";
=======
import { CREATE_REPORT_SIDE_BAR } from "../../../../../../constants/endpoints";
import classes from "./CreateReportSideBar.module.css";
>>>>>>> development:src/Components/Pages/CandidateReports/CreateReport/components/CreateReportSideBar/CreateReportSideBar.jsx

const CreateReportSideBar = ({ switchValue, candidate }) => {
  return (
    <div className="container">
      <ul className="list-group">
        {CREATE_REPORT_SIDE_BAR.map((listItem, index) => {
          return (
            <li
              key={index}
              className={
                switchValue === index + 1
                  ? `${classes["groups-steps"]} ${classes.active}`
                  : `${classes["groups-steps"]}`
              }
            >
              <span>{index + 1}.</span> {listItem}
            </li>
          );
        })}
      </ul>
<<<<<<< HEAD:src/Components/Pages/CreateReport/components/CreateReportSideBar/CreateReportSideBar.jsx
      <ul className="border-top border-dark mt-5 py-5">
        {(switchValue === 2 || switchValue === 3) && (
          <li className="my-4">
            <span>Candidate</span> <h3>{candidate.candidateName}</h3>
          </li>
        )}
        {switchValue === 3 && (
          <li className="my-4">
            <span>Company</span> <h3>{candidate.companyName}</h3>
          </li>
        )}
      </ul>
=======
      <div className={`mt-3 py-2 ${classes["reports-details"]}`}>
        <ul>
          {(switchValue === 2 || switchValue === 3) && <li className="my-4"><span>Candidate</span> <h3>{candidate.candidateName}</h3></li>}
          {switchValue === 3 && <li className="my-4"><span>Company</span> <h3>{candidate.companyName}</h3></li>}
        </ul>
      </div>
>>>>>>> development:src/Components/Pages/CandidateReports/CreateReport/components/CreateReportSideBar/CreateReportSideBar.jsx
    </div>
  );
};

export default CreateReportSideBar;
