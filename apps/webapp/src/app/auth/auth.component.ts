import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { AdminUi, NavItem } from '@ngx-plus/admin-ui'
import { RealTime, AccountApi, FireLoopRef, Account, SDKToken } from '@ngx-plus/admin-sdk'
import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './auth.service'

@Component({
  selector: 'admin-auth',
  template: `
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-lg-6">
        <admin-card [nav]="nav"
                    [headerImg]="data.headerImg"
                    [preHeaderImg]="data.preHeaderImg"
                    [postHeaderImg]="data.postHeaderImg">
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
  public data: any

  constructor(
    private ui: AdminUi,
    private auth: AuthService,
    private rt: RealTime,
    public userApi: AccountApi,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.ui.deactivateSidebar()
    this.ui.deactivateHeader()
    this.ui.deactivateFooter()
    this.nav = {
      title: '',
      items: [
        { name: 'Log In', link: '/auth/login', icon: 'sign-in' },
        { name: 'Register', link: '/auth/register', icon: 'registered' }
      ]
    }
    this.data = {
      headerImg: this.auth.headerImg,
      preHeaderImg: this.auth.preHeaderImg,
      postHeaderImg: this.auth.postHeaderImg,
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}
