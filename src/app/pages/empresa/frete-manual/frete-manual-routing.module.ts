import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { FreteManualComponent } from './frete-manual.component';

const routes: Routes = [
  { path: '', component: FreteManualComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FreteManualRoutingModule { }