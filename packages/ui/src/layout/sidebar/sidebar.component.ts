import { Component } from '@angular/core'
import { NgxUiService } from '../../services/ngx-ui'

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    public ui: NgxUiService
  ) { }

}
