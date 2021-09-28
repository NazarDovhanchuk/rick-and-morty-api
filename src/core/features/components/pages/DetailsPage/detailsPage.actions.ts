import { CharactersItem } from './detailsPage.state';

export enum DetailsPageTypes {
  DETAILS = 'CHARACTERS_DETAILS',
  LOAD_DETAILS = 'CHARACTERS_LOAD_DETAILS',
}

export interface SetID {
  type: DetailsPageTypes.DETAILS,
  payload: number
}

export interface SetDetails {
  type: DetailsPageTypes.LOAD_DETAILS,
  payload: CharactersItem[];
}

export const setDetails = (payload: CharactersItem[]): SetDetails => ({
  type: DetailsPageTypes.LOAD_DETAILS,
  payload,
});

export const setID = (id: number): SetID => ({
  type: DetailsPageTypes.DETAILS,
  payload: id,
});

export type CharactersPageActions = SetID | SetDetails;
