import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AdminUiModule, AdminUi } from '@ngx-plus/admin-ui'

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
    AppRoutingModule
  ],
  providers: [
    AdminUi,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
