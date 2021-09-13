import { fork, all } from 'redux-saga/effects';
import { loadDefault } from '../features/components/CharactersList/charactersList.sagas';
import { watchCharactersLoad } from '../features/components/Pagination/pagination.sagas';

import { watchCharactersSearch } from '../features/shared/CustomInput/custom.input.sagas';

function* rootSaga(): Generator {
  yield all([fork(loadDefault), fork(watchCharactersLoad), fork(watchCharactersSearch)]);
}

export default rootSaga;
