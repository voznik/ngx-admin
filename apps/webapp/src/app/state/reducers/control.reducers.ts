import { Observable } from 'rxjs/Observable'
import { Account, Role, RoleMapping, ACL } from '@ngx-plus/admin-sdk'
import { ControlActions, ControlActionTypes, UserActions, UserActionTypes } from '../actions'

export interface State {
  ids: string[]
  entities: { [id: string]: ACL }
  selected: ACL
  count: number
}

export const initialState: State = {
  ids: [],
  entities: {},
  selected: new ACL(),
  count: 0,
}

export function ControlReducer(state: State = initialState, action: any): State {
  switch (action.type) {
    case ControlActionTypes.CREATE_CONTROL_SUCCESS: {
      const control: ACL = action.payload
      const updateState = Object.assign({}, state)
      updateState.ids = [...state.ids, control.id]
      updateState.entities[control.id] = control
      updateState.count = updateState.ids.length
      return updateState
    }
    case ControlActionTypes.READ_CONTROLS_SUCCESS: {
      const controls: ACL[] = action.payload
      const newControls = controls.filter(control => !state.entities[control.id])
      const newControlIds = newControls.map(control => control.id)
      const newControlEntities = newControls.reduce((entities: { [id: string]: ACL }, control: ACL) => {
        return Object.assign(entities, {
          [control.id]: control
        })
      }, {})
      const updateState = Object.assign({}, state)
      updateState.ids = [...state.ids, ...newControlIds]
      updateState.entities = Object.assign({}, state.entities, newControlEntities)
      updateState.count = updateState.ids.length
      updateState.selected = updateState.entities[updateState.selected.id]
      return updateState
    }
    case ControlActionTypes.UPDATE_CONTROL_SUCCESS: {
      const control: ACL = action.payload
      const updateState = Object.assign({}, state)
      updateState.entities[control.id] = control
      if (control.id === state.selected.id) {
        updateState.selected = updateState.entities[control.id]
      }
      return updateState
    }
    case ControlActionTypes.DELETE_CONTROL_SUCCESS: {
      const control: ACL = action.payload
      const updateState = Object.assign({}, state)
      delete updateState.ids[control.id]
      delete updateState.entities[control.id.toString()]
      updateState.count = updateState.ids.length
      if (control.id === state.selected.id) {
        updateState.selected = new ACL()
      }
      return updateState
    }
    case ControlActionTypes.SELECT_CONTROL: {
      const control: ACL = action.payload
      const updateState = Object.assign({}, state)
      updateState.selected = control
      return updateState
    }
    default: {
      return state
    }
  }
}
