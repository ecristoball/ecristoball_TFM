import { Component , Input} from '@angular/core';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: { key_name: string };

  constructor(private selectionService: SelectionService) {}

  onCardClick() {
    // Solo disparamos el cambio si es 'document'
   
      this.selectionService.selectItem(this.item.key_name);
    
   console.log(this.item.key_name);
  }
}
