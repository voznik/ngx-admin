import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { AccountApi, Account, RoleApi, Role, AccessToken } from '@ngx-plus/admin-sdk'
export { Account as Role } from '@ngx-plus/admin-sdk'
import { AdminUi } from '@ngx-plus/admin-ui'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/map'

import { RoleActions, UserActions } from '../../state'

@Injectable()
export class RolesService {

  private admin$: Observable<any>
  private subscriptions: Subscription[]

  public users$: Observable<any>
  public roles$: Observable<any>
  public selected$: Observable<any>
  public tableColumns = [
    { field: 'firstName', label: 'Name', action: 'edit' },
    { field: 'email', label: 'Email' },
    { field: 'actions', label: 'Actions' },
  ]

  constructor(
    private api: AccountApi,
    private roleApi: RoleApi,
    private ui: AdminUi,
    private store: Store<any>,
  ) {
    this.admin$ = this.store.select('admin').distinctUntilChanged()
    this.users$ = this.admin$.map(a => a.users).distinctUntilChanged()
    this.roles$ = this.admin$.map(a => a.roles).distinctUntilChanged()
    this.selected$ = this.users$.map(u => u.selected)
    this.subscriptions = []
  }

  getCardButtons() {
    return {
      class: 'btn btn-success btn-block mt-3',
      icon: 'plus',
      text: 'Create'
    }
  }

  getFormConfig(editForm = false): any {
    return {
      fields: this.getFormFields(editForm),
      showCancel: true,
      buttonColClass: 'col-12',
      action: editForm ? 'update' : 'create',
    }
  }

  getFormFields(editForm = false) {
    const fields = [
      this.ui.form.input('name', {
        label: 'Name',
        addonLeft: {
          class: 'fa fa-fw fa-tag'
        },
        className: 'col-12',
      }),
      this.ui.form.input('description', {
        label: 'Description',
        addonLeft: {
          class: 'fa fa-fw fa-comment'
        },
        className: 'col-12',
      }),
    ]
    return fields
  }

  setSelected(item) {
    this.store
      .dispatch(new RoleActions.selectRole(item))
  }

  get(id): Observable<any> {
    return this.api
      .find({ where: { id: id }, include: 'principals' })
  }

  upsert(item) {
    if (item.id) {
      return this.update(item)
    }
    return this.create(item)
  }

  create(item) {
    this.store
      .dispatch(new RoleActions.createRole(item))
  }

  update(item) {
    this.store
      .dispatch(new RoleActions.updateRole(item))
  }

  delete(item) {
    this.store
      .dispatch(new RoleActions.deleteRole(item))
  }

  addUserToRole(item) {
    this.store
      .dispatch(new UserActions.addUserToRole(item))
  }

  removeUserFromRole(item) {
    this.store
      .dispatch(new UserActions.deleteUserFromRole(item))
  }

  getRoleAccessTokens(item, successCb, errorCb): Subscription {
    return this.api
      .getAccessTokens(item.id)
      .subscribe(successCb, errorCb)
  }

  generateToken(item, successCb, errorCb): Subscription {
    return this.api
      .createAccessTokens(item.id)
      .subscribe(successCb, errorCb)
  }

  removeTtl(item, successCb, errorCb): Subscription {
    return this.api
      .updateByIdAccessTokens(item.user.id, item.token.id, { ttl: -1 })
      .subscribe(successCb, errorCb)
  }

  deleteToken(item, successCb, errorCb): Subscription {
    return this.api
      .destroyByIdAccessTokens(item.user.id, item.token.id)
      .subscribe(successCb, errorCb)
  }

  deleteAllTokens(item, successCb, errorCb): Subscription {
    return this.api
      .deleteAccessTokens(item.id)
      .subscribe(successCb, errorCb)
  }

  changePassword(item, successCb, errorCb): Subscription {
    return this.api
      .resetPassword(item)
      .subscribe(successCb, errorCb)
  }

  resetPassword(item, successCb, errorCb): Subscription {
    return this.api
      .resetPassword(item)
      .subscribe(successCb, errorCb)
  }
}
