import React from "react";
import { CREATE_REPORT_SIDE_BAR } from "../../../../../../constants/endpoints";

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
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              <span>{index + 1}</span> {listItem}
            </li>
          );
        })}
      </ul>
      <ul className="border-top border-dark mt-5 py-5">
        {(switchValue === 2 || switchValue === 3) && <li className="my-4"><span>Candidate</span> <h3>{candidate.candidateName}</h3></li>}
        {switchValue === 3 && <li className="my-4"><span>Company</span> <h3>{candidate.companyName}</h3></li>}
      </ul>
    </div>
  );
};

export default CreateReportSideBar;
