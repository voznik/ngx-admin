import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: 'auth', loadChildren: '@ngx-plus/admin-auth/src/auth.module#AuthModule' },
      { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
      { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
      { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
      useHash: true,
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
