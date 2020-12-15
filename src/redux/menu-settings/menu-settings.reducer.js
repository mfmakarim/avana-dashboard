import menuSettingsActionTypes from './menu-settings.types';

const INITIAL_STATE = {
    menuSettings: [],
}

const menuSettingsReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case menuSettingsActionTypes.GET_NAV_ITEM:
            return {
                ...state,
                menuSettings: action.payload
            }
            default:
                return state;
    }
}
    
export default menuSettingsReducer;