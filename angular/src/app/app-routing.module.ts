import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/authentication/forget-password/forget-password.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full', 
        redirectTo: 'dashboard'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { 
        path: 'dashboard', 
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuardService]
    },
    { 
        path: '**', 
        pathMatch: 'full', 
        redirectTo: 'dashboard' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
