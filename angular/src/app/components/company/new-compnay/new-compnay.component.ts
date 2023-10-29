import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/services/api-services.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-compnay',
  templateUrl: './new-compnay.component.html',
  styleUrls: ['./new-compnay.component.scss']
})
export class NewCompnayComponent implements OnInit {

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
        this.createForm()
    }

    createForm() {
        this.form = this.formBuilder.group({
            name: [ null, [ Validators.required ] ],
            address: [ null, [ Validators.required ] ],
            phone_number: [ null, [ Validators.required ] ]
        });
    }

    submitForm() {
        if(this.form.valid) {
            this.spinner.show(this.spinnerName);
            console.log(this.form.value)

            this.apiService.addCompany(this.form.value).subscribe((response:any) => {
                console.log(response);
                this.toastr.success('New Company Added Successfully');
                this.spinner.hide(this.spinnerName);
            }, error => {
                this.toastr.error('Company Already Exist');
                this.spinner.hide(this.spinnerName);
                console.log(error)
                // this.toastr.success('Hello world!', 'Toastr fun!');
            })
        }
    }
}
