export enum CharactersPageTypes {
  PAGE = 'CHARACTERS_PAGE',
}

export interface SetPage {
  type: CharactersPageTypes.PAGE;
  payload: number
}

export const setPage = (page: number): SetPage => ({
  type: CharactersPageTypes.PAGE,
  payload: page,
});

export type CharactersPageActions = SetPage;
