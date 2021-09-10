import { all, fork } from 'redux-saga/effects';

import charactersLoad from '../features/components/CharactersList/charactersList.sagas';
import setPage from '../features/components/Pagination/pagination.sagas';

function* rootSaga(): Generator {
  yield all([fork(charactersLoad), fork(setPage)]);
}

export default rootSaga;
