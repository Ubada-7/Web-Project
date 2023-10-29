import { throwError as observableThrowError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { retry, tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { UtilService } from './util.service';
import { Router } from '@angular/router';

@Injectable()
export class ApiServices {
    
    constructor(
        private http: HttpClient, 
        private url_service: UrlService,
        private utilService: UtilService,
        private router: Router
    ) {}

    login(user: any) {
        let data = { 'email': user.email, 'password': user.password } 
        return this.http.post(this.url_service.api+'user/login/', data)
            .pipe()
    }

    addCompany(data:any) {
        return this.http.post(this.url_service.api+'company/add/', data)
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    } 

    loadAllCompanies() {
        return this.http.get(this.url_service.api+'company/all/')
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    }

    loadAllProducts() {
        return this.http.get(this.url_service.api+'product/all')
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    }

    addProduct(data:any) {
        return this.http.post(this.url_service.api+'product/add/', data)
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    }

    deleteProduct(id:any) {
        return this.http.delete(this.url_service.api+'product/'+id, {responseType: 'text' as 'json'})
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    }

    addSale(data:any) {
        return this.http.post(this.url_service.api+'sale/add/', data)
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    }

    loadAllSales() {
        return this.http.get(this.url_service.api+'sale/all')
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    }

    loadChartViaCompany(name:any) {
        return this.http.get(this.url_service.api+'chart/'+name)
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    }

    loadChartViaRange(range:any) {
        return this.http.get(this.url_service.api+'chart/range/'+range)
            .pipe(
                catchError(error => {
                    this.utilService.handleError(error);
                    return throwError(error);
                })
            )
    }
}