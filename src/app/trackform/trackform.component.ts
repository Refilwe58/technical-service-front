import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-trackform',
  templateUrl: './trackform.component.html',
  styleUrls: ['./trackform.component.css']
})
export class TrackformComponent implements OnInit {
  readData: any;

  constructor(
    public dialogRef: MatDialogRef<TrackformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiserviceService
  ) {}

  ngOnInit() {
    this.service.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
