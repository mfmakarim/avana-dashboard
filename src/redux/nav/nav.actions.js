import NavActionTypes from './nav.types';

export const getNavItem = navItem => ({
    type: NavActionTypes.GET_NAV_ITEM,
    payload: navItem
});

export const setNavItem = navItem => ({
    type: NavActionTypes.SET_NAV_ITEM,
    payload: navItem
});

export const getNavItemChild = navItemChild => ({
    type: NavActionTypes.GET_NAV_ITEM_CHILD,
    payload: navItemChild
});
export const setNavOpen = navOpen => ({
    type: NavActionTypes.SET_NAV_OPEN,
    payload: navOpen
});