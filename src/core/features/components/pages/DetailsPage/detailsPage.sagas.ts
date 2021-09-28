/* eslint-disable @typescript-eslint/no-explicit-any */
import { SagaIterator } from '@redux-saga/types';
import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import { getCharactersByID } from '../../../../api/api';
import { DetailsPageTypes, setDetails, setID } from './detailsPage.actions';

function* getDetailsSaga({ payload }: ReturnType<typeof setID>): SagaIterator {
  const data = yield call(getCharactersByID, payload);

  yield put(setDetails(data));
}

export function* detailsWatcher():SagaIterator {
  yield takeEvery(DetailsPageTypes.DETAILS, getDetailsSaga);
}
