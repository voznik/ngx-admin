import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard.component'
import { HomeDashboardComponent } from './home/home-dashboard.component'
import { AdminDashboardComponent } from './admin/admin-dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeDashboardComponent },
      { path: 'admin', component: AdminDashboardComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DashboardRoutingModule { }
