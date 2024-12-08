import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: '**', redirectTo: '' } // Redirect to the dashboard if the URL doesn't match
];
