import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/services/api-services.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form:any;
    loading:boolean = false;
    spinnerName:string;
    spinnerType:string;

    constructor(
        private formBuilder: UntypedFormBuilder, 
        private router: Router,
        private apiService: ApiServices,
        private authService: AuthService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService
    ) { 
        this.spinnerName='sp1';
        this.spinnerType='line-scale';
    }

    ngOnInit(): void {
        this.createForm();

        if(this.authService.isAuthenticated()) {
			this.router.navigate(['/dashboard']);
		} else {
			sessionStorage.clear();
			this.router.navigate(['/login']);
		}
    }

    createForm() {
        this.form = this.formBuilder.group({
            email: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }

    submitForm() {
        if(this.form.valid) {
                this.spinner.show(this.spinnerName);

            console.log(this.form.value)

            this.apiService.login(this.form.value).subscribe((response:any) => {
                this.toastr.success('Logged in Successfully');
                this.spinner.hide(this.spinnerName);
                localStorage.setItem('token', response.token);
                localStorage.setItem('name', response.name);
                localStorage.setItem('email', response.email);
                console.log(response)
                this.router.navigate(['/dashboard']);
            }, error => {
                console.log(error)
                this.spinner.hide(this.spinnerName);
                this.toastr.error('login error');
            })
        }
    }
}
