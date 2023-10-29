import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { UrlService } from 'app/services/url.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    token:any;
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');
        
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            }
        });
        return next.handle(request);
    }
}