export enum CharactersActionsTypes {
  PAGE = 'CHARACTERS_PAGE',
}

export interface SetPage {
  type: CharactersActionsTypes.PAGE;
  payload: number
}

export const setPage = (page: number): SetPage => ({
  type: CharactersActionsTypes.PAGE,
  payload: page,
});

export type CharactersActions = SetPage;
