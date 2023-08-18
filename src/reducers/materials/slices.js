/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

/** material LIST */
export const materialListInitialState = {
  isLoading: true,
  error: null,
  materialList: '',
};

export const materialListSlice = createSlice({
  name: 'materialList',
  initialState: materialListInitialState,
  reducers: {
      getMaterialsListRequest(state) {
          state.isLoading = true;
          state.error = null;
          state.materialList = [];
      },
      getMaterialsList(state, action) {
          state.isLoading = false;
          state.error = null;
          state.materialList = action.payload;
      },
      getMaterialListError(state, action) {
          state.isLoading = false;
          state.error = action.payload;
      },
  },
});

export const materialListActions = materialListSlice.actions;


/** material DETAIL */

export const materialDetailInitialState = {
  isLoading: true,
  error: null,
  materialInfo: {},
  materialDelete: null,
  materialEdit: null,
};

export const materialDetailSlice = createSlice({
  name: 'materialDetail',
  initialState: materialDetailInitialState,
  reducers: {
    createMaterialRequest(state){
      state.isLoading = true;
      state.error = null;
      state.materialInfo = {};
    },
    createMaterial(state,action){
      state.isLoading = false;
      state.error = null;
      state.materialInfo = action.payload;
    },
    createMaterialError(state, action){
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteMaterialRequest(state) {
        state.isLoading = true;
        state.error = null;
        state.materialDelete = null;
    },
    deleteMaterial(state, action) {
        state.isLoading = false;
        state.error = null;
        state.materialDelete = action.payload;
    },
    deleteMaterialError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
    editMaterialRequest(state) {
        state.isLoading = true;
        state.error = null;
        state.materialEdit = {};
    },
    editMaterial(state, action) {
        state.isLoading = false;
        state.error = null;
        state.materialEdit = action.payload;
    },
    editMaterialError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
  }
});

export const materialDetailActions = materialDetailSlice.actions;