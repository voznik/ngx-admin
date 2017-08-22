import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxAlertsModule } from '@ngx-plus/ngx-alerts'
import { NgxFormsModule } from '@ngx-plus/ngx-forms'
import { ToastyModule } from 'ng2-toasty'
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import {
  ActionButtonComponent,
  CardComponent,
  CardHeaderComponent,
  CardHeaderBrandComponent,
  CardHeaderTabsComponent,
  CardHeaderTitleComponent,
  DashCardComponent,
  DropButtonComponent,
  ModalComponent,
  RadioButtonsComponent,
  ToolbarComponent,
  ToolbarActionComponent,
  ToolbarDropComponent,
  ToolbarSearchComponent,
  ToolbarViewComponent,
  TableComponent,
  TableFooterComponent,
} from './components/index'
import { GridComponent } from './containers/index'
import {
  LayoutComponent,
  BodyComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
} from './layout/index'

import { NgxUiService } from './services'

const components = [
  ActionButtonComponent,
  DropButtonComponent,
  RadioButtonsComponent,
  CardComponent,
  CardHeaderComponent,
  CardHeaderBrandComponent,
  CardHeaderTabsComponent,
  CardHeaderTitleComponent,
  ModalComponent,
  DashCardComponent,
  TableComponent,
  TableFooterComponent,
  ToolbarComponent,
  ToolbarActionComponent,
  ToolbarDropComponent,
  ToolbarSearchComponent,
  ToolbarViewComponent,
  GridComponent,
  LayoutComponent,
  BodyComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
]

const modules = [
  Ng2BreadcrumbModule,
  NgbModule,
  NgxAlertsModule,
  NgxDatatableModule,
  NgxFormsModule,
  ToastyModule,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2BreadcrumbModule.forRoot(),
    NgbModule.forRoot(),
    NgxAlertsModule.forRoot(),
    NgxDatatableModule,
    NgxFormsModule.forRoot(),
    ToastyModule.forRoot(),
  ],
  declarations: [...components],
  entryComponents: [ModalComponent],
  exports: [...components, ...modules],
})
export class NgxUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxUiModule,
      providers: [NgxUiService],
    }
  }
}
