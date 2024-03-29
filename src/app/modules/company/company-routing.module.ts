import { CompanyHomeCountSaleResolver } from './../../core/resolvers/company/company-home/company-home-count-sale.resolver';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component: CompanyHomeComponent,
    resolve: {
      saleCount: CompanyHomeCountSaleResolver
    }
  },
  {
    path: 'category',
    loadChildren:() => import('./company-category/company-category.module').then((m) => m.CompanyCategoryModule)
  },
  {
    path: 'product',
    loadChildren:() => import('./company-product/company-product.module').then((m) => m.CompanyProductModule)
  },
  {
    path: 'manual-freight',
    loadChildren:() => import('./company-manual-freight/company-manual-freight.module').then((m) => m.CompanyManualFreightModule)
  },
  {
    path: 'sale',
    loadChildren:() => import('./company-sale/company-sale.module').then((m) => m.CompanySaleModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
