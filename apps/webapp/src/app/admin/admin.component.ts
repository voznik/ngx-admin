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
  ) { }


}
