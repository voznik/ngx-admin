import { Action } from '@ngrx/store';
import { type } from '../util';
import { Account, Role, ACL, LoopBackFilter } from '@ngx-plus/admin-sdk';

export const UserActionTypes = {

  CREATE_USER: type('[Admin] createUser'),
  CREATE_USER_SUCCESS: type('[Admin] createUser success'),
  CREATE_USER_FAIL: type('[Admin] createUser fail'),

  READ_USERS: type('[Admin] readUsers'),
  READ_USERS_SUCCESS: type('[Admin] readUsers success'),
  READ_USERS_FAIL: type('[Admin] readUsers fail'),

  UPDATE_USER: type('[Admin] updateUser'),
  UPDATE_USER_SUCCESS: type('[Admin] updateUser success'),
  UPDATE_USER_FAIL: type('[Admin] updateUser fail'),

  DELETE_USER: type('[Admin] deleteUser'),
  DELETE_USER_SUCCESS: type('[Admin] deleteUser success'),
  DELETE_USER_FAIL: type('[Admin] deleteUser fail'),

  ADD_USER_TO_ROLE: type('[Admin] addUserToRole'),
  ADD_USER_TO_ROLE_SUCCESS: type('[Admin] addUserToRole success'),
  ADD_USER_TO_ROLE_FAIL: type('[Admin] addUserToRole fail'),

  DELETE_USER_FROM_ROLE: type('[Admin] deleteUserFromRole'),
  DELETE_USER_FROM_ROLE_SUCCESS: type('[Admin] deleteUserFromRole success'),
  DELETE_USER_FROM_ROLE_FAIL: type('[Admin] deleteUserFromRole fail'),

  SELECT_USER: type('[Admin] selectUser'),
  SELECT_USER_SUCCESS: type('[Admin] selectUser success'),
  SELECT_USER_FAIL: type('[Admin] selectUser fail'),

}

export const UserActions = {

  createUser: class implements Action {
    public readonly type = UserActionTypes.CREATE_USER;
    constructor(public payload: Account) { }
  },

  createUserSuccess: class implements Action {
    public readonly type = UserActionTypes.CREATE_USER_SUCCESS;
    constructor(public payload: Account) { }
  },

  createUserFail: class implements Action {
    public readonly type = UserActionTypes.CREATE_USER_FAIL;
    constructor(public payload: any) { }
  },

  readUsers: class implements Action {
    public readonly type = UserActionTypes.READ_USERS;
    constructor(public payload: LoopBackFilter = {}) { }
  },

  readUsersSuccess: class implements Action {
    public readonly type = UserActionTypes.READ_USERS_SUCCESS;
    constructor(public payload: Account[]) { }
  },

  readUsersFail: class implements Action {
    public readonly type = UserActionTypes.READ_USERS_FAIL;
    constructor(public payload: any) { }
  },

  updateUser: class implements Action {
    public readonly type = UserActionTypes.UPDATE_USER;
    constructor(public payload: Account) { }
  },

  updateUserSuccess: class implements Action {
    public readonly type = UserActionTypes.UPDATE_USER_SUCCESS;
    constructor(public payload: Account) { }
  },

  updateUserFail: class implements Action {
    public readonly type = UserActionTypes.UPDATE_USER_FAIL;
    constructor(public payload: any) { }
  },

  deleteUser: class implements Action {
    public readonly type = UserActionTypes.DELETE_USER;
    constructor(public payload: any) { }
  },

  deleteUserSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_USER_SUCCESS;
    constructor(public payload: any) { }
  },

  deleteUserFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_USER_FAIL;
    constructor(public payload: any) { }
  },

  addUserToRole: class implements Action {
    public readonly type = UserActionTypes.ADD_USER_TO_ROLE;
    constructor(public payload: any) { }
  },

  addUserToRoleSuccess: class implements Action {
    public readonly type = UserActionTypes.ADD_USER_TO_ROLE_SUCCESS;
    constructor(public payload: any) { }
  },

  addUserToRoleFail: class implements Action {
    public readonly type = UserActionTypes.ADD_USER_TO_ROLE_FAIL;
    constructor(public payload: any) { }
  },

  deleteUserFromRole: class implements Action {
    public readonly type = UserActionTypes.DELETE_USER_FROM_ROLE;
    constructor(public payload: any) { }
  },

  deleteUserFromRoleSuccess: class implements Action {
    public readonly type = UserActionTypes.DELETE_USER_FROM_ROLE_SUCCESS;
    constructor(public payload: any) { }
  },

  deleteUserFromRoleFail: class implements Action {
    public readonly type = UserActionTypes.DELETE_USER_FROM_ROLE_FAIL;
    constructor(public payload: any) { }
  },

  selectUser: class implements Action {
    public readonly type = UserActionTypes.SELECT_USER;
    constructor(public payload: Account) { }
  },

}
