import { Component, OnInit, Input, VERSION } from '@angular/core'
import { NgxUiService } from '../../services/ngx-ui'

@Component({
  selector: 'admin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() footerLeft = `<a href="https://github.com/ngx-plus/ngx-admin">@ngx-plus/ngx-admin</a>`
  @Input() footerRight

  constructor(public ui: NgxUiService) { }

  ngOnInit() {
    if (!this.footerRight) {
      const ngVersion = VERSION.full
      this.footerRight = `Angular: <i>v${ngVersion}</i>`
    }
  }
}
