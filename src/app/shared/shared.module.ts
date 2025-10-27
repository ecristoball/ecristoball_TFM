import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    ItemComponent,
    ItemListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ItemComponent, 
    ItemListComponent]
})
export class SharedModule { }
