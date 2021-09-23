import { SagaIterator } from 'redux-saga';

import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import { getCharactersAPI } from '../../../api/api';
import { CharactersSearch, getSearch, setSearch } from './charactersSearch.actions';

function* getSearchSaga({ payload }: ReturnType<typeof getSearch>): SagaIterator {
  const data = yield call(getCharactersAPI, payload);

  console.log(data);

  yield put(setSearch(data.results));
}

export function* seacrhWatcher():SagaIterator {
  yield takeEvery(CharactersSearch.LOAD_SEARCH, getSearchSaga);
}
