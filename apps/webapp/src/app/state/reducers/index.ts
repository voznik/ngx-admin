import { Observable } from 'rxjs/Observable'
import { ActionReducerMap } from '@ngrx/store'
import * as Users from './user.reducers'
import * as Roles from './role.reducers'
import * as Controls from './control.reducers'
import * as Auth from './auth.reducers'

export interface AdminState {
  users: Users.State
  roles: Roles.State
  controls: Controls.State
}

export const AdminReducer: ActionReducerMap<AdminState> = {
  users: Users.UserReducer,
  roles: Roles.RoleReducer,
  controls: Controls.ControlReducer,
}

export * from './auth.reducers'
