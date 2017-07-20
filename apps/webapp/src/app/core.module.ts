import { NgModule } from '@angular/core'
import { AdminAuth } from '@ngx-plus/admin-auth'
import { AdminUiModule, AdminUi } from '@ngx-plus/admin-ui'
import { SDKBrowserModule, LoopBackConfig } from '@ngx-plus/admin-sdk'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AdminReducer, AdminEffects } from './state'

@NgModule({
  imports: [
    NgbModule.forRoot(),
    SDKBrowserModule.forRoot(),
    StoreModule.provideStore({
      admin: AdminReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AdminEffects,
  ],
  providers: [
    // AdminUi,
    AdminAuth,
  ]
})
export class CoreModule {
  constructor() {
    const apiConfig = Object.assign({}, window['apiConfig'])
    console.log(apiConfig)
    LoopBackConfig.setBaseURL(apiConfig.baseUrl)
    LoopBackConfig.setApiVersion(apiConfig.version)
  }
}
