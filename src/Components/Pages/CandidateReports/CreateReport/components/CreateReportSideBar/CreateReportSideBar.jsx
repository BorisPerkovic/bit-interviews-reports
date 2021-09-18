import React from "react";
import { CREATE_REPORT_SIDE_BAR } from "../../../../../../constants/endpoints";

const CreateReportSideBar = ({ switchValue, candidate }) => {
  return (
    <div className="container">
      <ul className="list-group border-bottom border-dark">
        {CREATE_REPORT_SIDE_BAR.map((listItem, index) => {
          return (
            <li
              className=""
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
      <ul className="py-5">
        {(switchValue === 2 || switchValue === 3) && <li className="my-4"><span>Candidate</span> <h3>{candidate.candidateName}</h3></li>}
        {switchValue === 3 && <li className="my-4"><span>Copmany</span> <h3>{candidate.companyName}</h3></li>}
      </ul>
    </div>
  );
};

export default CreateReportSideBar;
