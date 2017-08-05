import { Component } from '@angular/core';
import { AdminUi } from '../../admin-ui';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    public ui: AdminUi
  ) { }

}
