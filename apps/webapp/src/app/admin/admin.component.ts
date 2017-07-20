import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { AdminUi, NavItem } from '@ngx-plus/admin-ui'

import { UserActions, RoleActions, ControlActions } from '../state'

@Component({
  selector: 'admin-admin',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./admin.component.scss']

})
export class AdminComponent {
  private authIcon
  private sidebarNav: NavItem[]

  constructor(
    private ui: AdminUi,
    private store: Store<any>,
  ) {
    this.store.dispatch(new UserActions.readUsers({ include: 'roles' }))
    this.store.dispatch(new RoleActions.readRoles({ include: 'principals' }))
    this.store.dispatch(new ControlActions.readControls())
    this.ui.setSidebarNav([
      {
        items: [
          {
            'name': 'Dashboard',
            'link': '/home/dashboard',
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

}
