/* eslint-disable max-len */
import { CharactersItem } from '../CharactersList/charactersList.state';
import { CharactersPageActions, CharactersPageTypes } from './charactersPage.actions';

const initialID = 0;

export const charactersID = (state = initialID, action: CharactersPageActions): number => {
  switch (action.type) {
    case CharactersPageTypes.DETAILS:
      return action.payload;

    default:
      return state;
  }
};

const initial: CharactersItem = {
  id: 0,
  name: '',
  status: '',
  type: '',
  gender: '',
  image: '',
  url: '',
  species: '',
  alive: '',
  location: '',
};

export const charactersDetails = (state = initial, action:CharactersPageActions): CharactersItem => {
  switch (action.type) {
    case CharactersPageTypes.LOAD_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
