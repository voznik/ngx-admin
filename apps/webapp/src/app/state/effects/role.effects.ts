import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { concat } from 'rxjs/observable/concat'
import { Effect, Actions } from '@ngrx/effects'
import { Store, Action } from '@ngrx/store'
import { Role, RoleApi } from '@ngx-plus/admin-sdk'
import { NgxUiService } from '@ngx-plus/ngx-ui'
import 'rxjs/add/operator/let'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/startWith'

import * as Roles from '../actions/role.actions'

@Injectable()
export class RoleEffects {

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private roleApi: RoleApi,
    private ui: NgxUiService,
  ) { }

  @Effect()
  protected createRole: Observable<Action> = this.actions$
    .ofType(Roles.CREATE_ROLE)
    .mergeMap((action: Roles.CreateRole) => this.roleApi.create(action.payload)
      .map((response: Role) => new Roles.CreateRoleSuccess(response))
      .catch((error: any) => of(new Roles.CreateRoleFail(error))))

  @Effect({ dispatch: false })
  protected createRoleSuccess = this.actions$
    .ofType(Roles.CREATE_ROLE_SUCCESS)
    .map((action: Roles.CreateRoleSuccess) => this.ui.toastSuccess('Create Role Success', `The <u><i>${action.payload.name}</i></u> role has been created successfully.`))

  @Effect({ dispatch: false })
  protected createRoleFail = this.actions$
    .ofType(Roles.CREATE_ROLE_FAIL)
    .map((action: Roles.CreateRoleFail) => this.ui.toastError('Create Role Fail', `${action.payload.message}`))

  @Effect()
  protected readRoles: Observable<Action> = this.actions$
    .ofType(Roles.READ_ROLES)
    .mergeMap((action: Roles.ReadRoles) => this.roleApi.find(action.payload)
      .map((response: Array<Role>) => new Roles.ReadRolesSuccess(response))
      .catch((error: any) => of(new Roles.ReadRolesFail(error))))

  @Effect()
  protected updateRole: Observable<Action> = this.actions$
    .ofType(Roles.UPDATE_ROLE)
    .mergeMap((action: Roles.UpdateRole) => this.roleApi.patchAttributes(action.payload.id, action.payload)
      .map((response: Role) => new Roles.UpdateRoleSuccess(action.payload))
      .catch((error: any) => of(new Roles.UpdateRoleFail(error))))

  @Effect({ dispatch: false })
  protected updateRoleSuccess = this.actions$
    .ofType(Roles.UPDATE_ROLE_SUCCESS)
    .map((action: Roles.UpdateRoleSuccess) => this.ui.toastSuccess('Update Role Success', `The <u><i>${action.payload.name}</i></u> role has been updated successfully.`))

  @Effect({ dispatch: false })
  protected updateRoleFail = this.actions$
    .ofType(Roles.UPDATE_ROLE_FAIL)
    .map((action: Roles.UpdateRoleFail) => this.ui.toastError('Update Role Fail', `${action.payload.message}`))

  @Effect()
  protected deleteRole: Observable<Action> = this.actions$
    .ofType(Roles.DELETE_ROLE)
    .mergeMap((action: Roles.DeleteRole) => this.roleApi.deleteById(action.payload.id)
      .map((response: Role) => new Roles.DeleteRoleSuccess(action.payload))
      .catch((error: any) => of(new Roles.DeleteRoleFail(error))))

  @Effect({ dispatch: false })
  protected deleteRoleSuccess = this.actions$
    .ofType(Roles.DELETE_ROLE_SUCCESS)
    .map((action: Roles.DeleteRoleSuccess) => this.ui.toastSuccess('Delete Role Success', `The <u><i>${action.payload.name}</i></u> role has been deleted successfully.`))

  @Effect({ dispatch: false })
  protected deleteRoleFail = this.actions$
    .ofType(Roles.DELETE_ROLE_FAIL)
    .map((action: Roles.DeleteRoleFail) => this.ui.toastError('Delete Role Fail', `${action.payload.message}`))


}
