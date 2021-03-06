import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgxUiService, NavItem } from '@ngx-plus/ngx-ui'
import { Subscription } from 'rxjs/Subscription'

import { AccountApi } from '@ngx-plus/admin-sdk'

@Component({
  selector: 'admin-home',
  template: `
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnDestroy {
  private authIcon
  private sidebarNav: NavItem[]
  private subscriptions: Subscription[] = new Array<Subscription>()

  constructor(
    private ui: NgxUiService,
    private api: AccountApi,
  ) {

  }

  ngOnInit() {
    this.ui.activateSidebar()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}
