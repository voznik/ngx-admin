import { Action, ActionReducer } from '@ngrx/store'

export interface State {
  currentUser: any
  loggedIn: boolean
}

const initialState: State = {
  currentUser: null,
  loggedIn: false,
}

export function AuthReducer(state = initialState, action: any): State {
  switch (action.type) {
    case 'LOG_OUT_SUCCES':
      return Object.assign({}, state, { currentUser: null, loggedIn: false })
    case 'SET_TOKEN':
    case 'LOG_IN_SUCCESS':
      return Object.assign({}, state, { currentUser: action.payload, loggedIn: true })
    default:
      return state
  }
}
