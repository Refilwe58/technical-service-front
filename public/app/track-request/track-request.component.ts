import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.css']
})
export class TrackRequestComponent {

  constructor(private service: ApiserviceService, private _router: Router) { }

  ngOnInit(): void {
    this.recieveAllRequest()
  }

  allRequest: any;
  tempRequest: any;
  numberDone = 0;

  todo: any;
  unAssign = 0
  assigned = 0;
  inprogress = 0;
  hold = 0;
  done = 0;
  isPending = false
  //get the todo tasks
  recieveAllRequest() {
    this.numberDone = 0
    this.unAssign = 0
    this.assigned = 0;
    this.inprogress = 0;
    this.hold = 0;
    this.done = 0;
    this.isPending = false
    var tempId = localStorage.getItem('stafflogin')
    var staffId = Number(tempId?.substring(1, tempId.length - 1))
    this.service.getRequestsBystaffId(staffId).subscribe(respond => {
      console.log(respond)
      //storing the data fetched from the server in a temporary variable
      this.tempRequest = respond
      let requestcount = this.tempRequest.result.length
      console.log(this.tempRequest.result )
      //array 
      var array = []
      for (let i = 0; i < requestcount; i++) {
        //Validating the data in the tempRequest variable
        if (this.tempRequest.result[i].progress == "pending" && this.tempRequest.result[i].tech_id == null) {
          this.unAssign++
          this.isPending = true
          //If it matches, push the MATCHED DATA to the array variable.
          array.push(this.tempRequest.result[i]);
        }

        else if (this.tempRequest.result[i].progress == "pending") {
          this.assigned++
          //If it matches, push the MATCHED DATA to the array variable.
        }

        else if (this.tempRequest.result[i].progress == "in-progress") {
          this.inprogress++
          //If it matches, push the MATCHED DATA to the array variable.
        }

        else if (this.tempRequest.result[i].progress == "on-hold") {
          this.hold++
          //If it matches, push the MATCHED DATA to the array variable.
        }

        else if (this.tempRequest.result[i].progress == "complete") {
          this.done++
          //If it matches, push the MATCHED DATA to the array variable.
        }

        else if (this.tempRequest.result[i].progress == "assign") {
          this.assigned++
          //If it matches, push the MATCHED DATA to the array variable.
        }
      }

      //this.todo=requestcount;



      //Storing the data in the all request variable/array
      this.allRequest = array
      console.log('todo', this.allRequest)

    })
  }


  //get the Inprogress tasks
  getInprogress() {
    this.numberDone = 0
    this.isPending = false
    var status = "in-progress"
    let requestcount = this.tempRequest.result.length
    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == status) {
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array


  }
  //get the onHold tasks
  getOnHoldTasks() {
    this.numberDone = 0
    this.isPending = false
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == "on-hold" && this.tempRequest.result[i].tech_id != null) {
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array
  }

  assignTask() {
    this.numberDone = 0
    this.isPending = false
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == "assign" && this.tempRequest.result[i].tech_id != null) {
        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array
  }

  //get the Completetd tasks
  getCompleteTasks() {
    var status = "complete"
    this.isPending = false
    let requestcount = this.tempRequest.result.length

    var array = []
    for (let i = 0; i < requestcount; i++) {
      if (this.tempRequest.result[i].progress == status) {
        this.numberDone++

        array.push(this.tempRequest.result[i]);
      }
    }
    this.allRequest = array

  }

  /*
      // Get the technician progress status method
  getTechProgressStatus() {

    //The technician task with the updated progress status
    this.service.getTechProgressStatus().subscribe(v => {
      this.progressStatus = v
    })
    }

  */

  feedback(reference: Number) {
    localStorage.setItem("reference", JSON.stringify(reference))
    this._router.navigate(['/stafffeedback'])
    // this._router.navigate(['/stafffeedback', {state:{reference}}])
  }

  logout() {
    localStorage.removeItem('stafflogin')
  }


}