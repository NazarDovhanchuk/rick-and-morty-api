/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { CharactersItem } from './charactersPage.state';

/* eslint-disable @typescript-eslint/no-explicit-any */
export enum CharactersPageTypes {
  DETAILS = 'CHARACTERS_DETAILS',
  LOAD_DETAILS = 'CHARACTERS_LOAD_DETAILS',
}

interface DetailsParams {
  id: number
}

export interface SetID {
  type: CharactersPageTypes.DETAILS,
  payload: any
}

export interface SetDetails {
  type: CharactersPageTypes.LOAD_DETAILS,
  payload: CharactersItem[];
}

export const setDetails = (payload: CharactersItem[]): SetDetails => ({
  type: CharactersPageTypes.LOAD_DETAILS,
  payload,
});

export const setID = (payload: DetailsParams): SetID => ({
  type: CharactersPageTypes.DETAILS,
  payload,
});

export type CharactersPageActions = SetID | SetDetails;
