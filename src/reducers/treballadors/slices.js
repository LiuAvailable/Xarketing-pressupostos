/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

/** WORKER LIST */
export const workerListInitialState = {
  isLoading: true,
  error: null,
  workerList: '',
};

export const workerListSlice = createSlice({
  name: 'workerList',
  initialState: workerListInitialState,
  reducers: {
    getWorkerListRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.workerList = [];
    },
    getWorkerList(state, action) {
      state.isLoading = false;
      state.error = null;
      state.workerList = action.payload;
    },
    getWorkerListError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const workerListActions = workerListSlice.actions;


/** WORKER DETAIL */

export const workerDetailInitialState = {
  isLoading: true,
  error: null,
  workerInfo: {},
  workerDelete: null,
  workerEdit: null,
};

export const workerDetailSlice = createSlice({
  name: 'workerDetail',
  initialState: workerDetailInitialState,
  reducers: {
    createWorkerRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.workerInfo = {};
    },
    createWorker(state, action) {
      state.isLoading = false;
      state.error = null;
      state.workerInfo = action.payload;
    },
    createWorkerError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteWorkerRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.workerDelete = null;
    },
    deleteWorker(state, action) {
      state.isLoading = false;
      state.error = null;
      state.workerDelete = action.payload;
    },
    deleteWorkerError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const workerDetailActions = workerDetailSlice.actions;