import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { estimateDetailSaga, estimateListSaga } from './saga';
import { selectEstimateListDomain, selectEstimateDetailDomain } from './selectors';
import { estimateDetailSlice, estimateListSlice } from './slices';

/** ESTIMATE LIST */
export const useEstimateListSlice = () => {
  useInjectReducer({
    key: estimateListSlice.name,
    reducer: estimateListSlice.reducer,
  });
  useInjectSaga({ key: estimateListSlice.name, saga: estimateListSaga });
  return { estimateListActions: estimateListSlice.actions, selectEstimateListDomain }
};

export const estimateListReducer = estimateListSlice.reducer;


/** ESTIMATE DETAIL */

export const useEstimateDetailSlice = () => {
  useInjectReducer({
    key: estimateDetailSlice.name,
    reducer: estimateDetailSlice.reducer,
  });
  useInjectSaga({ key: estimateDetailSlice.name, saga: estimateDetailSaga });
  return { estimateDetailActions: estimateDetailSlice.actions, selectEstimateDetailDomain };
};

export const estimateDetailReducer = estimateDetailSlice.reducer;