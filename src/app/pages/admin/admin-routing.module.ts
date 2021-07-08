import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../../core/guards/auth.guard';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children:
    [
      { path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
      { path: 'promover', loadChildren: './promover/promover.module#PromoverModule', canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
      { path: 'gerenciarrules', loadChildren: './gerenciar-rules/gerenciar-rules.module#GerenciarRulesModule', canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard], data: { role: environment.RoleAdmin }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
