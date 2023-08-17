import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  implements OnInit{
  constructor(private service:ApiserviceService) { }

  readData:any;

  ngOnInit(): void{
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    })
  }

}
