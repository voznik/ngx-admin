import { Component } from '@angular/core';
import { AdminUi } from '../../admin-ui';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@Component({
  selector: 'admin-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  constructor(
    public ui: AdminUi,
    public breadcrumbService: BreadcrumbService
  ) { }
}
