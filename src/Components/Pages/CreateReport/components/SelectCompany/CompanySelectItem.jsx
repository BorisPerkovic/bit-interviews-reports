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
      className="col-sm-12 col-md-6 col-lg-6 mx-auto my-3 g-0"

      //
    >
      <div
        onClick={useCallback(() => {
          setActive(company.id, [company.id, setActive]);
          pickCompanyHandler(company.name, company.id);
        })}
        className={`p-4 rounded shadow
          ${isActive
            ? `${classes.active}`
            : `${classes["companySelect-item"]}`
          }
        `}
      >
        <div className="text-wrapper">
          <h5 className="text-center mt-1">Company Name: {company.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default CompanySelectItem;
