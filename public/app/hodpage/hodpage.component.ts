import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hodpage',
  templateUrl: './hodpage.component.html',
  styleUrls: ['./hodpage.component.css']
})
export class HODpageComponent implements OnInit{

  constructor(private service: ApiserviceService, private _router: Router, private dialog: MatDialog) {}

  hod:any;
  readData: any;



  ngOnInit(): void {
    

    var myid =localStorage.getItem('HODlogin')?.toString()
    this.hod = myid?.substring(1,myid.length-1);

    console.log(this.hod)


    
    this.service.HODrequest(Number(this.hod)).subscribe((res) => {
      console.log(res, "ram==>");
    
      // Extract the array from the response object
      this.readData = res;

    });
  }

  logout(){
    localStorage.removeItem('logindata')
  }

  }
