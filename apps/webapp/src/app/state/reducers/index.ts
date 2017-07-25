import { Observable } from 'rxjs/Observable'
import { ActionReducerMap } from '@ngrx/store'
import * as Users from './user.reducers'
import * as Roles from './role.reducers'
import * as Controls from './control.reducers'

export interface State {
  users: Users.State
  roles: Roles.State
  controls: Controls.State
}

export const AdminReducers = {
  users: Users.UserReducer,
  roles: Roles.RoleReducer,
  controls: Controls.ControlReducer,
}
