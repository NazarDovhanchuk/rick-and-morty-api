import { CharactersPageTypes, CharactersPageActions } from './pagination.actions';

const initial = 1;

const paginationReducer = (state = initial, action: CharactersPageActions): number => {
  switch (action.type) {
    case CharactersPageTypes.PAGE:
      return action.payload;

    default:
      return state;
  }
};

export default paginationReducer;
