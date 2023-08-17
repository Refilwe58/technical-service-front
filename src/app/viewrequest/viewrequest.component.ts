import { Component } from '@angular/core';

@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent {

  logout(){
    localStorage.removeItem('logindata')
  }

}
