import { workerDetailInitialState, workerListInitialState } from './slices';

/**
 * Direct selector to the login state domain
 */

const selectWorkerListDomain = (state) => state.workerList || workerListInitialState;
const selectWorkerDetailDomain = (state) =>
    state.workerDetail || workerDetailInitialState;

export { selectWorkerDetailDomain, selectWorkerListDomain };
