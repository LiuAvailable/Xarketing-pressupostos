import { call, put, takeLatest } from 'redux-saga/effects';
import { frontendApiService } from '../../services/frontendAPIService';

import { estimateDetailActions, estimateListActions } from './slices';

/** ESTIMATE LIST */
export function* getEstimatesList() {
  const response = yield call(frontendApiService.getEstimates);
  if (response.success) yield put(estimateListActions.getEstimateList(response.data));
  else yield put(estimateListActions.getEstimateListError(response.error))
}

export function* estimateListSaga() {
  yield takeLatest(estimateListActions.getEstimateListRequest.type, getEstimatesList)
}

/** ESTIMATE DETAIL */

export function* createEstimateSaga(action) {
  const data = action.payload;
  let response;
  try {
    response = yield call(
      frontendApiService.createEstimate,
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
    yield put(estimateDetailActions.createEstimate(response.data));
  } else {
    console.log('---ERROR---');
    yield put(estimateDetailActions.createEstimateError(response.error));
  }
}

export function* deleteEstimateSaga(action) {
  const data = action.payload;
  console.log(action.payload);
  const response = yield call(frontendApiService.deleteEstimate, data.id);
  if (response.success) {
    yield put(estimateDetailActions.deleteEstimate(response.data));
  } else {
    yield put(estimateDetailActions.deleteEstimateError(response.error));
  }
}

export function* estimateDetailSaga() {
  yield takeLatest(estimateDetailActions.createEstimate.type, createEstimateSaga);
  yield takeLatest(estimateDetailActions.deleteEstimate.type, deleteEstimateSaga);
}
