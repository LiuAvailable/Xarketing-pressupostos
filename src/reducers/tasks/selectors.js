import { taskListInitialState } from './slices';

/**
 * Direct selector to the login state domain
 */

const selectTaskListDomain = (state) => state.taskList || taskListInitialState;


export { selectTaskListDomain };
