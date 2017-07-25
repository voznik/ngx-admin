import { NgModule } from '@angular/core'
import { AuthService } from '@ngx-plus/admin-auth'
import { SDKBrowserModule, LoopBackConfig } from '@ngx-plus/admin-sdk'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [
    NgbModule.forRoot(),
    SDKBrowserModule.forRoot(),
  ],
  providers: [
    AuthService,
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
