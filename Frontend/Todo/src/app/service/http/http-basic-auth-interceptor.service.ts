import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpBasicAuthInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let userName: string = 'Akshay8797';
    let password: string = '8797';
    let headerString: string =
      'Basic ' + window.btoa(userName + ':' + password);
    req = req.clone({
      setHeaders: { Authorization: headerString },
    });
    return next.handle(req);
  } 
}
