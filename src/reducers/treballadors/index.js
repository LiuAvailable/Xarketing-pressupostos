import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { workerDetailSaga, workerListSaga } from './saga';
import { selectWorkerListDomain, selectWorkerDetailDomain } from './selectors';
import { workerDetailSlice, workerListSlice } from './slices';

/** WORKER LIST */
export const useWorkerListSlice = () => {
  useInjectReducer({
    key: workerListSlice.name,
    reducer: workerListSlice.reducer,
  });
  useInjectSaga({ key: workerListSlice.name, saga: workerListSaga });
  return { workerListActions: workerListSlice.actions, selectWorkerListDomain }
};

export const workerListReducer = workerListSlice.reducer;


/** WORKER DETAIL */

export const useWorkerDetailSlice = () => {
  useInjectReducer({
    key: workerDetailSlice.name,
    reducer: workerDetailSlice.reducer,
  });
  useInjectSaga({ key: workerDetailSlice.name, saga: workerDetailSaga });
  return { workerDetailActions: workerDetailSlice.actions, selectWorkerDetailDomain };
};

export const workerDetailReducer = workerDetailSlice.reducer;