import { Component, OnInit, OnDestroy } from '@angular/core'
import { DashCard, AdminUi } from '@ngx-plus/admin-ui'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/map'

@Component({
  selector: 'admin-dashboard',
  template: `
  <admin-card icon="tachometer" cardTitle="Dashboard">
    <div *ngIf="dashCards" class="row align-items-center justify-content-center">
      <div *ngFor="let item of dashCards" class="col-12 col-lg-4">
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
                    <h4 class="mb-0"><span [class]="'badge badge-' + item.class">{{ item.data | async }}</span></h4>
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

export class DashboardComponent implements OnDestroy {
  public dashCards: DashCard[]
  public admin$: Observable<any>
  private subscriptions: Subscription[] = new Array<Subscription>()

  constructor(
    private store: Store<any>,
    private ui: AdminUi,
  ) {
    this.admin$ = this.store.select('admin')
    this.setDashCards()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

  setDashCards() {
    this.dashCards = [
      {
        name: 'Users',
        icon: 'users',
        data: this.admin$.map(a => a.users.count),
        link: '/admin/users',
        class: 'success',
      },
      {
        name: 'Roles',
        icon: 'tags',
        data: this.admin$.map(a => a.roles.count),
        link: '/admin/roles',
        class: 'warning',
      },
      {
        name: 'Controls',
        icon: 'ban',
        data: this.admin$.map(a => a.controls.count),
        link: '/admin/controls',
        class: 'danger',
      }
    ]
  }

}
