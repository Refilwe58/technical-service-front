import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{

  id:any;
  displayedColumns=['staff_id','id','category', 'priority', 'progress','req_date', 'assigned_date','completed_date','description','venue','staff_feedback','tech_feedback','status'];
  dataSource! :MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private service:ApiserviceService){}

  set_object:any;

  readData:any;
  ngOnInit(){
    this.service.allreq().subscribe((res:any)=>{
       this.dataSource = new MatTableDataSource(res.result);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.matSort
      console.log(res.result,"res==>");
      // this.readData = res.result;
      // console.log(this.readData);
      
    })
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  // Search() {
  //   if (this.id == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.readData = this.readData.filter((res: { id: string }) => {
  //       return res.id.toLowerCase().includes(this.id.toLowerCase());
  //     });
  //   }
  // }
  logout(){
    localStorage.removeItem('logindata')
  }

}
