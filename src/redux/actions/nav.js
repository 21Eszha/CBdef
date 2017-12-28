import { NavigationActions } from 'react-navigation';
import * as types from '../types';

export function nav(state, action) {
  return {
    type: types.NAV,
    state,
    action,
  };
}

export function back() {
  return dispatch => dispatch(NavigationActions.back());
}

export function resetToPage(routeName) {
  return dispatch =>
    dispatch(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName })],
      }),
    );
}

export function openPage(routeName, params = {}) {
  return dispatch =>
    dispatch(NavigationActions.navigate({ routeName, params }));
}
