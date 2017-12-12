import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './auth_Login_Signup/login/login.component';
import { SignUpComponent } from './auth_Login_Signup/sign-up/sign-up.component';

export const routes: Routes = [
     { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'login', component: LoginComponent },
     { path: 'signup', component: SignUpComponent },
     { path: 'participant', loadChildren: './users/participant/participant.module#ParticipantModule' },
     { path: 'organiser', loadChildren: './users/organiser/organiser.module#OrganiserModule' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);