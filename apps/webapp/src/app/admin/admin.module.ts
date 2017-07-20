import { NgModule } from '@angular/core'
import { SharedModule } from '../shared.module'

import { AdminComponent } from './admin.component'
import { AdminRoutingModule } from './admin.routing'
import { ControlModule } from './controls/control.module'

@NgModule({
  imports: [
    SharedModule,
    ControlModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
  ],
})

export class AdminModule { }
