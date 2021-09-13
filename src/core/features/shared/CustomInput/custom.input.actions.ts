export enum CharactersSearchTypes {
  SEARCH = 'CHARACTERS_SEACRH',
}

export interface Search {
  type: CharactersSearchTypes.SEARCH;
  payload: string,
}

export const setSeacrh = (name: string): Search => ({
  type: CharactersSearchTypes.SEARCH,
  payload: name,
});

export type CharactersSearchActions = Search;
