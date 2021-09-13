import {
  CharactersActions,
  CharactersAllTypes,
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
