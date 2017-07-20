import { Observable } from 'rxjs/Observable'
import { Account, Role, RoleMapping, ACL } from '@ngx-plus/admin-sdk'
import { UserActions, UserActionTypes } from '../actions'

export interface State {
  ids: string[]
  entities: { [id: string]: Account }
  selected: Account
  count: number
}

export const initialState: State = {
  ids: [],
  entities: {},
  selected: new Account(),
  count: 0,
}

export function UserReducer(state: State = initialState, action: any): State {
  switch (action.type) {
    case UserActionTypes.CREATE_USER_SUCCESS: {
      const user: Account = action.payload
      const updateState = Object.assign({}, state)
      updateState.ids = [...state.ids, user.id]
      updateState.entities[user.id] = user
      updateState.count = updateState.ids.length
      return updateState
    }
    case UserActionTypes.READ_USERS_SUCCESS: {
      const users: Account[] = action.payload
      const newUsers = users.filter(user => !state.entities[user.id])
      const newUserIds = newUsers.map(user => user.id)
      const newUserEntities = newUsers.reduce((entities: { [id: string]: Account }, user: Account) => {
        return Object.assign(entities, {
          [user.id]: user
        })
      }, {})
      const updateState = Object.assign({}, state)
      updateState.ids = [...state.ids, ...newUserIds]
      updateState.entities = Object.assign({}, state.entities, newUserEntities)
      updateState.count = updateState.ids.length
      updateState.selected = updateState.entities[updateState.selected.id]
      return updateState
    }
    case UserActionTypes.UPDATE_USER_SUCCESS: {
      const user: Account = action.payload
      const updateState = Object.assign({}, state)
      updateState.entities[user.id] = user
      if (user.id === state.selected.id) {
        updateState.selected = updateState.entities[user.id]
      }
      return updateState
    }
    case UserActionTypes.DELETE_USER_SUCCESS: {
      const user: Account = action.payload
      const updateState = Object.assign({}, state)
      updateState.ids = updateState.ids.filter(id => id !== user.id)
      delete updateState.entities[user.id]
      updateState.count = updateState.ids.length
      return updateState
    }
    case UserActionTypes.ADD_USER_TO_ROLE_SUCCESS: {
      const user: Account = action.payload.user
      const role: Role = action.payload.role
      const updateState = Object.assign({}, state)
      const userRoles: Role[] = user.roles || []
      updateState.entities[user.id].roles = [...userRoles, role]
      if (user.id === state.selected.id) {
        updateState.selected = updateState.entities[user.id]
      }
      return updateState
    }
    case UserActionTypes.DELETE_USER_FROM_ROLE_SUCCESS: {
      const user: Account = action.payload.user
      const userRoles: Role[] = user.roles || []
      const role: Role = action.payload.role
      const updateState = Object.assign({}, state)
      updateState.entities[user.id].roles = userRoles.filter(r => r.id !== role.id)
      if (user.id === state.selected.id) {
        updateState.selected = updateState.entities[user.id]
      }
      return updateState
    }
    case UserActionTypes.SELECT_USER: {
      const user: Account = action.payload
      const updateState = Object.assign({}, state)
      updateState.selected = user
      return updateState
    }
    default: {
      return state
    }
  }
}
