/**
 Class that has helper functions as methods for component SearchBar
 */
export class SearchBarService {
  filterNews(arr, input) {
    const filtered = arr.filter((candidate) => {
      return candidate.name.toUpperCase().includes(input.toUpperCase());
    });

    return filtered;
  }
}

export const searchBarService = new SearchBarService();
