import { combineReducers } from 'redux';

import navReducer from './nav/nav.reducer';

export default combineReducers({
    nav: navReducer
});