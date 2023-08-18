import { call, put, takeLatest } from 'redux-saga/effects';
import { frontendApiService } from '../../services/frontendAPIService';

import { workerDetailActions, workerListActions } from './slices';

/** WORKER LIST */
export function* getWorkersList() {
  const response = yield call(frontendApiService.getWorkers);
  if (response.success) yield put(workerListActions.getWorkerList(response.data));
  else yield put(workerListActions.getWorkerListError(response.error))
}

export function* workerListSaga() {
  yield takeLatest(workerListActions.getWorkerListRequest.type, getWorkersList)
}

/** WORKER DETAIL */

export function* createWorkerSaga(action) {
  const data = action.payload;
  let response;
  try {
    response = yield call(
      frontendApiService.createWorker,
      data.id,
      data.nom,
      data.preu,
      data.descripcio
    );

  } catch (err) {
    console.log(err);
  }
  if (response.success || response.status === 201) {
    console.log('---OK---');
    yield put(workerDetailActions.createWorker(response.data));
  } else {
    console.log('---ERROR---');
    yield put(workerDetailActions.createWorkerError(response.error));
  }
}

export function* deleteWorkerSaga(action) {
  const data = action.payload;
  console.log(action.payload);
  const response = yield call(frontendApiService.deleteWorker, data.id);
  if (response.success) {
    yield put(workerDetailActions.deleteWorker(response.data));
  } else {
    yield put(workerDetailActions.deleteWorkerError(response.error));
  }
}

export function* workerDetailSaga() {
  yield takeLatest(workerDetailActions.createWorker.type, createWorkerSaga);
  yield takeLatest(workerDetailActions.deleteWorker.type, deleteWorkerSaga);
}
