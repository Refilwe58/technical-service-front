import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { TrackformComponent } from '../trackform/trackform.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-hodlogin-page',
  templateUrl: './hodlogin-page.component.html',
  styleUrls: ['./hodlogin-page.component.css']
})
export class HODloginPageComponent implements OnInit {

  
  HODlogin= {
    hod_id:'',
    password:''
  }

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService,
    private _router: Router
  ) {}

  ngOnInit() {}

  HOD_object:any
  HOD_login() {
     if(this.HODlogin.hod_id== '' && this.HODlogin.password == ''){
      alert("Email and Password is required");
      return;
     } 
     if(this.HODlogin.hod_id== ''){
      alert("Email is required");
      return;
     } 
     if(this.HODlogin.password== ''){
      alert("Password is required");
      return;
     } 

    this.service.HODLogin(this.HODlogin)
    .subscribe((response)=>{
      this.HOD_object = response
      console.log(this.HOD_object.body)
      if(this.HOD_object.success == true){
        localStorage.setItem('HODlogin',JSON.stringify(this.HODlogin.hod_id))
        this.close()
        this._router.navigate(['/hodpage'])
      }else{
        alert("user not found with these credentials")
      }

      //
    },
    (err)=>{
      alert("something is wrong")
      //alert(err.message)
    }
    )

    /*if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe(res => {
        console.log(res, 'res==>');
        this.userForm.reset();
      });
    } else {
      this.errormsg = 'All fields are required';
    }*/
  }

  close(): void {
    this.dialogRef.close();
  }

}
