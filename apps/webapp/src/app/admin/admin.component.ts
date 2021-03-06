import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { NgxUiService, NavItem } from '@ngx-plus/ngx-ui'

import { UserActions, RoleActions, ControlActions } from '../state'

@Component({
  selector: 'admin-main',
  template: `
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./admin.component.scss']

})
export class AdminComponent {
  private authIcon
  private sidebarNav: NavItem[]

  constructor(
    private ui: NgxUiService,
    private store: Store<any>,
  ) {
    this.store.dispatch(new UserActions.ReadUsers({ include: 'roles' }))
    this.store.dispatch(new RoleActions.ReadRoles({ include: 'principals' }))
    this.store.dispatch(new ControlActions.ReadControls())
  }


}
