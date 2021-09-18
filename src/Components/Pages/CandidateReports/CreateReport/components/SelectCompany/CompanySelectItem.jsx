import React, { useCallback } from 'react'

const CompanySelectItem = ({
  company,
  pickCompanyHandler,
  isActive,
  setActive,
}) => {
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-6 offset-3 my-3"

      //
    >
      <div
        onClick={useCallback(() => {
          setActive(company.id, [company.id, setActive]);
          pickCompanyHandler(company.name, company.id);
        })}
        className={`p-4 rounded shadow
          ${isActive
            ? "border border-primary bg-info"
            : "border border-light bg-light"
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
