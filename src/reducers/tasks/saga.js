import { call, put, takeLatest } from 'redux-saga/effects';
import { frontendApiService } from '../../services/frontendAPIService';

import { taskListActions } from './slices';

/** TASK LIST */
export function* getTasksList() {
  const response = yield call(frontendApiService.getTasks);
  if(response.success) yield put(taskListActions.getTaskList(response.data));
  else yield put(taskListActions.getTaskListError(response.error))
}

export function* taskListSaga() {
  yield takeLatest(taskListActions.getTaskListRequest.type, getTasksList)
}
