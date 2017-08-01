import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AdminUiModule } from '@ngx-plus/admin-ui'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthComponent } from './auth.component'

import { AuthEffects, AuthReducer } from './state'
import { AuthRoutingModule } from './auth.routing'

const components = [
  AuthComponent,
  LoginComponent,
  RegisterComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AdminUiModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forRoot([]),
    AuthRoutingModule
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class AuthModule { }
