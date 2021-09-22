import { SagaIterator } from '@redux-saga/types';
import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import { getCharactersByID } from '../../../api/api';
import { CharactersPageTypes, setDetails, setID } from './charactersPage.actions';

function* getDetailsSaga({ payload }: ReturnType<typeof setID>): SagaIterator {
  const data = yield call(getCharactersByID, payload);

  yield put(setDetails(data));
}

export function* detailsWatcher():SagaIterator {
  yield takeEvery(CharactersPageTypes.DETAILS, getDetailsSaga);
}
