import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared.module'

import { ControlComponent } from './control.component'
import { ControlService } from './control.service'

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ControlComponent,
  ],
  exports: [
    ControlComponent,
  ],
  providers: [
    ControlService
  ]
})
export class ControlModule { }
