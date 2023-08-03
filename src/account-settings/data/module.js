import { storeName } from './selectors';
import accountReducers from './reducers';
import notificationPreferencesReducer from '../../notification-preferences/data/reducers';
import accountSagas from './sagas';

export default () => ({
  id: storeName,
  reducerMap: {
    [storeName]: accountReducers,
    notificationPreferences: notificationPreferencesReducer,
  },
  sagas: [accountSagas()],
});
