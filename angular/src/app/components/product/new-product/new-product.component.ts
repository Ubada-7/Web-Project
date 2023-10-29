import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/services/api-services.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

    form:any;
    loading:boolean = false;
    companies:any = [];
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
        this.spinnerType='line-scale';}

    ngOnInit(): void {
        this.loadAllCompanies();
        this.createForm()
    }

    loadAllCompanies() {
        this.apiService.loadAllCompanies().subscribe((response:any) => {
            this.companies = response;
        }, error => {
            console.log(error)
        })
    }

    createForm() {
        this.form = this.formBuilder.group({
            type: [ null, [ Validators.required ] ],
            product_name: [ null, [ Validators.required ] ],
            company_name: [ null, [ Validators.required ] ],
            variant: [ null, [ Validators.required ] ],
            size: [ null, [ Validators.required ] ]
        });
    }

    submitForm() {
        if(this.form.valid) {
             this.spinner.show(this.spinnerName);
            console.log(this.form.value)

            this.apiService.addProduct(this.form.value).subscribe((response:any) => {
                console.log(response)
                this.toastr.success('New Product Added Successfully');
                this.spinner.hide(this.spinnerName);
            }, error => {
                this.spinner.hide(this.spinnerName);
                console.log(error)
                this.toastr.error('Product Already Exist');
            })
        }
    }

}
