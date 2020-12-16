import NavActionTypes from './nav.types';

const INITIAL_STATE = {
    navItem: [],
    navItemChild: [],
    navOpen: [],
}

const navReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case NavActionTypes.GET_NAV_ITEM:
            return {
                ...state,
                navItem: action.payload
            }
        case NavActionTypes.SET_NAV_ITEM:
            return {
                ...state,
                navItem: action.payload
            }
        case NavActionTypes.GET_NAV_ITEM_CHILD:
            return {
                ...state,
                navItemChild: action.payload
            }
        case NavActionTypes.SET_NAV_OPEN:
            return {
                ...state,
                navOpen: action.payload
            }
       
        default:
            return state;
    }
}

export default navReducer;