import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../../form/form.component';
import { TrackformComponent } from '../../trackform/trackform.component';
import { LoginComponent } from 'src/app/login/login.component';
import { TechloginComponent } from 'src/app/techlogin/techlogin.component';
import { HODloginPageComponent } from 'src/app/hodlogin-page/hodlogin-page.component';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {


  
  constructor(private dialog: MatDialog) {}
 
  openForm(): void {
  const dialogRef = this.dialog.open(FormComponent, {
    width: '700px',
    disableClose: true
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

 
}

openTrackForm(): void {
  const dialogRef = this.dialog.open(TrackformComponent, {
    width: '700px',
    disableClose: true
  });
  
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '700px',
      disableClose: true
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    }
  
 
    openTech(): void {
      const dialogRef = this.dialog.open(TechloginComponent, {
        width: '700px',
        disableClose: true
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
      }

      logout(){
        localStorage.removeItem('logindata')
      }      
      
      openHOD(): void {
        const dialogRef = this.dialog.open(HODloginPageComponent, {
          width: '700px',
          disableClose: true
        });
        
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        }

}


