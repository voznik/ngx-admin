import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormlyModule, FormlyBootstrapModule } from 'ng-formly'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastyModule } from 'ng2-toasty'
import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb'

import { LayoutComponent, BodyComponent, FooterComponent, HeaderComponent, SidebarComponent } from './layout'
import { AdminForm, FormComponent, CardComponent, ModalComponent, DashCardComponent } from './components'
import { AdminUi } from './admin-ui'

const components = [
  LayoutComponent,
  BodyComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  CardComponent,
  FormComponent,
  ModalComponent,
  DashCardComponent,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    NgbModule.forRoot(),
    ToastyModule,
    Ng2BreadcrumbModule.forRoot(),
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    AdminForm,
    // AdminUi,
  ],
  exports: [
    ...components,
    NgbModule,
  ]
})
export class AdminUiModule { }
