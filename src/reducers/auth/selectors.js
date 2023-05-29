// import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slices';

/**
 * Direct selector to the login state domain
 */

const selectSessionDomain = (state) => state.session || initialState;

export { selectSessionDomain };
