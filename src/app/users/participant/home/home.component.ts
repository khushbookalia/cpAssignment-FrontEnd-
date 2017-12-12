import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any = [];
  userName;
  constructor(private commonService: CommonService) { 
    this.allEvents();
    this.userName = localStorage.getItem('userName');
    let loginUser = localStorage.getItem('userType');
    if(loginUser == 'ORGS' || loginUser == null){
         window.location.href = '/login'      
        // this.router.navigate(['login'])
    }
  }

  ngOnInit() {
  }
  allEvents(){
    this.commonService.getAllEvents().subscribe(response => {
      console.log("response all events === ", response)
      this.events = response.data;
    })
  }
  logout(){
    localStorage.clear();
  }
}
