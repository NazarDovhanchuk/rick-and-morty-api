import { fork, all } from 'redux-saga/effects';
import { charactersWatcher } from '../features/components/CharactersList/charactersList.sagas';
import { detailsWatcher } from '../features/components/CharactersPage/charactersPage.sagas';
import { seacrhWatcher } from '../features/components/CharactersSearch/charactersSearch.sagas';

function* rootSaga(): Generator {
  yield all([fork(charactersWatcher), fork(detailsWatcher), fork(seacrhWatcher)]);
}

export default rootSaga;
