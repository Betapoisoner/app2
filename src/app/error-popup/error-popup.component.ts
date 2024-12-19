import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.css']
})
export class ErrorPopupComponent {
    constructor(
      public dialogRef: MatDialogRef<ErrorPopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: 
   { errorMessage: string }
    ) {}
  
    close(): void {
      this.dialogRef.close();
    }
}
