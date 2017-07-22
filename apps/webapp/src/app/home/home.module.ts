import { NgModule } from '@angular/core'
import { SharedModule } from '../shared.module'

import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing'
import { TodoModule } from './todo/todo.module'

@NgModule({
  imports: [
    SharedModule,
    TodoModule,
    HomeRoutingModule
  ],
  providers: [

  ],
  declarations: [
    HomeComponent,
  ],
})

export class HomeModule { }
