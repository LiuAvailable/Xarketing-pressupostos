import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { materialDetailSaga, materialListSaga } from './saga';
import { selectMaterialListDomain,selectMaterialDetailDomain } from './selectors';
import { materialDetailSlice, materialListSlice } from './slices';

/** USER LIST */
export const useMaterialListSlice = () => {
  useInjectReducer({
    key: materialListSlice.name,
    reducer: materialListSlice.reducer,
  });
  useInjectSaga({ key: materialListSlice.name, saga: materialListSaga });
  return { materialListActions: materialListSlice.actions, selectMaterialListDomain }
};

export const materialsListReducer = materialListSlice.reducer;


/** USER DETAIL */

export const useMaterialDetailSlice = () => {
  useInjectReducer({
    key: materialDetailSlice.name,
    reducer: materialDetailSlice.reducer,
  });
  useInjectSaga({ key: materialDetailSlice.name, saga: materialDetailSaga });
  return { materialDetailActions: materialDetailSlice.actions, selectMaterialDetailDomain };
};

export const materialDetailReducer = materialDetailSlice.reducer;