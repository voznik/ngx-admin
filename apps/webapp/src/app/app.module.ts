import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AdminUiModule, AdminUi } from '@ngx-plus/admin-ui'
// import { AuthEffects } from '@ngx-plus/admin-auth'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { environment } from '../environments/environment'
import { AdminReducers, UserEffects, RoleEffects, ControlEffects } from './state'

import { CoreModule } from './core.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AdminUiModule,
    StoreModule.forRoot({
      'admin': AdminReducers
    }),
    EffectsModule.forRoot([
      UserEffects,
      RoleEffects,
      ControlEffects,
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [
    AdminUi,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
