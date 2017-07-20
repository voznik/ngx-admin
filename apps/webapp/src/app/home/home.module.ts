import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home.routing';
import { TodoModule } from './todo/todo.module';

@NgModule({
  imports: [
    SharedModule,
    TodoModule,
    HomeRoutingModule
  ],
  exports: [

  ],
  providers: [

  ],
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
})

export class HomeModule { }
