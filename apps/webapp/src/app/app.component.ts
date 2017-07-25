import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AccountApi } from '@ngx-plus/admin-sdk'
import { AuthService } from '@ngx-plus/admin-auth'
import { AdminUi } from '@ngx-plus/admin-ui'
import { Store } from '@ngrx/store'

import { UserActions, RoleActions, ControlActions } from './state'

@Component({
  selector: 'admin-root',
  template: `
  <admin-layout>
    <router-outlet></router-outlet>
  </admin-layout>
  `,
})
export class AppComponent implements OnInit {

  constructor(
    private userApi: AccountApi,
    private auth: AuthService,
    private router: Router,
    private ui: AdminUi,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.auth.setHeaderImg('assets/img/ngx-plus-light.svg')
    this.ui.setHeaderImg('assets/img/ngx-plus-light.svg')
    this.ui.setSidebarNav([
      {
        items: [
          {
            'name': 'Dashboard',
            'link': '/dashboard',
            'icon': 'tachometer',
            'isNew': true
          },
        ]
      },
      {
        title: 'Home',
        items: [
          {
            'name': 'Todos',
            'link': '/home/todos',
            'icon': 'check-square-o'
          },
        ]
      },
      {
        title: 'Admin',
        items: [
          {
            'name': 'Users',
            'link': '/admin/users',
            'icon': 'users'
          },
          {
            'name': 'Roles',
            'link': '/admin/roles',
            'icon': 'tags'
          },
          {
            'name': 'Controls',
            'link': '/admin/controls',
            'icon': 'ban'
          },
        ]
      }
    ])
    this.ui.activateSidebar()
  }

  isAuthenticated() {
    return this.userApi.isAuthenticated()
  }

}
