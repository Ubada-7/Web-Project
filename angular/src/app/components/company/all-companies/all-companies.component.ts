import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ApiServices } from 'src/app/services/api-services.service';

import { FilterIconRenderer } from '../../cell-rendering-components/filter-icon-rendering/filter-icon-rendering.component';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-all-companies',
    templateUrl: './all-companies.component.html',
    styleUrls: ['./all-companies.component.scss']
})
export class AllCompaniesComponent implements OnInit {

    gridApi:any;
    spinnerName:string;
    spinnerType:string;
    gridColumnApi:any;
    defaultColDef:any;
    headerHeight:any;
    gridFrameworkComponents:any;
    gridOptions:any;
    rowData:any = [];
    columnDefs = [
        { 
            field: '', 
            headerName: '', 
            filter: false, 
            width: 50, 
            suppressMovable: true, 
            suppressSizeToFit: true,
            headerCheckboxSelection: true, 
            checkboxSelection: true 
        },
        {
            field: 'name', 
            headerName: 'Name',
            headerTooltip: 'Name', 
        },
        {
            field: 'address', 
            headerName: 'Address',
            headerTooltip: 'Address', 
        },
        {
            field: 'phone_number', 
            headerName: 'Phone Number', 
            headerTooltip: 'EVENT NAME',
        },
        {
            field: 'action', 
            headerName: 'Action',
            headerTooltip: 'Action',
            width: 120,
            suppressMovable: true,
            suppressSizeToFit: true,
            filter: false,
            floatingFilter: false,
            cellRenderer: 'filterIconRenderer'
        }
    ];

    constructor(
        private apiService: ApiServices,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService
        ) {
        this.spinnerName='sp1';
        this.spinnerType='line-scale';
        this.gridOptions = <GridOptions> { context: { grid: this } };
    }

    ngOnInit() {
        this.setDefaultPropertiesForGrid();
        this.loadAllCompanies();
    }

    setDefaultPropertiesForGrid() {
        this.defaultColDef = {
            filter: "agTextColumnFilter",
            sortable: true,
            resizable: true,
            sortingOrder: ["asc", "desc"],
            filterParams: { 
                defaultOption: "startsWith", 
                newRowsAction: "keep" 
            },
            suppressMenu: true,
            floatingFilter: true,
            headerCheckboxSelectionFilteredOnly: true
        }
        this.headerHeight = 32;

        this.gridFrameworkComponents = {
            filterIconRenderer: FilterIconRenderer,
        };
    }

    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    gridSizeChanged(params:any) {
        this.gridApi.sizeColumnsToFit();
    }

    loadAllCompanies() {
            this.spinner.show(this.spinnerName);
        this.apiService.loadAllCompanies().subscribe((response:any) => {
            this.toastr.success('Data is loaded');
            console.log(response);
            this.spinner.hide(this.spinnerName);
            this.rowData = response;
        }, error => {
            this.toastr.error('Data is not  error');
            this.spinner.hide(this.spinnerName);

            console.log(error)
        })
    }

    deleteSingleRecord(id:any) {
        // this.spinner.show(this.spinner_name);
        // this.api_service.deleteStudent(id).subscribe((response:any) => {
        //     console.log(response);
        //     this.toastr.success('Student record is deleted');
        //     this.getAllStudents();
        // }, error => {
        //     this.spinner.hide(this.spinner_name);
        //     console.log(error);
        //     this.toastr.error(error);
        // })
    }

    editSingleRecord(id:any) {
        // this.router.navigate(['/home/students/'+id]);
    }
}
