import React from "react";
import { CREATE_REPORT_SIDE_BAR } from "../../../../../../constants/endpoints";

const CreateReportSideBar = ({ switchValue }) => {
  return (
    <div className="container">
      <ul className="list-group">
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
    </div>
  );
};

export default CreateReportSideBar;
