import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { SearchPipe } from '../search.pipe';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-adminprogress',
  templateUrl: './adminprogress.component.html',
  styleUrls: ['./adminprogress.component.css']
})
export class AdminprogressComponent {

  availableTechData:any;
  total:any;
  search = ""
  inprogressTasks:any;
  completedTasks:any;
  totalCompleted:any;
  totalInprogress:any;
  message = "";

  searchButton = "";


  constructor(private service:ApiserviceService){}

  
  ngOnInit(): void{
    let data = localStorage.getItem('reference');

   

   this.getInProgress();

     this.getCompleted();

    // //get the total number of tasks inprogress
    //  this.gettotalInprogress();

    // //get the total number of tasks completed
    //  this. gettotalCompleteted();
    

     
  }

 


  logout(): void{
    localStorage.removeItem('logindata')
  }

 

  printer(): void{
    window.print();
  }

  // Get the total Inprogress tasks 
  // gettotalInprogress(){
  //   this.service.getInprogressTasks().subscribe((res)=>{
  //     // this.data = res;
  //     this.totalInprogress = res;
  //     this.total = this.totalInprogress.length;
  //   console.log(this.total,"total inprogress")
     
  //   });
    
  // }
  // // Get the total completed tasks 
  // gettotalCompleteted(){
  //   this.service.getInprogressTasks().subscribe((res)=>{
  //     // this.data = res;
  //     this.totalCompleted = res;
  //     this.total = this.totalCompleted.length;
  //   console.log(this.total,"total Completed")
     
  //   });
    
  // }
  // Get the all Inprogress tasks 
  getInProgress(){
    this.service.getInprogressTasks().subscribe((res)=>{
        // this.data = res;
        this.inprogressTasks = res;
        console.log(this.inprogressTasks)
    });




  }

// Get all the completed tasks 
  getCompleted(){
    this.service.getCompletedTasks().subscribe((res)=>{
      this.completedTasks = res;
      console.log(this.completedTasks)
    })
  }













}

