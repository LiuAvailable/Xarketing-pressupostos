/**
 * Combine all reducers in this file and export the combined reducers.
 */


import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { sessionReducer } from './auth/index';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const rootPersistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['session'],
};

const sessionPersistConfig = {
    key: 'session',
    version: 1,
    storage,
    whitelist: ['session'],
};


export default function createReducer(injectedReducers = {}) {
    return persistReducer(
        rootPersistConfig,
        combineReducers({
            session: persistReducer(sessionPersistConfig, sessionReducer),
            ...injectedReducers,
        }),
    );
}