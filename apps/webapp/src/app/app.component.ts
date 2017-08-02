import { Component, OnInit } from '@angular/core'
import { AccountApi } from '@ngx-plus/admin-sdk'
import { AdminUi } from '@ngx-plus/admin-ui'

import { AuthService } from './auth'
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
    private auth: AuthService,
    private ui: AdminUi,
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
  }

}
