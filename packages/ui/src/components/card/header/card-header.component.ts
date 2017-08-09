import { Component, Input, Output, EventEmitter } from '@angular/core'
import { NavItem } from '../../../services/ngx-ui'

@Component({
  selector: 'admin-card-header',
  template: `
    <div class="row align-items-center justify-content-center">
      <div *ngIf="headerImg"
           class="col-12">
        <admin-card-header-brand [headerImg]="headerImg"
                                 [postHeaderImg]="postHeaderImg"
                                 [preHeaderImg]="preHeaderImg">
        </admin-card-header-brand>
      </div>
      <div class="col">
        <h4 *ngIf="cardTitle"
            class="card-title text-uppercase mb-0">
          {{ cardTitle }}
        </h4>
        <p *ngIf="subTitle"
           class="card-subtitle lead text-left">{{ subTitle }}
        </p>
        <hr *ngIf="subTitle || (nav && !headerImg) || createButton" />
      </div>
      <div *ngIf="createButton"
           class="col-12 col-md-5">
        <button [class]="createButton.class || ''"
                (click)="action.emit($event)">
            <i [class]="'fa fa-fw fa-' + createButton.icon"></i> {{ createButton.text }}
        </button>
      </div>
      <div *ngIf="icon"
           class="col">
        <h4 class="card-title text-right mb-0">
          <i [class]="icon"></i>
        </h4>
      </div>
      <div *ngIf="nav"
           class="col-12">
        <admin-card-header-tabs [nav]="nav"></admin-card-header-tabs>
      </div>
    </div>
  `,
})
export class CardHeaderComponent {

  @Input() cardTitle: string
  @Input() createButton: any
  @Input() headerBg: string
  @Input() headerImg: string
  @Input() icon: string
  @Input() nav: NavItem
  @Input() postHeaderImg: string
  @Input() preHeaderImg: string
  @Input() subTitle: string

  @Output() action = new EventEmitter()

  constructor() { }

}
