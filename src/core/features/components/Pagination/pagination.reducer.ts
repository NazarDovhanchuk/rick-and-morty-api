import { CharactersPaginationsTypes, CharactersPaginationsActions } from './pagination.actions';

const initial = 1;

const paginationReducer = (state = initial, action: CharactersPaginationsActions): number => {
  switch (action.type) {
    case CharactersPaginationsTypes.PAGE:
      return action.payload;

    default:
      return state;
  }
};

export default paginationReducer;
