import { SagaIterator } from 'redux-saga';

import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';

import { setCharacters } from './charactersList.actions';
import { CharactersPaginationsTypes } from '../Pagination/pagination.actions';

import { getAllCharacters, getSingleCharacters } from '../../../api/api';
import { getPage, getSearch } from './charactersList.selector';
import { CharactersSearchTypes } from '../../shared/CustomInput/custom.input.actions';

export function* charactersLoad(): SagaIterator {
  const page = yield select(getPage);
  const data = yield call(getAllCharacters, page);
  yield put(setCharacters(data.results));
}

export function* charactersSearch(): SagaIterator {
  const name = yield select(getSearch);
  const page = yield select(getPage);

  const data = yield call(getSingleCharacters, name, page);

  yield put(setCharacters(data.results));
}

export function* watchCharactersLoad(): SagaIterator {
  yield takeEvery(CharactersPaginationsTypes.PAGE, charactersLoad);
  yield takeEvery(CharactersSearchTypes.SEARCH, charactersSearch);
}
