import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminUiModule } from '@ngx-plus/admin-ui';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AdminUiModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
  ]
})
export class AdminAuthModule { }
