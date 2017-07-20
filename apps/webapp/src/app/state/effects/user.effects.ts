import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { concat } from 'rxjs/observable/concat'
import { Effect, Actions } from '@ngrx/effects'
import { Store, Action } from '@ngrx/store'
import { Account, Role, AccountApi, RoleApi } from '@ngx-plus/admin-sdk'
import { AdminUi } from '@ngx-plus/admin-ui'
import 'rxjs/add/operator/let'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/startWith'

import { UserActions, UserActionTypes, RoleActions } from '../actions'

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private userApi: AccountApi,
    private roleApi: RoleApi,
    private ui: AdminUi,
  ) { }

  @Effect()
  protected createUser: Observable<any> = this.actions$
    .ofType(UserActionTypes.CREATE_USER)
    .mergeMap((action: Action) => this.userApi.create(action.payload)
      .map((response: Account) => new UserActions.createUserSuccess(response))
      .catch((error: any) => of(new UserActions.createUserFail(error))))

  @Effect({ dispatch: false })
  protected createUserSuccess = this.actions$
    .ofType(UserActionTypes.CREATE_USER_SUCCESS)
    .map(action => this.ui.toastSuccess('Create User Success', `User <u><i>${action.payload.email}</i></u> has been created successfully.`))

  @Effect({ dispatch: false })
  protected createUserFail = this.actions$
    .ofType(UserActionTypes.CREATE_USER_FAIL)
    .map(action => this.ui.toastError('Create User Fail', `${action.payload.message}`))

  @Effect()
  protected readUsers: Observable<any> = this.actions$
    .ofType(UserActionTypes.READ_USERS)
    .mergeMap((action: Action) => this.userApi.find(action.payload)
      .map((response: Array<Account>) => new UserActions.readUsersSuccess(response))
      .catch((error: any) => of(new UserActions.readUsersFail(error))))

  @Effect()
  protected updateUser: Observable<any> = this.actions$
    .ofType(UserActionTypes.UPDATE_USER)
    .mergeMap((action: Action) => this.userApi.patchAttributes(action.payload.id, action.payload)
      .map((response: Account) => new UserActions.updateUserSuccess(action.payload))
      .catch((error: any) => of(new UserActions.updateUserFail(error))))

  @Effect({ dispatch: false })
  protected updateUserSuccess = this.actions$
    .ofType(UserActionTypes.UPDATE_USER_SUCCESS)
    .map(action => this.ui.toastSuccess('Update User Success', `User <u><i>${action.payload.email}</i></u> has been updated successfully.`))

  @Effect({ dispatch: false })
  protected updateUserFail = this.actions$
    .ofType(UserActionTypes.UPDATE_USER_FAIL)
    .map(action => this.ui.toastError('Update User Fail', `${action.payload.message}`))

  @Effect()
  protected deleteUser: Observable<any> = this.actions$
    .ofType(UserActionTypes.DELETE_USER)
    .mergeMap((action: Action) => this.userApi.deleteById(action.payload.id)
      .map((response: Account) => new UserActions.deleteUserSuccess(action.payload))
      .catch((error: any) => of(new UserActions.deleteUserFail(error))))

  @Effect({ dispatch: false })
  protected deleteUserSuccess = this.actions$
    .ofType(UserActionTypes.DELETE_USER_SUCCESS)
    .map(action => this.ui.toastSuccess('Delete User Success', `User <u><i>${action.payload.email}</i></u> has been deleted successfully.`))

  @Effect({ dispatch: false })
  protected deleteUserFail = this.actions$
    .ofType(UserActionTypes.DELETE_USER_FAIL)
    .map(action => this.ui.toastError('Delete User Fail', `${action.payload.message}`))

  @Effect()
  protected addUserToRole: Observable<any> = this.actions$
    .ofType(UserActionTypes.ADD_USER_TO_ROLE)
    .mergeMap((action: Action) => this.userApi.linkRoles(
      action.payload.user.id,
      action.payload.role.id,
      {
        principalType: 'USER',
        principalId: action.payload.user.id,
        roleId: action.payload.role.id
      })
      .map((response: any) => new UserActions.addUserToRoleSuccess({
        user: action.payload.user,
        role: action.payload.role,
        mapping: response
      }))
      .catch((error: any) => of(new UserActions.addUserToRoleFail(error))))

  @Effect({ dispatch: false })
  protected addUserToRoleSuccess = this.actions$
    .ofType(UserActionTypes.ADD_USER_TO_ROLE_SUCCESS)
    .map(action => this.ui.toastSuccess('Role Added', `User <u><i>${action.payload.user.email}</i></u> has been successfully added to the <u><i>${action.payload.role.name}</i></u> role.`))

  @Effect({ dispatch: false })
  protected addUserToRoleFail = this.actions$
    .ofType(UserActionTypes.ADD_USER_TO_ROLE_FAIL)
    .map(action => this.ui.toastError('Add Role Fail', `${action.payload.message}`))

  @Effect()
  protected deleteUserFromRole: Observable<any> = this.actions$
    .ofType(UserActionTypes.DELETE_USER_FROM_ROLE)
    .mergeMap((action: Action) => this.userApi.unlinkRoles(action.payload.user.id, action.payload.role.id)
      .map((response: Account) => new UserActions.deleteUserFromRoleSuccess(action.payload))
      .catch((error: any) => of(new UserActions.deleteUserFromRoleFail(error))))

  @Effect({ dispatch: false })
  protected deleteUserFromRoleSuccess = this.actions$
    .ofType(UserActionTypes.DELETE_USER_FROM_ROLE_SUCCESS)
    .map(action => this.ui.toastSuccess('Role Removed', `User <u><i>${action.payload.user.email}</i></u> has been successfully removed from the <u><i>${action.payload.role.name}</i></u> role.`))

  @Effect({ dispatch: false })
  protected deleteUserFromRoleFail = this.actions$
    .ofType(UserActionTypes.DELETE_USER_FROM_ROLE_FAIL)
    .map(action => this.ui.toastError('Remove Role Fail', `${action.payload.message}`))
}
