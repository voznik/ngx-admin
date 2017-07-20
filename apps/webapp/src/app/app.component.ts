import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AccountApi } from '@ngx-plus/admin-sdk'
import { AdminAuth } from '@ngx-plus/admin-auth'
import { AdminUi } from '@ngx-plus/admin-ui'

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
    private auth: AdminAuth,
    private router: Router,
    private ui: AdminUi,
  ) { }

  ngOnInit() {
    this.auth.setHeaderImg('assets/img/ngx-plus-light.svg')
    this.ui.setHeaderImg('assets/img/ngx-plus-light.svg')
  }

  isAuthenticated() {
    return this.userApi.isAuthenticated()
  }

}
