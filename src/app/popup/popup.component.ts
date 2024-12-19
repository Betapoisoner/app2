import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  confirmAction() {
    // Perform the desired action here, e.g., delete an item, submit a form
    console.log('Confirmation action triggered');
    this.dialogRef.close(true); // Return true to indicate confirmation
  }

  closePopup() {
    this.dialogRef.close(false); // Return false to indicate cancellation
  }
}
