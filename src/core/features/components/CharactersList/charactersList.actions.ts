export enum CharactersActionsTypes {
  LOAD_DEFAULT = 'CHARACTERS_LOAD_DEFAULT',
}

export interface AllCharacters {
  type: CharactersActionsTypes.LOAD_DEFAULT;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export type CharactersActions = AllCharacters;
