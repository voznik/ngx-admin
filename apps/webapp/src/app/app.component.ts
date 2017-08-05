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
            'icon': 'fa fa-fw fa-tachometer',
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
            'icon': 'fa fa-fw fa-check-square-o'
          },
        ]
      },
      {
        title: 'Admin',
        items: [
          {
            'name': 'Users',
            'link': '/admin/users',
            'icon': 'fa fa-fw fa-users'
          },
          {
            'name': 'Roles',
            'link': '/admin/roles',
            'icon': 'fa fa-fw fa-tags'
          },
          {
            'name': 'Controls',
            'link': '/admin/controls',
            'icon': 'fa fa-fw fa-ban'
          },
        ]
      }
    ])
  }

}
