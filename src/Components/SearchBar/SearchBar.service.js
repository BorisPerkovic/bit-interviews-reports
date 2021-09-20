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
*/
  filterReports(arr, input) {
    const filtered = arr.filter((item) => {
      return (
        item.candidateName.toUpperCase().includes(input.toUpperCase()) ||
        item.companyName.toUpperCase().includes(input.toUpperCase())
      );
    });

    return filtered;
  }
}

export const searchBarService = new SearchBarService();
