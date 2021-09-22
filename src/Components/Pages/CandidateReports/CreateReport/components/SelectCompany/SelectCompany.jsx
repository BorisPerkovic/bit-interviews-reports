import React, { useState, useEffect, Fragment } from "react";
import CompanySelectItem from "./CompanySelectItem";
import { companyMapper } from "../../../../../../communicators/Companies/CompaniesMapper";
import { searchBarService } from "../../../../../SearchBar/SearchBar.service";
import { companiesCommunicator } from "../../../../../../communicators/Companies/CompaniesCommunicator";

const SelectCompany = ({
  searchValue,
  nextPage,
  prevPage,
  pickCompanyHandler,
}) => {
  const [companyList, setCompanyList] = useState([]);
  const [filterCompanyList, setFilterCompanyList] = useState([]);
  const [activeCompany, setActiveCompany] = useState(null);

  const getCompaniesList = async () => {
    const response = await companiesCommunicator.getCompanies();
    const companyArray = companyMapper
      .filterCompanies(response)
      .map((obj) => companyMapper.createCompany(obj));
    setCompanyList(companyArray);
    setFilterCompanyList(companyArray);
  };

  const searchCompanies = () => {
    const filterCompanies = searchBarService.filterByItemName(
      companyList,
      searchValue
    );
    setFilterCompanyList(filterCompanies);
  };

  const setActive = (id) => {
    setActiveCompany(id);
  };

  useEffect(() => {
    getCompaniesList();
  }, []);
  useEffect(searchCompanies, [companyList, searchValue]);

  return (
    <Fragment>
      <div className="px-4 py-2 gx-3 gy-3 select-wrapper">
        {filterCompanyList.map((company) => (
          <CompanySelectItem
            company={company}
            key={company.id}
            pickCompanyHandler={pickCompanyHandler}
            isActive={activeCompany === company.id}
            setActive={setActive}
          />
        ))}
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={prevPage} className="btn btn-secondary mt-3 ms-2">
          Back
        </button>
        <button
          disabled={activeCompany === null}
          onClick={nextPage}
          className="btn btn-success mt-3 me-2"
        >
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default SelectCompany;
