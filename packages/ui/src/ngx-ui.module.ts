import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormlyModule, FormlyBootstrapModule } from 'ng-formly'
import { ToastyModule } from 'ng2-toasty'
import { Ng2BreadcrumbModule, BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb'

import { LayoutComponent, BodyComponent, FooterComponent,
  HeaderComponent, SidebarComponent
} from './layout'

import { FormComponent, CardComponent,
  CardHeaderComponent, CardHeaderBrandComponent, CardHeaderTabsComponent,
  ModalComponent, DashCardComponent, ToolbarComponent, TableComponent
} from './components'

import { GridComponent } from './containers'

import { NgxFormService, NgxUiService } from './services'

const components = [
  LayoutComponent,
  BodyComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  CardComponent,
  CardHeaderComponent,
  CardHeaderBrandComponent,
  CardHeaderTabsComponent,
  FormComponent,
  ModalComponent,
  DashCardComponent,
  TableComponent,
  ToolbarComponent,
  GridComponent
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
    NgxFormService,
    // NgxUiService,
  ],
  exports: [
    ...components,
    NgbModule,
  ]
})
export class NgxUiModule { }
