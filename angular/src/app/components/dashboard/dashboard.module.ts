import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { HeaderComponent } from '../common/header/header.component';
import { NewSaleComponent } from '../sale/new-sale/new-sale.component';
import { AllSalesComponent } from '../sale/all-sales/all-sales.component';
import { NewCompnayComponent } from '../company/new-compnay/new-compnay.component';
import { AllCompaniesComponent } from '../company/all-companies/all-companies.component';
import { UpdateCompnayComponent } from '../company/update-company/update-company.component';
import { NewProductComponent } from '../product/new-product/new-product.component';
import { AllProductsComponent } from '../product/all-products/all-products.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented'

import { NgxSpinnerModule } from "ngx-spinner";
import { ChartModule } from 'angular2-chartjs';
import { AgGridModule } from 'ag-grid-angular';
import { FeatherModule } from 'angular-feather';
import { User } from 'angular-feather/icons';
import { ToastrModule } from 'ngx-toastr';


const antdModule= [
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzPageHeaderModule,
    NzAvatarModule,
    NzIconModule,
    NzDropDownModule,
    NzTypographyModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzFormModule,
    NzRadioModule,
    NzTabsModule,
    NzButtonModule,
    NzSpinModule,
    NzSelectModule,
    NzSegmentedModule
]

@NgModule({
    declarations: [
        DashboardComponent,
        SidebarComponent,
        HeaderComponent,
        NewSaleComponent,
        AllSalesComponent,
        NewCompnayComponent,
        AllCompaniesComponent,
        UpdateCompnayComponent,
        NewProductComponent,
        AllProductsComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        DashboardRoutingModule,
        ChartModule,
        NgxSpinnerModule,
        FeatherModule.pick({
            User
        }),
        AgGridModule,
        ...antdModule,
         ToastrModule.forRoot(),
    ]
})
export class DashboardModule { }
