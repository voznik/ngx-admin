import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TodoComponent,
  ],
  entryComponents: [
  ],
  exports: [
    TodoComponent,
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
