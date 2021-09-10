import { CharactersActions, CharactersActionsTypes } from './pagination.actions';

const initial = 1;

const paginationReducer = (state = initial, action: CharactersActions): number => {
  switch (action.type) {
    case CharactersActionsTypes.PAGE:
      return action.payload;

    default:
      return state;
  }
};

export default paginationReducer;
