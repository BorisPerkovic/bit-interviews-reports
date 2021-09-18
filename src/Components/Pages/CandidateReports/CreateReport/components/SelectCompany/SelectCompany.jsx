import React, { useState, useEffect, Fragment } from "react";
import CompanySelectItem from "./CompanySelectItem";
import {Company} from "../../../../../../entities/Company";
import { searchBarService } from "../../../../MainPage/SearchBar/SearchBar.service";
import { dataService } from "../../../../../../services/data.service";

const SelectCompany = ({ searchValue, nextPage, prevPage, pickCompanyHandler }) => {

  const [companyList, setCompanyList] = useState([]);
  const [filterCompanyList, setFilterCompanyList] = useState([]);
  const [activeCompany, setActiveCompany] = useState(null);

  const getCompaniesList = async () => {
    const response = await dataService.getCompanies();
    const companyArray = response.filter(param => param.name).map((obj) => new Company(obj.id, obj.name, obj.email));
    setCompanyList(companyArray);
    setFilterCompanyList(companyArray);
  };

  const searchCompanies = () => {
    const filterCompanies = searchBarService.filterNews(
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
    <div className="row px-4 py-2 select-wrapper">
      {filterCompanyList.map(company => (
        <CompanySelectItem
        company={company}
        key={company.id}
        pickCompanyHandler={pickCompanyHandler}
        isActive={activeCompany === company.id}
        setActive={setActive}
      />)
      )}
    </div>
    <div className="d-flex justify-content-between align-items-center">
        <button
          onClick={prevPage}
          className="btn btn-primary mt-3 ms-2"
        >
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
