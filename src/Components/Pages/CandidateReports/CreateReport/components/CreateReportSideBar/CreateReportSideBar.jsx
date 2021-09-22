import React from "react";
import { CREATE_REPORT_SIDE_BAR } from "../../../../../../constants/endpoints";
import classes from "./CreateReportSideBar.module.css";

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
      <div className={`mt-3 py-2 ${classes["reports-details"]}`}>
        <ul>
          {(switchValue === 2 || switchValue === 3) && <li className="my-4"><span>Candidate</span> <h3>{candidate.candidateName}</h3></li>}
          {switchValue === 3 && <li className="my-4"><span>Company</span> <h3>{candidate.companyName}</h3></li>}
        </ul>
      </div>
    </div>
  );
};

export default CreateReportSideBar;
