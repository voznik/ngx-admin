import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminUiModule } from '@ngx-plus/admin-ui';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AdminUiModule,
]

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})
export class SharedModule { }
