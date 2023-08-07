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


/** TASK DETAIL */

export const taskDetailInitialState = {
  isLoading: true,
  error: null,
  taskInfo: {},
  taskDelete: null,
  taskEdit: null,
};

export const taskDetailSlice = createSlice({
  name: 'taskDetail',
  initialState: taskDetailInitialState,
  reducers: {
    createTaskRequest(state){
      state.isLoading = true;
      state.error = null;
      state.taskInfo = {};
    },
    createTask(state,action){
      state.isLoading = false;
      state.error = null;
      state.taskInfo = action.payload;
    },
    createTaskError(state, action){
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteTaskRequest(state) {
        state.isLoading = true;
        state.error = null;
        state.taskDelete = null;
    },
    deleteTask(state, action) {
        state.isLoading = false;
        state.error = null;
        state.taskDelete = action.payload;
    },
    deleteTaskError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
    editTaskRequest(state) {
        state.isLoading = true;
        state.error = null;
        state.taskEdit = {};
    },
    editTask(state, action) {
        state.isLoading = false;
        state.error = null;
        state.taskEdit = action.payload;
    },
    editTaskError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
  }
});

export const taskDetailActions = taskDetailSlice.actions;