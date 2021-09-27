/* eslint-disable @typescript-eslint/no-unused-vars */
import { SagaIterator } from 'redux-saga';

import {
  call, delay, put, takeEvery,
} from 'redux-saga/effects';
import { getCharactersAPI } from '../../../api/api';
import { setLength } from '../CharactersList/charactersList.actions';
import {
  CharactersSearch, getSearch, setSearch, toggleLoadMore,
} from './charactersSearch.actions';

function* getSearchSaga({ payload }: ReturnType<typeof getSearch>): SagaIterator {
  yield delay(500);

  const data = yield call(getCharactersAPI, payload);

  yield put(setLength(data.info.pages));
  yield put(setSearch(data.results));
  yield put(toggleLoadMore(false));
}

export function* seacrhWatcher():SagaIterator {
  yield takeEvery(CharactersSearch.LOAD_SEARCH, getSearchSaga);
}
