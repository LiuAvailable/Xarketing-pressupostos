import { call, put, takeLatest } from 'redux-saga/effects';
import { frontendApiService } from '../../services/frontendAPIService';

import { materialDetailActions, materialListActions } from './slices';

/** material LIST */
export function* getMaterialList() {
  const response = yield call(frontendApiService.getMaterials);
  if(response.success) yield put(materialListActions.getMaterialsList(response.data));
  else yield put(materialListActions.getMaterialListError(response.error))
}

export function* materialListSaga() {
  yield takeLatest(materialListActions.getMaterialsListRequest.type, getMaterialList)
}

/** material DETAIL */
export function* createMaterialSaga(action) {
  const data = action.payload;
  let response;
  try{
    response = yield call(
      frontendApiService.createMaterial,
        data.id,
        data.nom,
        data.preu,
        data.descripcio
      );

  } catch(err) {
    console.log(err);
  }
    if(response.success || response.status === 201) {
      yield put(materialDetailActions.createMaterial(response.data));
    } else {
      yield put(materialDetailActions.createMaterialError(response.error));
    }
}

export function* deletematerialSaga(action) {
  const data = action.payload;
  console.log(action.payload);
  const response = yield call(frontendApiService.deleteMaterial, data.id);
  if (response.success) {
      yield put(materialDetailActions.deleteMaterial(response.data));
  } else {
      yield put(materialDetailActions.deleteMaterialError(response.error));
  }
}

export function* materialDetailSaga() {
  yield takeLatest(materialDetailActions.createMaterial.type, createMaterialSaga);
  yield takeLatest(materialDetailActions.deleteMaterial.type, deletematerialSaga);
}
