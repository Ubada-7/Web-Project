import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompaniesComponent } from '../company/all-companies/all-companies.component';
import { NewCompnayComponent } from '../company/new-compnay/new-compnay.component';
import { UpdateCompnayComponent } from '../company/update-company/update-company.component';
import { AllProductsComponent } from '../product/all-products/all-products.component';
import { NewProductComponent } from '../product/new-product/new-product.component';
import { AllSalesComponent } from '../sale/all-sales/all-sales.component';
import { NewSaleComponent } from '../sale/new-sale/new-sale.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,   
        children: [
            {
                path: 'company/new',
                component: NewCompnayComponent
            },
            {
                path: 'company/all',
                component: AllCompaniesComponent
            },
            {
                path: 'company/update',
                component: UpdateCompnayComponent
            },

            {
                path: 'product/new',
                component: NewProductComponent
            },
            {
                path: 'product/all',
                component: AllProductsComponent
            },

            {
                path: 'sale/new',
                component: NewSaleComponent
            },
            {
                path: 'sale/all',
                component: AllSalesComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }