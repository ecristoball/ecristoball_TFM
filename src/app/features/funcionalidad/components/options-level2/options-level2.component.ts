import { Component } from '@angular/core';
import { JsonKey, Showlevel1Service } from '../../../../services/showlevel1.service';

@Component({
  selector: 'app-options-level2',
  templateUrl: './options-level2.component.html',
  styleUrl: './options-level2.component.css'
})
export class OptionsLevel2Component {
  level2Items: any[] = [];

  constructor(private showlevel1service: Showlevel1Service) {}
  ngOnInit(): void {
    this.showlevel1service.getByFrontLevel(2).subscribe(data => {
      this.level2Items = data;
      console.log(data);
    });
  }
  /*
   level2DocumentItems=[
    {id:1, name:'Con Selector'},
    {id:2, name:'Sin Selector'},
    {id:3, name:'País'},
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
  ]*/

}




  
