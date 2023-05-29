import { call, put, takeLatest } from 'redux-saga/effects';
import { frontendApiService } from 'services/frontendAPIService';

import { sessionActions } from './slices';

export function* getSessionSaga() {
    const response = yield call(frontendApiService.getSession);
    if (response.success) {
        yield put(sessionActions.getSessionStatus());
        localStorage.setItem('permissions', response.data.permissions);
    } else {
        yield put(sessionActions.getSessionStatusError(response.error));
        localStorage.removeItem('permissions');
    }
}

export function* getSessionCsrfTokenSaga() {
    const response = yield call(frontendApiService.getCSRF);
    if (response.success) {
        yield put(sessionActions.getCSRFToken(response.data));
    } else {
        yield put(sessionActions.getCSRFTokenError(response.error));
    }
}

export function* sessionLoginSaga(action) {
    const data = action.payload;
    const response = yield call(
        frontendApiService.login,
        data.email,
        data.password,
    );
    if (response.success) {
        yield put(sessionActions.sessionLogin(response.data));
        yield put(sessionActions.getSessionStatus());
    } else {
        yield put(sessionActions.sessionLoginError(response.error));
    }
}

export function* sessionLogoutSaga() {
    const response = yield call(frontendApiService.logout);
    if (response.success) {
        yield put(sessionActions.sessionLogout(response.data));
    } else {
        yield put(sessionActions.sessionLogoutError(response.error));
        localStorage.removeItem('permissions');
    }
}

// Root saga
export default function* loginviewSaga() {
    yield takeLatest(
        sessionActions.getSessionStatusRequest.type,
        getSessionSaga,
    );
    yield takeLatest(
        sessionActions.getCSRFTokenRequest.type,
        getSessionCsrfTokenSaga,
    );
    yield takeLatest(sessionActions.sessionLoginRequest.type, sessionLoginSaga);
    yield takeLatest(
        sessionActions.sessionLogoutRequest.type,
        sessionLogoutSaga,
    );
}
