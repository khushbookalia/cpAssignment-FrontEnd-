import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../services/common.service';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any = [];
  organisers: any = [];
  userName;
  eventForm: FormGroup;
  
  constructor(private commonService: CommonService, private fb: FormBuilder) {
    this.allEvents();
    this.userName = localStorage.getItem('userName');
    let loginUser = localStorage.getItem('userType');
    if(loginUser == 'PRTC' || loginUser == null){
         window.location.href = '/login'  
    }
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      date: ['', Validators.required],
      organisers: ['', Validators.required],
      location: ['', Validators.required],
      ticketPrice: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.getOrganisers();
  }

  ngOnInit() {
  }
  allEvents(){
    this.commonService.getAllEvents().subscribe(response => {
      console.log("response all events === ", response)
      this.events = response.data;
    })
  }
  getOrganisers(){
    this.commonService.getOrganisers().subscribe(response => {
      console.log("response organisers === ", response)
      this.organisers = response.data;
    })
  }
  addNewEvent(){
    console.log("form values...",this.eventForm.value)
    this.commonService.addEvent(this.eventForm.value).subscribe(response => {
      console.log("response of new Event === ", response)
      this.allEvents();
      if(response.success){
        swal(
            'Successful',
            'Event Added successfully!!',
            'success'
        ).catch(swal.noop)
      }
      else{
        swal(
            'Error',
            'Error in creating a new Event!!',
            'error'
        ).catch(swal.noop)
      }
    })
  }
  logout(){
    localStorage.clear();
  }
}
