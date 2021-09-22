/* eslint-disable @typescript-eslint/no-explicit-any */

import { CharactersItem } from './charactersList.state';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export enum CharactersAllTypes {
  LOAD_SUCCESS = 'CHARACTERS_LOAD_SUCCESS',
  LOAD_CHARACTER = 'LOAD_CHARACTER',
  SET_LENGTH = 'SET_LENGTH',
}

interface CharactersParameters {
  page?: number;
  id?: number,
  name?: string;
  status?: string;
  gender?: string;
}

export interface GetCharacters {
  type: CharactersAllTypes;
  payload: CharactersParameters;
}

export interface Characters {
  type: CharactersAllTypes;
  payload: CharactersItem[];
}

export interface CharactersLength {
  type: CharactersAllTypes;
  payload: number
}

export const setCharacters = (hero: CharactersItem[]): Characters => ({
  type: CharactersAllTypes.LOAD_SUCCESS,
  payload: hero,
});

export const getCharacters = (payload: CharactersParameters): GetCharacters => ({
  type: CharactersAllTypes.LOAD_CHARACTER,
  payload,
});

export const setLength = (length: number): CharactersLength => ({
  type: CharactersAllTypes.SET_LENGTH,
  payload: length,
});

export type CharactersActions = Characters;
