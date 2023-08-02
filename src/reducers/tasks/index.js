import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { taskDetailSaga, taskListSaga } from './saga';
import { selectTaskListDomain,selectTaskDetailDomain } from './selectors';
import { taskDetailSlice, taskListSlice } from './slices';

/** USER LIST */
export const useTaskListSlice = () => {
  useInjectReducer({
    key: taskListSlice.name,
    reducer: taskListSlice.reducer,
  });
  useInjectSaga({ key: taskListSlice.name, saga: taskListSaga });
  return { taskListActions: taskListSlice.actions, selectTaskListDomain }
};

export const taskListReducer = taskListSlice.reducer;


/** USER DETAIL */

export const useTaskDetailSlice = () => {
  useInjectReducer({
    key: taskDetailSlice.name,
    reducer: taskDetailSlice.reducer,
  });
  useInjectSaga({ key: taskDetailSlice.name, saga: taskDetailSaga });
  return { taskDetailActions: taskDetailSlice.actions, selectTaskDetailDomain };
};

export const taskDetailReducer = taskDetailSlice.reducer;