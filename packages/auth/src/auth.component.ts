import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AdminUi, NavItem } from '@ngx-plus/admin-ui'
import { RealTime, AccountApi, FireLoopRef, Account, SDKToken } from '@ngx-plus/admin-sdk'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'

@Component({
  template: `
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-lg-6">
        <admin-card [nav]="nav"
                    [headerImg]="auth.headerImg"
                    [preHeaderImg]="auth.preHeaderImg"
                    [postHeaderImg]="auth.postHeaderImg">
          <router-outlet></router-outlet>
        </admin-card>
      </div>
    </div>
  `,
  styles: [`
    .row {
      height: 75vh
    }
    .card-header hr {
        border-color: transparent
    }
    `]
})
export class AuthComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = new Array<Subscription>()
  public user: Account
  private userRef: FireLoopRef<Account>
  private token: any
  public nav: NavItem

  constructor(
    private ui: AdminUi,
    private auth: AuthService,
    private rt: RealTime,
    public userApi: AccountApi,
    public router: Router,
  ) {
    this.ui.deactivateSidebar()
    this.nav = {
      title: '',
      items: [
        { name: 'Log In', link: '/auth/login', icon: 'sign-in' },
        { name: 'Register', link: '/auth/register', icon: 'registered' }
      ]
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}
