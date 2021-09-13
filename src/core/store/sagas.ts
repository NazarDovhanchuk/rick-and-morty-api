import { fork, all } from 'redux-saga/effects';

import { watchCharactersLoad } from '../features/components/CharactersList/charactersList.sagas';

function* rootSaga(): Generator {
  yield all([fork(watchCharactersLoad)]);
}

export default rootSaga;
