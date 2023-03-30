import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'formdata-polyfill';

import { DynamicModuleLoader } from 'redux-dynamic-modules';
import AccountSettingsPage from './account-settings/AccountSettingsPage';
import IdVerificationPage from './id-verification/IdVerificationPage';
import CoachingConsent from './account-settings/coaching/CoachingConsent';
import reduxConfig from './account-settings/data/module';
import appMessages from './i18n';
import NotificationCourses from './notification-preferences/NotificationCourses';
import NotificationPreferences from './notification-preferences/NotificationPreferences';

// eslint-disable-next-line import/prefer-default-export
export function setup(piralApi) {
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
    LEARNER_FEEDBACK_URL: process.env.LEARNER_FEEDBACK_URL,
  }, 'Account MFE Config');

  piralApi.registerPage('/coaching_consent', () => (
    <DynamicModuleLoader modules={[reduxConfig(piralApi.getAuthenticatedUser, piralApi.getAuthenticatedHttpClient)]}>
      <CoachingConsent />
    </DynamicModuleLoader>
  ));
  piralApi.registerPage('/account', () => (
    <DynamicModuleLoader modules={[reduxConfig(piralApi.getAuthenticatedUser, piralApi.getAuthenticatedHttpClient)]}>
      <AccountSettingsPage />
    </DynamicModuleLoader>
  ));
  piralApi.registerPage('/id-verification', () => (
    <DynamicModuleLoader modules={[reduxConfig(piralApi.getAuthenticatedUser, piralApi.getAuthenticatedHttpClient)]}>
      <IdVerificationPage />
    </DynamicModuleLoader>
  ));
  piralApi.registerPage('/notifications/:courseId', () => (
    <DynamicModuleLoader modules={[reduxConfig(piralApi.getAuthenticatedUser, piralApi.getAuthenticatedHttpClient)]}>
      <NotificationPreferences />
    </DynamicModuleLoader>
  ));
  piralApi.registerPage('/notifications', () => (
    <DynamicModuleLoader modules={[reduxConfig(piralApi.getAuthenticatedUser, piralApi.getAuthenticatedHttpClient)]}>
      <NotificationCourses />
    </DynamicModuleLoader>
  ));
}
