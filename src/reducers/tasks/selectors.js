import { taskDetailInitialState, taskListInitialState } from './slices';

/**
 * Direct selector to the login state domain
 */

const selectTaskListDomain = (state) => state.taskList || taskListInitialState;
const selectTaskDetailDomain = (state) =>
    state.taskDetail || taskDetailInitialState;

export { selectTaskDetailDomain, selectTaskListDomain };
