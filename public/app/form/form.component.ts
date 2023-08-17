import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';


import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  errormsg: any;
  staffLogin = {
    staff_id: '',
  }

  // userForm = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required, Validators.email]),
  //   'mobile': new FormControl('', Validators.required),
  //   'office': new FormControl('', Validators.required),
  //   'title': new FormControl('', Validators.required),
  //   'description': new FormControl('', Validators.required)

  // });

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService,
    private _router: Router
  ) {}

  ngOnInit() { }

  staff_object:any

  staff_login(): void {

    if(this.staffLogin.staff_id == ''){
      alert("Staff number is required");
      return;
    }

    this.service.staffLogin(this.staffLogin)
    .subscribe((response)=>{
      this.staff_object = response
      console.log(this.staff_object.body)
      if (this.staff_object.success == true) {
        localStorage.setItem('stafflogin', JSON.stringify(this.staffLogin.staff_id));
        this.close();
        this._router.navigate(['/staffpage']);
      }
      else{
        //alert("Staff not found")
      }

      //
    },
    (err)=>{
      //alert("Something went wrong, please try after some time")
      //alert(err.message)
    }
    )
  }
  close() {
    this.dialogRef.close();
  }
}