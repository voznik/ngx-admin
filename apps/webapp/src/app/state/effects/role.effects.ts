import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Effect, Actions } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Account, Role, AccountApi, RoleApi } from '@ngx-plus/admin-sdk';
import { AdminUi } from '@ngx-plus/admin-ui';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';

import { RoleActions, RoleActionTypes } from '../actions';

@Injectable()
export class RoleEffects {

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private roleApi: RoleApi,
    private ui: AdminUi,
  ) { }

  @Effect()
  protected createRole: Observable<any> = this.actions$
    .ofType(RoleActionTypes.CREATE_ROLE)
    .mergeMap((action: Action) => this.roleApi.create(action.payload)
      .map((response: Role) => new RoleActions.createRoleSuccess(response))
      .catch((error: any) => of(new RoleActions.createRoleFail(error))));

  @Effect({ dispatch: false })
  protected createRoleSuccess = this.actions$
    .ofType(RoleActionTypes.CREATE_ROLE_SUCCESS)
    .do(action => this.ui.toastSuccess('Create Role Success', `Role <b><i>${action.payload.name}</i></b> has been created successfully.`));

  @Effect({ dispatch: false })
  protected createRoleFail = this.actions$
    .ofType(RoleActionTypes.CREATE_ROLE_FAIL)
    .do(action => this.ui.toastError('Create Role Fail', `${action.payload.message}`));

  @Effect()
  protected readRoles: Observable<any> = this.actions$
    .ofType(RoleActionTypes.READ_ROLES)
    .mergeMap((action: Action) => this.roleApi.find(action.payload)
      .map((response: Array<Role>) => new RoleActions.readRolesSuccess(response))
      .catch((error: any) => of(new RoleActions.readRolesFail(error))));

  @Effect()
  protected updateRole: Observable<any> = this.actions$
    .ofType(RoleActionTypes.UPDATE_ROLE)
    .mergeMap((action: Action) => this.roleApi.patchAttributes(action.payload.id, action.payload)
      .map((response: Role) => new RoleActions.updateRoleSuccess(action.payload))
      .catch((error: any) => of(new RoleActions.updateRoleFail(error))));

  @Effect({ dispatch: false })
  protected updateRoleSuccess = this.actions$
    .ofType(RoleActionTypes.UPDATE_ROLE_SUCCESS)
    .map(action => this.ui.toastSuccess('Update Role Success', `Role <b><i>${action.payload.name}</i></b> has been updated successfully.`));

  @Effect({ dispatch: false })
  protected updateRoleFail = this.actions$
    .ofType(RoleActionTypes.UPDATE_ROLE_FAIL)
    .map(action => this.ui.toastError('Update Role Fail', `${action.payload.message}`));

  @Effect()
  protected deleteRole: Observable<any> = this.actions$
    .ofType(RoleActionTypes.DELETE_ROLE)
    .mergeMap((action: Action) => this.roleApi.deleteById(action.payload.id)
      .map((response: Role) => new RoleActions.deleteRoleSuccess(action.payload))
      .catch((error: any) => of(new RoleActions.deleteRoleFail(error))));

  @Effect({ dispatch: false })
  protected deleteRoleSuccess = this.actions$
    .ofType(RoleActionTypes.DELETE_ROLE_SUCCESS)
    .map(action => this.ui.toastSuccess('Delete Role Success', `Role <b><i>${action.payload.name}</i></b> has been deleted successfully.`));

  @Effect({ dispatch: false })
  protected deleteRoleFail = this.actions$
    .ofType(RoleActionTypes.DELETE_ROLE_FAIL)
    .map(action => this.ui.toastError('Delete Role Fail', `${action.payload.message}`));

}
