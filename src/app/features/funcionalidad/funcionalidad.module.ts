import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionalidadRoutingModule } from './funcionalidad-routing.module';
import { FuncionalidadComponent } from './funcionalidad.component';
import { OptionsLevel1Component } from './components/options-level1/options-level1.component';
import { OptionsLevel2Component } from './components/options-level2/options-level2.component';
import { OptionsSelectedComponent } from './components/options-selected/options-selected.component';
import { ItemComponent } from './components/options-level1/item/item.component';
import { ItemListComponent } from './components/options-level1/item-list/item-list.component';


@NgModule({
  declarations: [
    FuncionalidadComponent,
    OptionsLevel1Component,
    OptionsLevel2Component,
    OptionsSelectedComponent,
    ItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FuncionalidadRoutingModule
  ]
})
export class FuncionalidadModule { }
