import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
              public data: { data: any },
              public dialogRef: MatDialogRef<any>,
              private matDialog: MatDialog) {

  }

  ngOnInit() {
  }

  onYesClick() {
    this.dialogRef.close(true);

  }

  onNoClick() {
    this.dialogRef.close(false);

  }
}
