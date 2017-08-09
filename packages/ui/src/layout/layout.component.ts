import { Component } from '@angular/core'
import { NgxUiService } from '../services'

@Component({
  selector: 'admin-layout',
  template: `
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>
    <admin-body></admin-body>
    <admin-footer></admin-footer>
  `,
})
export class LayoutComponent {

  constructor(public ui: NgxUiService) { }

}
