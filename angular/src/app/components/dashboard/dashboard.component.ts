import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    isCollapsed = false;
    homePage:boolean = true;

    type = 'line';
    data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 255, 255, 0.4)'
            ],
            borderColor: [
                '#0055cb'
            ],
            color: [
                'red',    // color for data at index 0
                'blue',   // color for data at index 1
                'green',  // color for data at index 2
                'black',  // color for data at index 3
            ],
            borderWidth: 1
        }],
    };
    options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            fontColor: "white",
            labels: {
                fontColor: '#fff'
            }
        },
    };

    companyChartType:any = 'line';
    companyChartData:any = {
        labels: [],
        datasets: [{
            label: "",
            data: [],
            backgroundColor: ['rgba(255, 255, 255, 0.4)'],
            borderColor: ['#0055cb'],
            color: ['red', 'blue', 'green', 'black'],
            borderWidth: 1
        }],
    }
    companyChartOptions:any = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            fontColor: "white",
            labels: {
                fontColor: '#fff'
            }
        },
    }

    segmentOptions = ['1 Day', '1 Month', '6 Month', '1 Year'];
    companySegmentOptions:any = ['Muree Brewery'];
    productSegmentOptions:any = ['Big Apple', 'Big Lychee', 'Big Anar', 'Big Peach', 'Lemon Malt', 'Peach Malt', 'Malt 79'];

    constructor(private router: Router, private apiService: ApiServices) { }

    ngOnInit(): void {
        this.loadAllSales();
        this.router.events.subscribe((event:any) => {
            this.checkDashboardUrl(event);
        });

        this.loadAllCompanies();
    }

    checkDashboardUrl(location: any) {
        this.homePage = (location.url == '/dashboard' || location.url == '/') ? true : false;
    }

    companies:any = [];
    loadAllCompanies() {
        this.apiService.loadAllCompanies().subscribe((response:any) => {
            console.log(response)
            this.companies = response;
            // this.companySegmentOptions = response;
            for(let i=0; i<response.length; i++) {
                this.companySegmentOptions.push(response[i].name)
            }

            console.log(this.companySegmentOptions)
        }, error => {
            console.log(error)
        })
    }

    handleIndexChange(event:any) {
        console.log(event)
    }

    sales:any = [];
    loadAllSales() {
        this.apiService.loadAllSales().subscribe((response:any) => {
            this.sales = response;
            console.log(this.sales)

            this.loadChartViaCompany();
            this.loadChartViaRange();
        }, error => {
            console.log(error)
        })
    }

    loadChartViaCompany() {
        this.companyChartData.labels = [];
        this.companyChartData.datasets[0].data = [];
        this.apiService.loadChartViaCompany('Muree Brewery').subscribe((response:any) => {
            let cLabels = [];
            let cData = [];
            for(let i=0; i<response.length; i++) {
                cLabels.push(moment(response[i].label).format('D:M:Y')) 
                cData.push(response[i].quantity) 
            }

            this.companyChartData.labels = cLabels;
            this.companyChartData.datasets[0].data = cData;
        })
    }

    loadChartViaRange() {
        let range = '1 month';
        this.apiService.loadChartViaRange(range).subscribe((response:any) => {

        })
    }
}
