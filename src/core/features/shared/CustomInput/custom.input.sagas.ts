import { SagaIterator } from 'redux-saga';
import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import { getSingleCharacters } from '../../../api/api';
import { setCharacters } from '../../components/CharactersList/charactersList.actions';
import { getSearch } from './custom.input.selector';
import { getPage } from '../../components/Pagination/pagination.selector';
import { CharactersSearchTypes } from './custom.input.actions';

export function* charactersSearch(): SagaIterator {
  const name = yield select(getSearch);
  const page = yield select(getPage);

  const data = yield call(getSingleCharacters, name, page);

  yield put(setCharacters(data.results));
}

export function* watchCharactersSearch(): SagaIterator {
  yield takeEvery(CharactersSearchTypes.SEARCH, charactersSearch);
}
