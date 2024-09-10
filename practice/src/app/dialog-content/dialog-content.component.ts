import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})

export class DialogContentComponent implements OnInit {
  masege:any;

  constructor(public dialogRef: MatDialogRef<DialogContentComponent>) { }
  ngOnInit(): void {
    this.masege='Incorrect username or password!'
    throw new Error('Incorrect username or password!');
    
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

 
}
