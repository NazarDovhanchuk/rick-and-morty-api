import { CharactersItem } from '../../CharactersList/charactersList.state';
import { CharactersPageActions, DetailsPageTypes } from './detailsPage.actions';

const initialID = 0;

export const charactersID = (state = initialID, action: CharactersPageActions): number => {
  switch (action.type) {
    case DetailsPageTypes.DETAILS:
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

export const charactersDetails = (state = initial, action:CharactersPageActions):CharactersItem => {
  switch (action.type) {
    case DetailsPageTypes.LOAD_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
