import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'
import { AccountApi, Account } from '@ngx-plus/admin-sdk';
import { AdminUi } from '../../admin-ui';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements AfterViewInit {

  public user: Account;

  constructor(
    public ui: AdminUi,
    public userApi: AccountApi,
    private router: Router,
  ) { }

  ngAfterViewInit() {
    this.userApi.getCurrent().subscribe(
      (user) => this.user = user,
      (err) => console.log(err)
    )
  }

  logout() {
    this.userApi.logout()
      .subscribe(
      (data) => {
        this.router.navigate(['auth', 'login'])
        this.ui.toastSuccess('Logout Success', 'You have logged out successfully.')
      },
      (error) => this.router.navigate(['auth', 'login']))
  }

}
