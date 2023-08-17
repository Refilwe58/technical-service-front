import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ref-confirm-form',
  templateUrl: './ref-confirm-form.component.html',
  styleUrls: ['./ref-confirm-form.component.css']
})
export class RefConfirmFormComponent {

  constructor(
    public dialogRef: MatDialogRef<RefConfirmFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService,
    private _router: Router
  ) {}

  ngOnInit() { }


  close(): void {
    this.dialogRef.close();
  }
}
