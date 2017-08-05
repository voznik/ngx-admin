import { Component, Input } from '@angular/core';
import { AdminUi } from '../../admin-ui';

@Component({
  selector: 'admin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() footerLeft = `<a href="https://github.com/ngx-plus/ngx-admin">@ngx-plus/ngx-admin</a>`
  @Input() footerRight = `<i>powered by</i> logic`

  constructor(public ui: AdminUi) {

  }
}
