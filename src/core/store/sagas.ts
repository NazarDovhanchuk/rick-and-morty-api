import { all, fork } from 'redux-saga/effects';

import charactersLoad from '../features/components/CharactersList/charactersList.sagas';

function* rootSaga(): Generator {
  yield all([fork(charactersLoad)]);
}

export default rootSaga;
