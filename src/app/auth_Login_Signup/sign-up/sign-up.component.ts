import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [LoginService]
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private loginService: LoginService, private fb: FormBuilder, private router:Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      userType: ['', Validators.required]
    });
   }

  ngOnInit() {
  }
  onSignup(){
    console.log("form values...",this.signupForm.value)
    this.loginService.onSignup(this.signupForm.value).subscribe(response => {
      console.log("response of new Event === ", response)
      if(response.success){
        this.router.navigate(['/participant/home']);
        swal(
            'Successful',
            'You signed up successfully!!',
            'success'
        ).catch(swal.noop)
      }
      else{
        swal(
            'Error',
            'Error in creating account!!',
            'error'
        ).catch(swal.noop)
      }
    })
  }
}
