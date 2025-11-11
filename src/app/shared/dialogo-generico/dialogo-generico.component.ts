import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-generico',
  templateUrl: './dialogo-generico.component.html',
  styleUrl: './dialogo-generico.component.css'
})
export class DialogoGenericoComponent {
   formValues: Record<string, any> = {};

  constructor(
    public dialogRef: MatDialogRef<DialogoGenericoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  save() {
    this.dialogRef.close(this.formValues);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}
