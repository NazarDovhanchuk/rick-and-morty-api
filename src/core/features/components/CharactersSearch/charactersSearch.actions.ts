/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CharactersItem } from '../CharactersList/charactersList.state';

export enum CharactersSearch {
  LOAD_SEARCH = 'CHARACTERS_LOAD_SEARCH',
  SET_SEARCH = 'CHARACTERS_SET_SEARCH',
  LOAD_MORE = 'CHARACTERS_LOAD_MORE',
  LOAD_FAILURE = 'CHARACTERS_LOAD_FAILURE',
  SET_PAGE_SEARCH = 'SET_PAGE_SEARCH',
  SET_LOAD_CHARACTERS = 'SET_LOAD_CHARACTERS',
  LOAD_PAGE = 'CHARACTERS_LOAD_PAGE',
}

interface SearchParameters {
  page: number,
  name?: string;
  status?: string;
  gender?: string;
}

interface Action {
  type: CharactersSearch;
}

export interface GetCharacters extends Action {
  payload: SearchParameters;
}

export interface SetCharacters extends Action {
  payload: CharactersItem[];
}

export interface SetLoadMore extends Action {
  payload: boolean;
}

export interface SetLoadFailure extends Action {
  payload: boolean,
}

export const getSearch = (payload: SearchParameters): GetCharacters => ({
  type: CharactersSearch.LOAD_SEARCH,
  payload,
});

export const setSearch = (payload: CharactersItem[]): SetCharacters => ({
  type: CharactersSearch.SET_SEARCH,
  payload,
});

export const toggleLoadMore = (payload: boolean): SetLoadMore => ({
  type: CharactersSearch.LOAD_MORE,
  payload,
});

export const getErrorSearch = (payload: boolean): SetLoadFailure => ({
  type: CharactersSearch.LOAD_FAILURE,
  payload,
});

/// search action

export interface SetMoreCharacters extends Action {
  payload: number
}

export const setCharactersMore = (payload: CharactersItem[]): SetCharacters => ({
  type: CharactersSearch.SET_LOAD_CHARACTERS,
  payload,
});

export const getSearchPage = (payload: SearchParameters): GetCharacters => ({
  type: CharactersSearch.LOAD_PAGE,
  payload,
});

export type CharactersSearchActions =
  SetCharacters |
  GetCharacters |
  SetLoadMore |
  SetLoadFailure |
  SetMoreCharacters;
