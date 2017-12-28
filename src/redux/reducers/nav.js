import { AppNavigator } from '../../AppRouter'
import createReducer from '../createReducer'
import * as types from '../types'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'))

export const nav = createReducer(initialState, {
  [types.NAV](state, action) {
    const nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state
  },
  [types.NAV_BACK](state, action) {
    const nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state
  },
  [types.NAV_RESET](state, action) {
    const nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state
  },
  [types.SET_PARAMS](state, action) {
    const nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state
  },
})
