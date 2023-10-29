import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/services/api-services.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

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
            field: 'company_name', 
            headerName: 'Company Name',
            headerTooltip: 'Company Name', 
        },
        {
            field: 'product_name', 
            headerName: 'Product Name',
            headerTooltip: 'Product Name', 
        },
        {
            field: 'type', 
            headerName: 'Type', 
            headerTooltip: 'Type',
        },
        {
            field: 'variant', 
            headerName: 'Variant', 
            headerTooltip: 'Variant',
        },
        {
            field: 'size', 
            headerName: 'Size', 
            headerTooltip: 'Size',
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
         }

    ngOnInit() {
        this.setDefaultPropertiesForGrid();
        this.loadAllProducts();
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
    }

    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    gridSizeChanged(params:any) {
        this.gridApi.sizeColumnsToFit();
    }

    loadAllProducts() {
        this.spinner.show(this.spinnerName);
        this.apiService.loadAllProducts().subscribe((response:any) => {
            this.spinner.hide(this.spinnerName);
            this.toastr.success('Products is loaded');
            console.log(response);
            this.rowData = response;
        }, error => {
            this.spinner.hide(this.spinnerName);
            this.toastr.error(' error');
            console.log(error)
        })
    }
}