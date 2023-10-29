import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServices } from 'src/app/services/api-services.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'update-new-compnay',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompnayComponent implements OnInit {

    form:any;
    loading:boolean = false;

    constructor(
        private formBuilder: UntypedFormBuilder, 
        private router: Router,
        private apiService: ApiServices,
        private authService: AuthService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.getIdFromUrl();
    }

    createForm() {
        this.form = this.formBuilder.group({
            name: [ null, [ Validators.required ] ],
            address: [ null, [ Validators.required ] ],
            phone_number: [ null, [ Validators.required ] ]
        });
    }

    single_company_id:any;
    getIdFromUrl() {
        this.single_company_id = this.route.snapshot.paramMap.get('id');
        this.PutDataIntoForm(this.single_company_id);
    }

    PutDataIntoForm(id:any) {
        // this.spinner.show(this.spinner_name);
        // this.api_service.getSingleStudent(id).subscribe((response:any) => {
        //     console.log(response)
        //     this.spinner.hide(this.spinner_name);

        //     this.form.patchValue({
        //         roll_number: response.roll_number,
        //         name: response.name,
        //         gender: response.gender,
        //         fee: response.fee,
        //         date_of_birth: new Date(response.date_of_birth),
        //         nationality: response.nationality,
        //         religion: response.religion,
        //         b_form: response.b_form,
        //         class: response.class,
        //         previous_school: response.previous_school,
        //         country: response.country,
        //         city: response.city,
        //         mohallah: response.mohallah,
        //         street: response.street,
        //         house_number: response.house_number,
        //         father_name: response.father_name,
        //         father_cnic: response.father_cnic,
        //         father_occupation: response.father_occupation,
        //         father_education: response.father_education,
        //         phone_number: response.phone_number
        //     })
        // }, error => {
        //     this.spinner.hide(this.spinner_name);
        //     console.log(error)
        // })        
    }

    submitForm() {
        if(this.form.valid) {
            console.log(this.form.value)

            this.apiService.addCompany(this.form.value).subscribe((response:any) => {
                console.log(response)
            }, error => {
                console.log(error)
                // this.toastr.success('Hello world!', 'Toastr fun!');
            })
        }
    }
}
