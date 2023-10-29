import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

// import { CommunicationService } from './communication.service';

@Injectable()
export class UtilService {

    constructor(private router: Router) { }

    public handleError(error: HttpErrorResponse): string {
        console.log(error)
        switch (error.status) {
            case 404: {
                return `Not Found: ${error.message}`;
            }
            case 403: {
                return `Access Denied: ${error.message}`;
            }
            case 500: {
                return `Internal Server Error: ${error.message}`;
            }
            case 401: {
                // this.communicationServce.callClearInterval();
                localStorage.clear();
                this.router.navigate(['login']);
                return `Unauthorized: ${error.message}`;
            }
            default: {
                return `Unknown Server Error: ${error.message}`;
            }

        }
    }
}