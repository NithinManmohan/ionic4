import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
 { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
 { path: 'details/:myid1', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }