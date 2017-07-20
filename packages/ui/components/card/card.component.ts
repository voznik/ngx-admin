import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'admin-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input() headerBg: string;
  @Input() headerImg: string;
  @Input() preHeaderImg: string;
  @Input() postHeaderImg: string;
  @Input() icon: string;
  @Input() cardTitle: string;
  @Input() subTitle: string;
  @Input() createButton: any;
  @Input() modalTemplate: any;
  @Input() nav: any;
  @Output() action = new EventEmitter();

  constructor() {

  }

}
