import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'formdata-polyfill';
import './index.scss';

import appMessages from './i18n';
import AccountPilet from './Pilet';

import './account-settings/_style.scss';
import './id-verification/_id-verification.scss';

export const messages = appMessages;

export default AccountPilet;
