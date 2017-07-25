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
    private userApi: AccountApi,
    private api: RoleApi,
    private ui: AdminUi,
    private store: Store<any>,
  ) {
    this.admin$ = this.store.select('admin')
    this.users$ = this.admin$.map(a => a.users)
    this.roles$ = this.admin$.map(a => a.roles)
    this.selected$ = this.roles$.map(u => u.selected)
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
      .dispatch(new RoleActions.SelectRole(item))
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
      .dispatch(new RoleActions.CreateRole(item))
  }

  update(item) {
    this.store
      .dispatch(new RoleActions.UpdateRole(item))
  }

  delete(item) {
    this.store
      .dispatch(new RoleActions.DeleteRole(item))
  }

  addUserToRole(item) {
    this.store
      .dispatch(new UserActions.AddUserToRole(item))
  }

  removeUserFromRole(item) {
    this.store
      .dispatch(new UserActions.DeleteUserFromRole(item))
  }
}
