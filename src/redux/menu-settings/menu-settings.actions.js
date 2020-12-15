import menuSettingsActionTypes from './menu-settings.types';

export const getNavItem = menuSettings => ({
    type: menuSettingsActionTypes.UPDATE_MENU_SETTINGS,
    payload: menuSettings
});