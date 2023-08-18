import { estimateDetailInitialState, estimateListInitialState } from './slices';

/**
 * Direct selector to the login state domain
 */

const selectEstimateListDomain = (state) => state.estimateList || estimateListInitialState;
const selectEstimateDetailDomain = (state) =>
    state.estimateDetail || estimateDetailInitialState;

export { selectEstimateDetailDomain, selectEstimateListDomain };
