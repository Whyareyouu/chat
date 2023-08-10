export interface SearchingSchema {
  searchResults: FoundUsers[];
  searchingQuery: string;
  isSearching: boolean;
  errors: string;
}

export type FoundUsers = {
  username: string;
  id: string;
  email: string;
};
