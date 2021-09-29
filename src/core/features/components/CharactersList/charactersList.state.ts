export type CharactersItem = {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  image: string;
  url: string;
  species: string;
  alive: string;
  location: string,
};

export interface CharactersListState {
  charasters: CharactersItem[];
  page: number,
  loading: boolean,
  loadingMore: boolean,
  searchFailure: boolean
}
