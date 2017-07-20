import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AdminUi } from '../../admin-ui'

@Component({
  selector: 'admin-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {

  @Input() title
  @Input() formConfig
  @Input() item
  @Output() action = new EventEmitter()

  constructor(
    public ui: AdminUi,
  ) { }

  handleAction($event) {
    switch ($event.type) {
      default:
        return this.action.emit($event)
    }
  }

  ngOnInit() { }
}
