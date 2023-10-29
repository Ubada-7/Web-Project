import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { ForgetPasswordComponent } from './components/authentication/forget-password/forget-password.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ApiServices } from './services/api-services.service';
import { UtilService } from './services/util.service';
import { UrlService } from './services/url.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';

import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';

const antdModule= [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule
]

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        ForgetPasswordComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        ...antdModule,
        NgxSpinnerModule,
        NgxSpinnerModule.forRoot({ type: 'line-scale' }),
         ToastrModule.forRoot(),
    ],
    providers: [
        ApiServices, 
        AuthService,
        AuthGuardService, 
        UtilService,
        UrlService, 
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
