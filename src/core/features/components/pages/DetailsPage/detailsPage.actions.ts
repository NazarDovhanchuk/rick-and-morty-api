/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { CharactersItem } from './detailsPage.state';

/* eslint-disable @typescript-eslint/no-explicit-any */
export enum DetailsPageTypes {
  DETAILS = 'CHARACTERS_DETAILS',
  LOAD_DETAILS = 'CHARACTERS_LOAD_DETAILS',
}

interface DetailsParams {
  id: number
}

export interface SetID {
  type: DetailsPageTypes.DETAILS,
  payload: any
}

export interface SetDetails {
  type: DetailsPageTypes.LOAD_DETAILS,
  payload: CharactersItem[];
}

export const setDetails = (payload: CharactersItem[]): SetDetails => ({
  type: DetailsPageTypes.LOAD_DETAILS,
  payload,
});

export const setID = (payload: DetailsParams): SetID => ({
  type: DetailsPageTypes.DETAILS,
  payload,
});

export type CharactersPageActions = SetID | SetDetails;
