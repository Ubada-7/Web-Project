import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    name:any;
    email:any;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    nameReducer(name:any) {
        const split = name.split(" ");
        return split[0][0] + split[1][0];
    };
}
