import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AdminUi } from '@ngx-plus/admin-ui'
import { AccountApi } from '@ngx-plus/admin-sdk'
import { Store } from '@ngrx/store'

import * as Auth from '../state/auth.actions'

@Component({
  selector: 'admin-auth-login',
  template: `
    <admin-form [config]="formConfig"
                [item]="credentials"
                (action)="login($event)">
    </admin-form>
  `,

})
export class LoginComponent {

  public credentials = {
    email: null,
    password: null,
  }

  public formConfig: {}

  constructor(
    private ui: AdminUi,
    private api: AccountApi,
    private router: Router,
    private store: Store<any>,
  ) {
    this.formConfig = this.getFormConfig()
    this.ui.deactivateSidebar()
  }

  getFormConfig() {
    return {
      fields: this.getFormFields(),
      showCancel: false,
      action: 'login',
      submitButtonText: 'Log In'
    }
  }

  getFormFields() {
    return [
      this.ui.form.email('email', {
        label: 'Email',
        className: 'col-12',
        addonLeft: {
          class: 'fa fa-fw fa-envelope-o'
        }
      }),
      this.ui.form.password('password', {
        label: 'Password',
        className: 'col-12',
        addonLeft: {
          class: 'fa fa-fw fa-key'
        }
      })
    ]
  }

  login(event) {
    this.store.dispatch(new Auth.LogIn(event.payload))
    // .login(event.payload)
    // .subscribe(
    // (data) => {
    //   this.router.navigate(['dashboard'])
    //   this.ui.toastSuccess('Login Success', `You are logged in as <u><i>${event.payload.email}</u></i>.`)
    // },
    // (err) => {
    //   this.ui.toastError('Login Failure', err.statusCode === 401 ? 'Invalid Credentials' : err.message)
    // })
  }

  logout() {
    this.api
      .logout()
      .subscribe(
      (data) => this.ui.toastSuccess('Logout Success', 'You have logged out successfully.'),
      (err) => this.ui.toastError('Logout Failure', err.message))
  }
}
