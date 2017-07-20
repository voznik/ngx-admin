import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { Account, Role, RoleMapping, ACL } from '@ngx-plus/admin-sdk';
import { UserActionTypes, RoleActionTypes, ControlActionTypes } from '../actions';
import * as Users from './user.reducers';
import * as Roles from './role.reducers';
import * as Controls from './control.reducers';

export interface State {
  users: Users.State;
  roles: Roles.State;
  controls: Controls.State;
}

const reducers = {
  users: Users.UserReducer,
  roles: Roles.RoleReducer,
  controls: Controls.ControlReducer,
}

export const reducer: ActionReducer<State> = combineReducers(reducers);

export function AdminReducer(state: any, action: any) {
  return reducer(state, action);
}
