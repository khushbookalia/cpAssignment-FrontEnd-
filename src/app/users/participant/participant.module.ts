import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { routing } from './participant.route';
import { CommonService } from './../services/common.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HomeComponent],
  providers: [ CommonService ]
})
export class ParticipantModule { }
