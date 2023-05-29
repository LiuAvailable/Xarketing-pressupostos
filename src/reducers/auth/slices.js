import { createSlice } from '@reduxjs/toolkit';
// import { useInjectReducer } from 'redux-injectors';

/* eslint-disable default-case, no-param-reassign */
// eslint-disable-next-line default-param-last
export const initialState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
    CSRFToken: null,
    email: null,
    needCSRFToken: false,
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        getCSRFTokenRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        getCSRFToken(state, action) {
            state.CSRFToken = action.CSRFToken;
            state.isLoading = false;
            state.error = null;
            state.needCSRFToken = false;
        },
        getCSRFTokenError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.needCSRFToken = true;
        },

        getSessionStatusRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        getSessionStatus(state) {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.error = null;
        },
        getSessionStatusError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

        sessionLoginRequest(state) {
            state.isLoading = true;
            state.error = null;
            state.isAuthenticated = false;
        },
        sessionLogin(state) {
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = true;
            state.needCSRFToken = false;
        },
        sessionLoginError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

        sessionLogoutRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        sessionLogout(state) {
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = false;
            state.needCSRFToken = true;
        },
        sessionLogoutError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const sessionActions = sessionSlice.actions;

// export const useSessionSlice = () => {
//     useInjectReducer({ key: sessionSlice.name, reducer: sessionSlice.reducer });
//     return { sessionActions: sessionSlice.actions };
// };

// export const sessionReducer = sessionSlice.reducer;
