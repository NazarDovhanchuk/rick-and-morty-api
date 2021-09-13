import { CharactersSearchActions, CharactersSearchTypes } from './custom.input.actions';

const initial = '';

const searchReducer = (state = initial, action: CharactersSearchActions): string => {
  switch (action.type) {
    case CharactersSearchTypes.SEARCH:
      return action.payload;

    default:
      return state;
  }
};

export default searchReducer;
