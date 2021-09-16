import { fork, all } from 'redux-saga/effects';
import { charactersWatcher } from '../features/components/CharactersList/charactersList.sagas';

function* rootSaga(): Generator {
  yield all([fork(charactersWatcher)]);
}

export default rootSaga;
