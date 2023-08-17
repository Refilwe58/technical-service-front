import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-hodcloselogs',
  templateUrl: './hodcloselogs.component.html',
  styleUrls: ['./hodcloselogs.component.css']
})
export class HodcloselogsComponent {
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

    this.service.closeLog(jobCardId,data).subscribe((response)=>{
         this.set_object = response;
        console.log(response);
        if (this.set_object.success == true) {
          this.set_object.status = "closed"
          data.status= this.set_object;
        }
    })
       

  }

  logout(){
    localStorage.removeItem('logindata')
  }
}
