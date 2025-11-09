import { Component, Input } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { CrearJsonService } from '../../../../services/crear-json.service';
import { Showlevel1Service,JsonKey } from '../../../../services/showlevel1.service';

@Component({
  selector: 'app-options-selected',
  templateUrl: './options-selected.component.html',
  styleUrls: ['./options-selected.component.css']
})




export class OptionsSelectedComponent {

  tojsonItems: any[] = [];
  jsonResult: any;

  constructor (private showlevel1service: Showlevel1Service,private crearJsonService:CrearJsonService) {}


  
  /*tableData = [
    { L1: 'flowSetup', L2: 'options', L3: 'document', L4: 'extendedCoverage', Valor: 'valor1' },
    { L1: 'flowSetup', L2: 'options', L3: 'document', L4: 'captur', Valor: 'valor2' },
    { L1: 'flowSetup', L2: 'options', L3: 'document', L4: 'captures[]', L5:'scoreConfiguration',Valor: 'valor3' },
    { L1: 'flowSetup', L2: 'options', L3: 'document', L4: 'captures[]',L5:'scoreConfon', Valor: 'valor3' },
    {L1: 'flowSetup', L2: 'options', L3: 'document', L4: 'extendedCoverage', Valor: '' },
    {L1: 'flowSetup', L2: 'options', L3: 'document', L4: 'extendedCoverage', Valor: 'valor1' },
  ];*/

 
  @Input() connectedTo: string[] = [];
  selectedItems: any[] = [];
  onItemDropped(event: CdkDragDrop<any[]>) {
      if (event.previousContainer !== event.container) {
        const item = event.previousContainer.data[event.previousIndex];

        // Clonamos el item para no modificar el original
        const copiedItem = { ...item };

        // Insertamos el clon en la lista destino
        event.container.data.splice(event.currentIndex, 0, copiedItem);

        console.log("Item copiado sin borrar el original:", copiedItem);
      }
    }

  insertValue(){
    this.showlevel1service.updateValue('document', 'correcto').subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err)
    });
  }
  
  crearJson() {
    this.showlevel1service.getLevelsBy(2).subscribe(data => {
      this.tojsonItems = data;
      console.log("datos de tabla", data);
      this.jsonResult = this.crearJsonService.convertTableToJson(this.tojsonItems);
      console.log('JSON generado:', this.jsonResult);
    });
  }

}
