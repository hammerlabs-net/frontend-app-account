import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'formdata-polyfill';

import { DynamicModuleLoader } from 'redux-dynamic-modules';
import * as React from 'react';
import AccountSettingsPage from './account-settings/AccountSettingsPage';
import IdVerificationPage from './id-verification/IdVerificationPage';
import reduxConfig from './account-settings/data/module';
import appMessages from './i18n';

const piletSpec = {
  name: 'openEdx Account MFE - Pilet Version',
  version: '1.0.0',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '/pilets',
  setup(piralApi) {
    piralApi.mergeMessages(appMessages);

    piralApi.mergeConfig({
      SUPPORT_URL: process.env.SUPPORT_URL,
      COACHING_ENABLED: (process.env.COACHING_ENABLED || false),
      ENABLE_DEMOGRAPHICS_COLLECTION: (process.env.ENABLE_DEMOGRAPHICS_COLLECTION || false),
      DEMOGRAPHICS_BASE_URL: process.env.DEMOGRAPHICS_BASE_URL,
      ENABLE_COPPA_COMPLIANCE: (process.env.ENABLE_COPPA_COMPLIANCE || false),
      ENABLE_DOB_UPDATE: (process.env.ENABLE_DOB_UPDATE || false),
      MARKETING_EMAILS_OPT_IN: (process.env.MARKETING_EMAILS_OPT_IN || false),
      PASSWORD_RESET_SUPPORT_LINK: process.env.PASSWORD_RESET_SUPPORT_LINK,
    }, 'App loadConfig override handler');

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
