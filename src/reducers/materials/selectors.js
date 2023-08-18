import { materialDetailInitialState, materialListInitialState } from './slices';

/**
 * Direct selector to the login state domain
 */

const selectMaterialListDomain = (state) => state.materialList || materialListInitialState;
const selectMaterialDetailDomain = (state) =>
    state.materialDetail || materialDetailInitialState;

export { selectMaterialDetailDomain, selectMaterialListDomain };
