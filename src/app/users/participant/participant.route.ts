import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes:Routes =[
   {
        path: 'home', component: HomeComponent,
        children: [
            // { path : '', component: HomeComponent}
        ]
    },

]
export const routing :ModuleWithProviders = RouterModule.forChild(routes);
