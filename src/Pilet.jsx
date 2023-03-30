import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'formdata-polyfill';

import { DynamicModuleLoader } from 'redux-dynamic-modules-react';
import * as React from 'react';
import AccountSettingsPage from './account-settings/AccountSettingsPage';
import IdVerificationPage from './id-verification/IdVerificationPage';
import reduxConfig from './account-settings/data/module';

const piletSpec = {
  name: 'openEdx Account MFE - Pilet Version',
  version: '1.0.0',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '/pilets',
  setup(piralApi) {
    piralApi.registerPage('/account', () => (
      <DynamicModuleLoader modules={[reduxConfig]}>
        <AccountSettingsPage />
      </DynamicModuleLoader>
    ));
    piralApi.registerPage('/id-verification', () => (
      <DynamicModuleLoader modules={reduxConfig}>
        <IdVerificationPage />
      </DynamicModuleLoader>
    ));
  },

};
export default piletSpec;
