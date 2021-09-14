import {
  CharactersActions,
  CharactersAllTypes,
  CharactersLength,
} from './charactersList.actions';
import { CharactersListState } from './charactersList.state';

const initial: CharactersListState = {
  charasters: [],
};

export const allCharacters = (state = initial, action: CharactersActions): CharactersListState => {
  switch (action.type) {
    case CharactersAllTypes.LOAD_SUCCESS:
      return {
        charasters: [...action.payload],
      };

    default:
      return state;
  }
};

export const setLength = (state = 1, action: CharactersLength): number => {
  switch (action.type) {
    case CharactersAllTypes.SET_LENGTH:
      return action.payload;

    default:
      return state;
  }
};
