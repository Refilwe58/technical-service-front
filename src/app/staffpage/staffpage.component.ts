import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RefConfirmFormComponent } from '../ref-confirm-form/ref-confirm-form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

declare var window:any;
@Component({
  providers:[DashboardComponent ],
  selector: 'app-staffpage',
  templateUrl: './staffpage.component.html',
  styleUrls: ['./staffpage.component.css']
})
export class StaffpageComponent implements OnInit {
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


 
  formModal:any;
  selectedBuilding: any
  buildingNo = ""
  requestform = {
    description: '',
    category: '',
    venue: this.buildingNo,
    //Image: Blob,
    staff_id: "",

  };

  categoryList:any;
  catergoryIssue:any;

  getSelectedMonth:any

  constructor(private service: ApiserviceService, private _router: Router, private dialog: MatDialog,private admin:DashboardComponent) { }
  errormsg: any;
  successmsg: any;
  showSuccessMsg: any;
  staffId: any
  ngOnInit(): void {
    // var myid = localStorage.getItem('stafflogin')?.toString()
    // this.staffId = myid?.substring(1, myid.length - 1)
    // this.requestform.staff_id = this.staffId
    // console.log(this.staffId)
     this.category()
     this.formModal=new window.bootstrap.Modal(
      document.getElementById("exampleModalCenter")
     );
    //form modal
  }
  someEvent() {
    // Trigger the popup event
    this.service.triggerPopup();
  }
  openModal(){
    this.formModal.show();
    // this.admin.openAdminModal();
  }
  doSomething(){
    ///close modal
    this.formModal.hide();
  }
  //admin alert function
  adminAlert(){
    this.service.adminModal().subscribe(()=>{
      console.log("admin pop");
    })
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

  catItems: any
  tempCat: any
  setCategory(event: any) {
    console.log(event.target.value)
  let param = event.target.value
  let getId = param.substring(0, param.indexOf(','))
    this.requestform.category=param.substring(param.indexOf(',')+1)
  this.service.getCatIssues(getId).subscribe(res=>{
    this.catergoryIssue = res
  })
   
  }

  tempcatItem: any
  problemcategoryItems: any
  setCategoryItem(event: any) {
    console.log(event.target.value)
    this.requestform.description=event.target.value
  }



category(){
  this.service.category().subscribe(res=>{
    this.categoryList = res
  })
}


  request_object: any
  request() {
    var myid = localStorage.getItem('stafflogin')?.toString()
    this.staffId = myid?.substring(1, myid.length - 1)
    this.requestform.staff_id = this.staffId
    console.log(this.requestform)
    // if (this.requestform.staff_id) {
    //   const staff_id = JSON.parse(this.requestform.staff_id);
    // }
    if (this.requestform.description == '' && this.requestform.category == '' && this.requestform.venue == '') {
      this.successmsg=  "Fill in the Form"
      this.showSuccessMsg = true;

      return;
    }

    if (this.requestform.category == '') {

      this.successmsg=  "Choose Catergory"
      this.showSuccessMsg = true;

      return;
    }

    if (this.requestform.description === '') {
      this.successmsg=  "Describe the issue"
      this.showSuccessMsg = true;

      return;
    }
    if (this.requestform.venue === '') {
      this.successmsg= "Choose Building"
      this.showSuccessMsg = true;

      return;
    }
  

    this.service.request(this.requestform)

      .subscribe((response) => {
        this.request_object = response;
        if (this.request_object.success == true) {
          this.successmsg = this.request_object.message;
          this.showSuccessMsg = true;
          this.requestform = {
            description: '',
            category: '',
            venue: '',
            //Image: Blob,
            staff_id: '',
          };
        } else {
          console.log("User ID doesnt match credentials")
        }

      },
        (error) => {
          this.errormsg = error;
        });

 


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

  clear() {


  }

}

