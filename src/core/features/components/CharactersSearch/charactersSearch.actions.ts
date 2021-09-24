/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CharactersListState } from '../CharactersList/charactersList.state';

export enum CharactersSearch {
  LOAD_SEARCH = 'CHARACTERS_LOAD_SEARCH',
  SET_SEARCH = 'CHARACTERS_SET_SEARCH',
}

interface SearchParameters {
  page?: number,
  name?: string;
  status?: string;
  gender?: string;
}

export interface GetCharacters {
  type: CharactersSearch;
  payload: SearchParameters;
}

export interface SetCharacters {
  type: CharactersSearch
  payload: CharactersListState;
}

export const getSearch = (payload: SearchParameters): GetCharacters => ({
  type: CharactersSearch.LOAD_SEARCH,
  payload,
});

export const setSearch = ({ charasters, loading }: CharactersListState): SetCharacters => ({
  type: CharactersSearch.SET_SEARCH,
  payload: { charasters, loading },
});

export type CharactersSearchActions = SetCharacters;
