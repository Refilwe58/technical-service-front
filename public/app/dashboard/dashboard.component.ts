import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskCategories: any;
  readData: any;
  totaltasksData: any;
  totalInprogress: any;
  totalCompleted: any;
  totalClosed: any;
  totalartisan: any;
  statsData: any;

  constructor(private service: ApiserviceService) { }
  ngOnInit(): void {
    this.service.allRequests().subscribe((res) => {
      console.log(res.result, "Active tasks/pending before setting priority");
      this.readData = res.result;



    })

    // task categories
    this.getTaskCategories();
    // Total logs
    this.total();

    // Total inprogress
    this.getTotalInprogress();

    // Total comleted
    this.gettotalCompleted();


    this.gettotalArtisans()


    this.getclosedlogs()
    // Logs statistics
    this.getStats();
  }



  logout() {
    localStorage.removeItem('logindata')
  }
  //Get the task categories
  getTaskCategories() {
    console.log(46548)
    this.service.getCategories().subscribe((res) => {
      this.taskCategories = res.result;

      console.log(this.taskCategories, "TASKS CATEGORIES");
    })
  }
  //TOTAL iNPROGRESS LOGS
  getTotalInprogress() {
    this.service.getInprogressTasks().subscribe((res) => {
      this.totalInprogress = res;

      console.log(this.totalInprogress, "TotalIn progress")
    })
  }


  gettotalCompleted() {
    this.service.getCompletedTasks().subscribe((res) => {
      this.totalCompleted = res;

      console.log(this.totalCompleted, "TotalCompleted")
    })
  }


  getclosedlogs() {
    this.service.gettotalClosedLogs().subscribe((res) => {
      this.totalClosed = res;

      console.log(this.totalClosed, "Total Closed");
    })
  }

  gettotalArtisans() {

    this.service.getartisans().subscribe((res) => {
      this.totalartisan = res;

      console.log(this.totalartisan, "Total artisan");
    })
  }

  //TOTAL LOGS
  total(): void {
    this.service.totalRequests().subscribe((res) => {
      // console.log(res.result,"ram==>");
      this.totaltasksData = res
      console.log(this.totaltasksData, "total request Length")
    })
  }


  //LOGS STATS
  getStats() {
    this.service.getLogServiceStatistics().subscribe((response) => {
      this.statsData = response;
      // console.log(typeof(this.statsData), "Object Type");

      // this.statsData.push(this.datadata)
      console.log(this.statsData, "Statistics data");
    })
  }



  downloadFile() {
    const apiUrl = "http://localhost:3000"; // Replace with your API URL
    //const apiUrl = "http://192.168.27.20:3000"; // Replace with your API URL

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













}








