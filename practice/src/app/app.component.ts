import { Component } from '@angular/core';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  // constructor(public dialog: MatDialog) { }

  // openDialog(): void {
  //   this.dialog.open(DialogContentComponent, {
  //     width: '250px',
  //     data: { /* Pass any data if needed */ }
  //   });
  // }
  constructor(public dialog: MatDialog) { }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '300px',
    });
  }
}
