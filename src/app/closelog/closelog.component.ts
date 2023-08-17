import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-closelog',
  templateUrl: './closelog.component.html',
  styleUrls: ['./closelog.component.css']
})
export class CloselogComponent implements OnInit{

  constructor(private service:ApiserviceService){}

  set_object:any;

  readData:any;
  ngOnInit():void{
    this.service.allRequests().subscribe((res)=>{
      console.log(res.result,"res==>");
      this.readData = res.result;
      // localStorage.setItem('details', JSON.stringify(this.readData));
    })
  }

  log(event:any,jobCardId:Number){
    var data={
      status:event.target.value,
    }
    
    console.log(jobCardId,'iyioj')

    this.service.closeLog(jobCardId,data)

      .subscribe((response) => {
        this.set_object = response;
        console.log(response);
        if (this.set_object.success == true) {
          this.set_object.status = "closed"
          data.status= this.set_object;
        }
  })
}















}
