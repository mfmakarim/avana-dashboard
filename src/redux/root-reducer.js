import { combineReducers } from 'redux';

import navReducer from './nav/nav.reducer';
import menuSettingsReducer from './menu-settings/menu-settings.reducer';

export default combineReducers({
    nav: navReducer,
    menuSettings: menuSettingsReducer
});