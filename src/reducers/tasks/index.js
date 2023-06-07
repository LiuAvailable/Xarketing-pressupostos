import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { taskListSaga } from './saga';
import { selectTaskListDomain } from './selectors';
import { taskListSlice } from './slices';

/** USER LIST */
export const useTaskListSlice = () => {
  useInjectReducer({
    key: taskListSlice.name,
    reducer: taskListSlice.reducer,
  });
  useInjectSaga({key: taskListSlice.name, saga: taskListSaga});
  return {taskListActions: taskListSlice.actions, selectTaskListDomain}
};

export const taskListReducer = taskListSlice.reducer;