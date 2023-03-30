import { storeName } from './selectors';
import accountReducers from './reducers';
import notificationPreferencesReducer from '../../notification-preferences/data/reducers';
import accountSagas from './sagas';

export default (getAuthenticatedUser, getAuthenticatedHttpClient) => ({
  id: storeName,
  reducerMap: {
    [storeName]: accountReducers,
    notificationPreferences: notificationPreferencesReducer,
  },
  sagas: [accountSagas(getAuthenticatedUser, getAuthenticatedHttpClient)],
});
