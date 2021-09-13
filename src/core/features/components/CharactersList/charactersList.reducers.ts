import {
  CharactersActions,
  CharactersActionsTypes,
} from './charactersList.actions';
import { CharactersListState } from './charactersList.state';

const initial: CharactersListState = {
  charasters: [],
};

const allCharacters = (state = initial, action: CharactersActions): CharactersListState => {
  switch (action.type) {
    case CharactersActionsTypes.LOAD_SUCCESS:
      return {
        charasters: [...action.payload],
      };

    default:
      return state;
  }
};

export default allCharacters;
