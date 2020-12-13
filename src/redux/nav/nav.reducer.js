import NavActionTypes from './nav.types';

const INITIAL_STATE = {
    navItem: [],
    navItemChild: [],
    hidden: true,
    navClicked: '',
    navOpen: []
}

const navReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case NavActionTypes.GET_NAV_ITEM:
            return {
                ...state,
                navItem: action.payload
            }
        case NavActionTypes.GET_NAV_ITEM_CHILD:
            return {
                ...state,
                navItemChild: action.payload
            }
        case NavActionTypes.SET_NAV_CLICKED:
            return {
                ...state,
                navClicked: action.payload
            }
        case NavActionTypes.SET_NAV_OPEN:
            return {
                ...state,
                navOpen: action.payload
            }
        case NavActionTypes.TOGGLE_NAV_ITEM_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        default:
            return state;
    }
}

export default navReducer;