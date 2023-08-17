import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { Route, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  id:any;
  displayedColumns=['staff_id','category', 'priority', 'progress', 'assigned_date','completed_date','description','venue','staff_feedback','tech_feedback','status'];
  dataSource! :MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private service:ApiserviceService,private navrouter:Router) { }
    


   data: any;
  readData:any;
  temData:any;
  set_object: any;
  set_print:any;
  expo:any;
  statsData:any;
 

  setPriority = {
    priority: ''
  }

  ngOnInit(): void{
    this.service.allRequests().subscribe((res)=>{
      console.log(res.result,"All the logs");
      this.readData = res.result;
      localStorage.setItem('details', JSON.stringify(this.readData));
      
    })
    this.total()
    this.getStats();

    
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
  
  total():void{
    this.service.totalRequests().subscribe((res)=>{
      // console.log(res.result,"ram==>");
      this.temData = res
      console.log(this.temData)
    })
  }

logout(){
  localStorage.removeItem('logindata')
}

priority(event:any,jobCardId:Number){
  var data={
    priority:event.target.value,
  }
  
  console.log(jobCardId)

  this.service.updatePriority(jobCardId,data)

    .subscribe((response) => {
      this.set_object = response;
      console.log(response);
      if (this.set_object.success == true) {
        localStorage.setItem('Priority', JSON.stringify(this.setPriority.priority));
      }
})
}
printer(){
window.print();
}

viewAvailableTech(reference:Number){

console.log(reference)

localStorage.setItem('reference',reference.toString())

this.navrouter.navigate(['/availableTechnician'])

// //   this.service.allRequests().subscribe(response=>{
  
// //     this.data = response.result
// //     console.log(this.data)

// //     const dataArray = []

// //     for(let i = 0; i < this.data.length;i++){
// //       if(this.data.result[i].category){

// //       }

// //     }
// //   })
// // //All Request data details are stored on the localStorage, with the details variable
// //   this.service.allRequests().subscribe((res)=>{
// //     console.log(res.result,"res==>");
// //     this.readData = res.result;

// //   })

}





downloadFile() {
const apiUrl = "http://192.168.27.20:3000"; // Replace with your API URL

// Create a link element
const link = document.createElement('a');
link.style.display = 'none';

// Set the URL of the file to download
link.href = `${apiUrl}/admin/export`;

// Set the download attribute with the desired filename
link.download = 'requests.csv';

// Append the link to the document body
document.body.appendChild(link);

// Click the link to trigger the file download
link.click();

// Clean up by removing the link from the document body
document.body.removeChild(link);
}


  getStats(){
    this.service.getLogServiceStatistics().subscribe((response)=>{
        this.statsData = response;
        // console.log(typeof(this.statsData), "Object Type");

        // this.statsData.push(this.datadata)
        console.log(this.statsData, "Statistics data");
    })
  }


}

