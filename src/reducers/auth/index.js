import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import loginviewSaga from './saga';
import { sessionSlice } from './slices';

export const useSessionSlice = () => {
    useInjectReducer({ key: sessionSlice.name, reducer: sessionSlice.reducer });
    useInjectSaga({ key: 'session', saga: loginviewSaga });
    return { sessionActions: sessionSlice.actions };
};

export const sessionReducer = sessionSlice.reducer;