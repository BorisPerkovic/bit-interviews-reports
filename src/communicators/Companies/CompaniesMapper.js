import { Company } from "../../entities/Company";

class CompanyMapper {

  createCompany(obj) {

    let validationCounter = 0;

    const getCompanyId = () => {
      if (obj.id) {
        return obj.id;
      } else {
        validationCounter++;
        return null;
      }
    };

    const getCompanyName = () => {
      if (obj.name) {
        return obj.name;
      } else {
        validationCounter++;
        return null;
      }
    };

    const companyEmail = () => {
      if (obj.email) {
        return obj.email;
      } else {
        validationCounter++;
        return null;
      }
    };

    if (validationCounter === 0) {
      return new Company(
        getCompanyId(),
        getCompanyName(),
        companyEmail(),
      );
    }
  }

  filterCompanies(arr) {
    return arr.filter((item) => item.name);
  }
}

export const companyMapper = new CompanyMapper();
