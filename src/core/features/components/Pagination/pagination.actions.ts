export enum CharactersPaginationsTypes {
  PAGE = 'CHARACTERS_PAGE',
}

export interface SetPage {
  type: CharactersPaginationsTypes.PAGE;
  payload: number
}

export const setPage = (page: number): SetPage => ({
  type: CharactersPaginationsTypes.PAGE,
  payload: page,
});

export type CharactersPaginationsActions = SetPage;
