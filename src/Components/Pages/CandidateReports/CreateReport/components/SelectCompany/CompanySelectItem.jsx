import React, { useCallback } from 'react';
import classes from './CompanySelectItem.module.css';

const CompanySelectItem = ({
  company,
  pickCompanyHandler,
  isActive,
  setActive,
}) => {
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-6 offset-3 my-3 g-0"

      //
    >
      <div
        onClick={useCallback(() => {
          setActive(company.id, [company.id, setActive]);
          pickCompanyHandler(company.name, company.id);
        })}
        className={`p-4 rounded shadow
          ${isActive
            ? "border border-primary ${classes.bgColorActive}"
            : "border border-light ${classes.bgColor}"
          }
        `}
      >
        <div className="text-wrapper">
          <p className="text-center">Company Name: {company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanySelectItem;
