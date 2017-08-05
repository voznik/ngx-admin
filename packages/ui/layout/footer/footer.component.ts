import { Component } from '@angular/core';
import { AdminUi } from '../../admin-ui';

@Component({
  selector: 'admin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public ui: AdminUi) {

  }
}
