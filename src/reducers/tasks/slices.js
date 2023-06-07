/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

/** TASK LIST */
export const taskListInitialState = {
  isLoading: true,
  error: null,
  taskList: '',
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: taskListInitialState,
  reducers: {
      getTaskListRequest(state) {
          state.isLoading = true;
          state.error = null;
          state.taskList = [];
      },
      getTaskList(state, action) {
          state.isLoading = false;
          state.error = null;
          state.taskList = action.payload;
      },
      getTaskListError(state, action) {
          state.isLoading = false;
          state.error = action.payload;
      },
  },
});

export const taskListActions = taskListSlice.actions;