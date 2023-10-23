import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  constructor(public dialogRef: DialogRef<DeleteDialogComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
