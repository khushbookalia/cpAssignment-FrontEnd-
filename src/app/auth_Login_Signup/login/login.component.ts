import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  email : String;
  password: String;
  name;
  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit() {
    localStorage.clear();
  }
  handleKeyDown(event: any) {
    if (event.keyCode == 13) {
      this.authenticate()
    }

  }
  authenticate() {
    console.log('inside authenticate')
    const lDetails = {
      email: this.email,
      password: this.password
    }
    this.loginService.authenticate(lDetails)
      .subscribe(response => {
        console.log(">>>>>>>>>>>>>>abc", response)
        if (response.success) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('userId', response.message._id);
            localStorage.setItem('userType', response.message.userType);
            this.name = response.message.firstName + " " + response.message.lastName;
            console.log(this.name,"ppppppppp");
            localStorage.setItem('userName', this.name);
            if (response.message.userType == "ORGS") {
              this.router.navigate(['/organiser/home']);
            }
            else if (response.message.userType == "PRTC") {
              console.log('aaaaaaaaaa', response.message)
              this.router.navigate(['/participant/home']);
            }
          } 
          else{
             swal(
                'Error in Signing',
                'Enter valid Username/Email or Password to Login',
                'error'
            ).catch(swal.noop)
          }
      });
  }
}
