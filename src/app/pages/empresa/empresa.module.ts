import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/components/material/material.module';

import { EmpresaComponent } from './empresa.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FreteManualModule } from './frete-manual/frete-manual.module';
import { ProdutoModule } from './produto/produto.module';
import { VendaModule } from './venda/venda.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EmpresaComponent,
    HomeComponent
  ],
  imports: [
    ComponentModule,
    CommonModule,
    MaterialModule,
    EmpresaRoutingModule,
    CategoriaModule,
    ProdutoModule,
    FreteManualModule,
    VendaModule
  ]
})
export class EmpresaModule {}
