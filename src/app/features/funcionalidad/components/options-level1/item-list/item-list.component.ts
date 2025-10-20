import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items:any [] =[
    {id:1, name:'Confirmar'},
    {id:2, name:'No Confirmar'},
    {id:3, name:'Pausar'},
    {id:4, name:'Datos Contextuales'},
    {id:5, name:'Documento'},
    {id:6, name:'Selfie Pasivo'},
    {id:7, name:'Selfie Activo'},
    {id:8, name:'Video'},
    {id:9, name:'QR'},
    {id:10, name:'Sellado de tiempo'},
    {id:11, name:'Servicio del Ministerio'},
    {id:12, name:'Peps & Sanctions'},
    {id:13, name:'eSign'}


  ];

}
