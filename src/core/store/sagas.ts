import { fork, all } from 'redux-saga/effects';
import { watchCharactersLoad } from '../features/components/Pagination/pagination.sagas';

import { watchCharactersSearch } from '../features/shared/CustomInput/custom.input.sagas';

function* rootSaga(): Generator {
  yield all([fork(watchCharactersLoad), fork(watchCharactersSearch)]);
}

export default rootSaga;
