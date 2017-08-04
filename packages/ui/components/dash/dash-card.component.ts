import { Component, Input, Output, EventEmitter } from '@angular/core'
import { DashCard } from '../../admin-ui'

@Component({
  selector: 'admin-dash-cards',
  template: `
  <div *ngIf="dashCards" class="row align-items-center justify-content-center">
    <div *ngFor="let item of dashCards" class="col-12 col-lg-4">
      <a class="dash-card" [routerLink]="item.link" routerLinkActive="active">
        <div class="row align-items-center justify-content-center dash-card">
          <div [class]="'col-4 card-icon-left bg-' + item.class">
            <div [class]="'card card-outline-' + item.class">
              <div class="card-block text-center">
                <i [class]="'fa fa-3x fa-' + item.icon"></i>
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
  `,
  styles: [`
    .dash-card {
      height         : 100px;
      text-decoration: none;

      .card-block {
        padding: 15px;
      }
    }

    .card-icon-left {
      background  : $brand-success;
      color       : #fff;
      margin-right: -15px;
      padding     : 0;
    }
  `]
})
export class DashCardComponent {

  @Input() dashCards: DashCard[]

  constructor() { }

}
