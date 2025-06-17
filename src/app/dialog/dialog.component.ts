import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {

  MatDialogActions,
  MatDialogClose,
  MatDialogContent,

  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'; 
import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatButtonModule,
    MatDialogTitle,
    MatIconModule,FlexLayoutModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
   

  constructor( public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}

  dialogClose(result: boolean) {
    this.dialogRef.close(result);
  }

}
