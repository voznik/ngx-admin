import { Component, OnInit, OnDestroy } from '@angular/core'
import { DashCard, AdminUi } from '@ngx-plus/admin-ui'
import { AccountApi, RoleApi, ACLApi } from '@ngx-plus/admin-sdk'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/map'

import { UserActions, RoleActions, ControlActions } from '../state'

@Component({
  selector: 'admin-dashboard',
  template: `
  <admin-card icon="tachometer" cardTitle="Dashboard">
    <h4 class="text-primary">Home</h4>
    <hr />
    <h4 class="text-primary">Admin</h4>
    <hr />
    <div *ngIf="adminCards" class="row align-items-center justify-content-center">
      <div *ngFor="let item of adminCards" class="col-12 col-lg-4">
        <a class="dash-card" [routerLink]="item.link" routerLinkActive="active">
          <div class="row align-items-center justify-content-center dash-card">
            <div [class]="'col-4 card-icon-left bg-' + item.class">
              <div [class]="'card card-outline-' + item.class">
                <div class="card-block text-center">
                  <i [class]="'fa fa-fw fa-3x fa-' + item.icon"></i>
                </div>
              </div>
            </div>
            <div class="col-8">
                <div [class]="'card card-outline-' + item.class">
                  <div class="card-block text-center">
                    <h4 [class]="'card-title text-center mb-1 text-' + item.class">{{ item.name }}</h4>
                    <h4 class="mb-0"><span [class]="'badge badge-' + item.class">{{ (item.data | async) || 0 }}</span></h4>
                  </div>
                </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </admin-card>
  `,
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

  public adminCards: DashCard[]
  private subscriptions: Subscription[] = new Array<Subscription>()

  constructor(
    private ui: AdminUi,
    private users: AccountApi,
    private roles: RoleApi,
    private controls: ACLApi,
  ) {
    this.ui.activateHeader()
    this.ui.activateSidebar()
    this.ui.activateFooter()
  }

  ngOnInit() {
    this.setDashCards()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

  setDashCards() {
    this.adminCards = [
      {
        name: 'Users',
        icon: 'users',
        data: this.users.count().map(c => c.count),
        link: '/admin/users',
        class: 'primary',
      },
      {
        name: 'Roles',
        icon: 'tags',
        data: this.roles.count().map(c => c.count),
        link: '/admin/roles',
        class: 'warning',
      },
      {
        name: 'Controls',
        icon: 'ban',
        data: this.controls.count().map(c => c.count),
        link: '/admin/controls',
        class: 'danger',
      }
    ]
  }

}
