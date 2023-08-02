import { call, put, takeLatest } from 'redux-saga/effects';
import { frontendApiService } from '../../services/frontendAPIService';

import { taskDetailActions, taskListActions } from './slices';

/** TASK LIST */
export function* getTasksList() {
  const response = yield call(frontendApiService.getTasks);
  if(response.success) yield put(taskListActions.getTaskList(response.data));
  else yield put(taskListActions.getTaskListError(response.error))
}

export function* taskListSaga() {
  yield takeLatest(taskListActions.getTaskListRequest.type, getTasksList)
}

/** TASK DETAIL */

export function* createTaskSaga(action) {
  console.log('AAAAAAAAAABBBBBBBB')
  const data = action.payload;
  let response;
  try{
    response = yield call(
      frontendApiService.createTask,
        data.id,
        data.nom,
        data.preu,
        data.descripcio
      );

  } catch(err) {
    console.log(err);
  }
    if(response.success || response.status === 201) {
      console.log('---OK---');
      yield put(taskDetailActions.createTask(response.data));
    } else {
      console.log('---ERROR---');
      yield put(taskDetailActions.createTaskError(response.error));
    }
}

export function* taskDetailSaga() {
  yield takeLatest(taskDetailActions.createTask.type, createTaskSaga);
}
