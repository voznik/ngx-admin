import { NgModule } from '@angular/core'
import { SharedModule } from '../shared.module'

import { DashboardComponent } from './dashboard.component'
import { DashboardRoutingModule } from './dashboard.routing'

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  exports: [

  ],
  providers: [

  ],
  declarations: [
    DashboardComponent
  ],
})

export class DashboardModule { }
