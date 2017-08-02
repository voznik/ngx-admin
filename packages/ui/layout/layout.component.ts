import { Component } from '@angular/core';
import { AdminUi } from '../admin-ui';

@Component({
  selector: 'admin-layout',
  template: `
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>
    <breadcrumb *ngIf="ui.headerActive" [class.open]="ui.sidebarActive && ui.sidebarOpen"></breadcrumb>
    <admin-body></admin-body>
    <admin-footer></admin-footer>
  `,
})
export class LayoutComponent {

  constructor(
    public ui: AdminUi,
  ) { }

}
