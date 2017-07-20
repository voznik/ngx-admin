import { EffectsModule } from '@ngrx/effects';

import {
  UserActions, UserActionTypes,
  RoleActions, RoleActionTypes,
  ControlActions, ControlActionTypes,
} from './actions';

import {
  UserEffects,
  RoleEffects,
  ControlEffects,
} from './effects';

import {
  AdminReducer, State,
} from './reducers';


export {
UserActions, UserActionTypes,
RoleActions, RoleActionTypes,
ControlActions, ControlActionTypes,
UserEffects,
RoleEffects,
ControlEffects,
AdminReducer, State
}

export const AdminEffects = [
  EffectsModule.runAfterBootstrap(UserEffects),
  EffectsModule.runAfterBootstrap(RoleEffects),
  EffectsModule.runAfterBootstrap(ControlEffects),
]
