import { storeName } from './selectors';
import accountReducers from './reducers';
import accountSagas from './sagas';

export default (getAuthenticatedUser, getAuthenticatedHttpClient) => ({
  id: storeName,
  reducerMap: {
    [storeName]: accountReducers,
  },
  sagas: [accountSagas(getAuthenticatedUser, getAuthenticatedHttpClient)],
});
