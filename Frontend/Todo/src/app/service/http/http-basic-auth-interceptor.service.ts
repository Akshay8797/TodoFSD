import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HttpBasicAuthInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headerString = this.authenticationService.getAuthenticatedToken();
    let username = this.authenticationService.getAuthenticatedUser();
    if (headerString) {
      req = req.clone({
        setHeaders: { Authorization: headerString },
      });
    }
    return next.handle(req);
  }
}
