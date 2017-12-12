import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { routing } from './organiser.route';
import { CommonService } from './../services/common.service';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [HomeComponent],
  providers: [CommonService]
})
export class OrganiserModule { }
