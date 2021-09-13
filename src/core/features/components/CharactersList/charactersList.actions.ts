/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export enum CharactersAllTypes {
  LOAD_SUCCESS = 'CHARACTERS_LOAD_SUCCESS',
  LOAD_DEFAULT = 'LOAD_DEFAULT',
}

export interface Characters {
  type: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const setCharacters = (hero: any): Characters => ({
  type: CharactersAllTypes.LOAD_SUCCESS,
  payload: hero,
});

export type CharactersActions = Characters;
