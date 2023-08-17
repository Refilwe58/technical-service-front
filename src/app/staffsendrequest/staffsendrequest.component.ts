import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-staffsendrequest',
  templateUrl: './staffsendrequest.component.html',
  styleUrls: ['./staffsendrequest.component.css']
})
export class StaffsendrequestComponent {
  bld_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  venue = [{ buld_no: 10, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 1, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 2, vanues: [{ v: "G3" }, { v: "4" }, { v: "G10" }, { v: "7" }, { v: "112" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 3, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 4, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 5, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 6, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 7, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  { buld_no: 8, vanues: [{ v: "LG1" }, { v: "LG2" }, { v: "G10" }, { v: "G12" }, { v: "110" }, { v: "111" }, { v: "112" }, { v: "210" }, { v: "220" }, { v: "238" }] },
  ]

  selectedBuilding: any
  buildingNo = ""
  requestform = {
    description: '',
    category: '',
    venue: this.buildingNo,
    Image: Blob,
    staff_id: "",
     
  };
  

  constructor(private service: ApiserviceService, private _router: Router) {}
  errormsg: any;
  successmsg:any;
  showSuccessMsg: any;
  staffId:any
  ngOnInit(): void {
    var myid =localStorage.getItem('stafflogin')?.toString()
    this.staffId = myid?.substring(1,myid.length-1)
    this.requestform.staff_id = this.staffId
  }

  buldingNoSelect(event: any) {
    var venueArray = []
    for (var k = 0; k < this.venue.length; k++) {
      if (event.target.value == this.venue[k].buld_no) {
        venueArray.push(this.venue[k].vanues)
        this.buildingNo = event.target.value
      }
    }
    this.selectedBuilding = venueArray[0];
    console.log(this.selectedBuilding)
  }

  getVunueSelected(selectedV: any) {
    console.log(this.buildingNo + " - " + selectedV.target.value)
    this.requestform.venue = this.buildingNo + " - " + selectedV.target.value;
  }

  request_object: any
  request() {
    console.log(this.requestform)
    if (this.requestform.staff_id) {
      const staff_id = JSON.parse(this.requestform.staff_id);
    }
    if (this.requestform.description == '' && this.requestform.category == '' && this.requestform.venue == '') {
    alert("Fill in the Form")
      return;
    }

    if (this.requestform.category == '') {
      
      alert("Choose Catergory")
      return;
    }

    if (this.requestform.description === '') {
      alert("Describe the issue")
     
      return;
    }
    if (this.requestform.venue === '') {
      alert("Choose Building")
      
      return;
    }

    this.service.request(this.requestform)

      .subscribe((response) => {
        this.request_object = response;
        console.log(response);
        if (this.request_object.success == true) {
          this.successmsg = this.request_object.message;
          this.showSuccessMsg = true;
        } else {
          console.log("User ID doesnt match credentials")
        }

      },
        (error) => {
          this.errormsg = error;
        });

        this.requestform = {
          description: '',
          category: '',
          venue: this.buildingNo,
          Image: Blob,
          staff_id: '',
        };

        
  }



  // staffRequest()
  // {
  //   if(this.userForm.valid)
  //   {
  //     console.log(this.userForm.value);
  //     this.service.staffRequests(this.userForm.value).subscribe((res)=>{
  //       console.log(res,'res==>');
  //       this.userForm.reset();
  //     })
  //   }
  //   else{
  //     this.errormsg = 'all field is required';
  //   }

  // }

  // constructor(private dialog: MatDialog) {}

  // openTrackForm(): void {
  //   const dialogRef = this.dialog.open(TrackformComponent, {
  //     width: '700px',
  //     disableClose: true
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

 

  logout() {
    localStorage.removeItem('stafflogin')
  }

  clear(){
    
    
  }
}
