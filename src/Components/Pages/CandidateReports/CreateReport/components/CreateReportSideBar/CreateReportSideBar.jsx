import React from "react";
import { CREATE_REPORT_SIDE_BAR } from "../../../../../../constants/endpoints";

const CreateReportSideBar = () => {
  return (
    <div className="container">
      <ul>
        {CREATE_REPORT_SIDE_BAR.map((listItem, index) => {
          return (
            <li className="" key={index}>
              <span>{index + 1}</span> {listItem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreateReportSideBar;
