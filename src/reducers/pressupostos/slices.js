/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

/** ESTIMATE LIST */
export const estimateListInitialState = {
  isLoading: true,
  error: null,
  estimateList: '',
};

export const estimateListSlice = createSlice({
  name: 'estimateList',
  initialState: estimateListInitialState,
  reducers: {
    getEstimateListRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.estimateList = [];
    },
    getEstimateList(state, action) {
      state.isLoading = false;
      state.error = null;
      state.estimateList = action.payload;
    },
    getEstimateListError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const estimateListActions = estimateListSlice.actions;


/** ESTIMATE DETAIL */

export const estimateDetailInitialState = {
  isLoading: true,
  error: null,
  estimateInfo: {},
  estimateDelete: null,
  estimateEdit: null,
};

export const estimateDetailSlice = createSlice({
  name: 'estimateDetail',
  initialState: estimateDetailInitialState,
  reducers: {
    createEstimateRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.estimateInfo = {};
    },
    createEstimate(state, action) {
      state.isLoading = false;
      state.error = null;
      state.estimateInfo = action.payload;
    },
    createEstimateError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteEstimateRequest(state) {
      state.isLoading = true;
      state.error = null;
      state.estimateDelete = null;
    },
    deleteEstimate(state, action) {
      state.isLoading = false;
      state.error = null;
      state.estimateDelete = action.payload;
    },
    deleteEstimateError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const estimateDetailActions = estimateDetailSlice.actions;