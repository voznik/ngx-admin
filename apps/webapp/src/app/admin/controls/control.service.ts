import { Injectable } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'
import { NgxUiService } from '@ngx-plus/ngx-ui'
import { Observable } from 'rxjs/Observable'
import { sortBy } from 'lodash'

import { SDKModels, RoleApi, Models, Role } from '@ngx-plus/admin-sdk'

@Injectable()
export class ControlService {

  private subscriptions: Subscription[] = new Array<Subscription>()
  models: Models
  roles: Role[]

  constructor(
    private adminUi: NgxUiService,
    private sdkModels: SDKModels,
    private roleApi: RoleApi
  ) {
    this.getModels()
  }

  getCardButtons(): { class: string, icon: string, text: string } {
    return {
      class: 'btn btn-success btn-block float-right mt-3',
      icon: 'plus',
      text: 'Create'
    }
  }

  getTableHeaders(): string[] {
    return [
      'Model',
      'Property',
      'Access Type',
      'Permission',
      'Principal Type',
      'Principal ID',
      'Actions'
    ]
  }

  getFormConfig(formType: string, options?: any): any {
    return {
      fields: this.getFormFields(formType, options),
      showCancel: true,
      action: formType === 'create' ? formType : 'update',
    }
  }

  getModels(): void {
    const models = this.sdkModels.getAll()
    this.models = sortBy(Object.keys(models))
  }

  getFormFields(formType: string, options?: any): any[] {
    let models = []
    let roles = []
    const defaultRoles = ['$authenticated', '$everyone', '$owner', '$unauthenticated']
    models.push({ label: '*', value: '*' })
    defaultRoles.forEach((role: any) => (roles.push({ label: role, value: role })))
    this.models.forEach((model: any) => (models.push({ label: model, value: model })))
    options.roles.forEach((role: any) => (roles.push({ label: role.name, value: role.name })))
    let fields = [
      this.adminUi.form.select('model', {
        label: 'Model',
        className: 'col-12 col-lg-6',
        addonLeft: {
          class: 'fa fa-fw fa-tag'
        },
        options: models
      }),
      this.adminUi.form.select('property', {
        label: 'Property',
        className: 'col-12 col-lg-6',
        addonLeft: {
          class: 'fa fa-fw fa-comment'
        },
        options: [
          {
            label: 'find',
            value: 'find'
          },
          {
            label: 'findById',
            value: 'findById'
          },
          {
            label: '*',
            value: '*'
          }
        ]
      }),
      this.adminUi.form.select('accessType', {
        label: 'Access Type',
        className: 'col-12 col-lg-6',
        addonLeft: {
          class: 'fa fa-fw fa-comment'
        },
        options: [
          {
            label: 'READ',
            value: 'READ'
          },
          {
            label: 'WRITE',
            value: 'WRITE'
          },
          {
            label: 'EXECUTE',
            value: 'EXECUTE'
          },
          {
            label: '*',
            value: '*'
          }
        ]
      }),
      this.adminUi.form.select('permission', {
        label: 'Permission',
        className: 'col-12 col-lg-6',
        addonLeft: {
          class: 'fa fa-fw fa-comment'
        },
        options: [
          {
            label: 'ALLOW',
            value: 'ALLOW'
          },
          {
            label: 'DENY',
            value: 'DENY'
          }
        ]
      }),
      this.adminUi.form.select('principalType', {
        label: 'Principal Type',
        className: 'col-12 col-lg-6',
        addonLeft: {
          class: 'fa fa-fw fa-comment'
        },
        options: [
          {
            label: 'ROLE',
            value: 'ROLE'
          }
        ]
      }),
      this.adminUi.form.select('principalId', {
        label: 'Principal ID',
        className: 'col-12 col-lg-6',
        addonLeft: {
          class: 'fa fa-fw fa-comment'
        },
        options: roles
      }),
    ]
    return fields
  }

}
