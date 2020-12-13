import NavActionTypes from './nav.types';

export const getNavItem = navItem => ({
    type: NavActionTypes.GET_NAV_ITEM,
    payload: navItem
});

export const getNavItemChild = navItemChild => ({
    type: NavActionTypes.GET_NAV_ITEM_CHILD,
    payload: navItemChild
});
export const setNavClicked = navClicked => ({
    type: NavActionTypes.SET_NAV_CLICKED,
    payload: navClicked
});
export const setNavOpen = navOpen => ({
    type: NavActionTypes.SET_NAV_OPEN,
    payload: navOpen
});
export const toggleNavItemHidden = () => ({
    type: NavActionTypes.TOGGLE_NAV_ITEM_HIDDEN
});