import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Route, Router } from '@angular/router';




@Component({
  selector: 'app-adminassigntask',
  templateUrl: './adminassigntask.component.html',
  styleUrls: ['./adminassigntask.component.css']
})
export class AdminassigntaskComponent implements OnInit{

  availableTechData :any;
  months = ["January", "February", "March", "April", "May","June", "July","August","September","October","November","December"];
  days:any
  getDay(){
    var arraydays=[]
    var count= 1
    for(var k =0;k< 31;k++){
      
      arraydays.push(count++)
    }
   this.days = arraydays;
  }
  
  adminTechDetails= {
    tech_id:1,
    admin_id:12,
    expected_date: ""
  }
  id:Number =1;
  object_:any;
  pdata:any;
  data:any;
  message = "";
  status =false;
  AdminArtisan_object: any;

  constructor(private service:ApiserviceService, private navrouter:Router){}


  ngOnInit(): void{
 
    
    //Getting the reference of the request in the local storage, the data is a string
  let data = localStorage.getItem('reference');

  //Displaying the typeOf data
  console.log(typeof(data))
  // data?.slice(10, 50)

 //Convert the local storage reference to a number
this.id = Number(data)

  
  


 //Displaying the data
  console.log(this.id, "REFENCE ID NUMBER")
 
  console.log("NEW LINE")
    //Fetch the available artisan of the/based on the reference number.                or Number(data);
    this.service.getTechAvailable(this.id).subscribe((res)=>{
      this.availableTechData = res;

 
      // let data = localStorage.getItem("techDetails");

      // // console.log(typeof(data), 'tHIS DATA');

      //  let staff_id = data?.slice(12,20);
      // console.log("25897486")
      //  console.log(staff_id);
      // console.log(typeof(staff_id))

      // console.log(this.availableTechData)
      this.getDay()
    })



      
     //Getting the admin id in the local storage,the data is a string
    let admin = localStorage.getItem('adminlogin');
   
    let admin_temp_Id = admin?.slice(1,10);
    console.log(admin_temp_Id)

    this.adminTechDetails.admin_id = Number(admin_temp_Id);
    console.log(this.adminTechDetails.admin_id)


    //Displaying both staff number(of the Artisan&admin)
    console.log(this.adminTechDetails,"Display both of them CHECK THE ADMIN")



    // this.service.assignavailArtisan(this.id,this.adminTechDetails).subscribe((res)=>{
    //     this.AdminArtisan_object = res;

    //   console.log(this.AdminArtisan_object )
      
        
    // })
    






  }

  day= ""
  month=""
  year=""
 setDay(event:any){
  this.day = event.target.value;
 }
 setMonth(event:any){
  this.month = event.target.value;
 }
 setYear(event:any){
  this.year = event.target.value;
 }

  logout(){
    localStorage.removeItem('logindata')
  }

  assignArtisan(tech_id:Number) {
    this.message = "";


    var setDate = new Date(this.year+"-"+this.month+"-"+this.day);
    const currentdate = new Date()
    console.log(setDate)
    console.log(currentdate)
    if(setDate < currentdate){
      this.message = "Date you are setting cannot be before the current date";
      return
    }
    console.log(setDate)
    console.log(currentdate)
    this.adminTechDetails.expected_date = setDate.toString()
    //Get the Artisan id from the assignArtisan button(which is the data from the get available tech api), we only passsing and tech id from the html file 
  
     this.adminTechDetails.tech_id = Number(tech_id);

     let admin = localStorage.getItem('adminlogin');
   
     let admin_temp_Id = admin?.slice(1,10);
 
     this.adminTechDetails.admin_id = Number(admin_temp_Id);
   
      
    //  //Getting the admin id in the local storage,the data is a string
    // let admin = localStorage.getItem('admin_id');

    // //Convert the local storage admin id to a number
    // this.adminTechDetails.admin_id= Number(admin);
     console.log(this.adminTechDetails)


    // console.log(this.adminTechDetails.admin_id,"Admin idCHECK THIS");
    // //Have to post the assigned Artisan status
  
     this.service.assignavailArtisan(this.id,this.adminTechDetails).subscribe((res)=>{

        this.AdminArtisan_object = res;

     console.log(this.AdminArtisan_object )
     this.message = "Successfully assigned the request to the artisan "+ tech_id;        
        setTimeout(function(){
         window.location.reload();
       }, 2000);
       this.navrouter.navigate(['/adminpage'])
    })
    
      return  this.status =true

      
     
  }

 
  
}
