/**
 Class that has helper functions as methods for component SearchBar
 */
export class SearchBarService {
  filterByItemName(arr, input) {
    const filtered = arr.filter((item) => {
      return item.name.toUpperCase().includes(input.toUpperCase());
    });

    return filtered;
  }
  /*
filterReports(arr, input)
takes array and input value, and searches array by company name, or candidate name
- for created new report object, we need to bypass them, because those objects have only ID property.
- so we give condition, to filter by candidate name or company name, only for those object that have candidateName property,
  and for those "empty" report objects, we just return them
*/
  filterReports(arr, input) {
    const filtered = arr.filter((item) => {
      if (item.candidateName) {
        return (
          item.candidateName.toUpperCase().includes(input.toUpperCase()) ||
          item.companyName.toUpperCase().includes(input.toUpperCase())
        );
      } else {
        return item;
      }
    });

    return filtered;
  }
}

export const searchBarService = new SearchBarService();
